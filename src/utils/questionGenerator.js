import { fallacies } from "../data/fallacies.js";
import { validArguments } from "../data/validArguments.js";
import { quizExamples } from "../data/quizExamples.js";

/** Pick a random example for a fallacy, preferring the quiz-only pool. */
function pickExample(fallacy) {
  const pool = quizExamples[fallacy.name]?.length
    ? quizExamples[fallacy.name]
    : fallacy.examples;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Fisher-Yates in-place shuffle */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) {
  return shuffle(arr).slice(0, n);
}

const NOT_FALLACY_OPTION = "Não é falácia";
const NOT_FALLACY_WEIGHT = 2;

/** Difficulty filters */
const DIFFICULTY_RANGES = {
  novato: [1, 2],
  aprendiz: [1, 3],
  pensador: [1, 4],
  sofista: [1, 5],
};

function fallaciesForMode(mode) {
  const [min, max] = DIFFICULTY_RANGES[mode] ?? [1, 5];
  return fallacies.filter((f) => f.difficulty >= min && f.difficulty <= max);
}

function getModeDifficulty(mode) {
  return DIFFICULTY_RANGES[mode]?.[1] ?? 1;
}

function uniqueByValue(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item.value)) return false;
    seen.add(item.value);
    return true;
  });
}

function pickWeightedUniqueOptions(weightedPool, count) {
  const result = [];
  const used = new Set();
  const pool = [...weightedPool];

  while (result.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    const candidate = pool.splice(index, 1)[0];

    if (used.has(candidate.value)) {
      continue;
    }

    used.add(candidate.value);
    result.push(candidate);
  }

  return result;
}

function buildWeightedDistractorPool(fallacy, mode, sameGroupDistractors) {
  const pool = fallaciesForMode(mode).filter((f) => f.name !== fallacy.name);
  const preferred = sameGroupDistractors
    ? pool.filter((f) => f.group === fallacy.group)
    : pool;
  const fallback = preferred.length >= 2 ? preferred : pool;

  const mappedFallacies = uniqueByValue(
    fallback.map((f) => ({
      label: f.name_pt,
      value: f.name_pt,
      name: f.name,
    })),
  );

  const weightedNotFallacy = Array.from({ length: NOT_FALLACY_WEIGHT }, () => ({
    label: NOT_FALLACY_OPTION,
    value: NOT_FALLACY_OPTION,
    name: null,
  }));

  return [...mappedFallacies, ...weightedNotFallacy];
}

/**
 * Generate a BINARY question (Tipo A): is this a fallacy or not?
 * Used in Novato mode (and Sofista's mixed mode).
 */
function makeBinaryQuestion(fallacy) {
  const exampleObj = pickExample(fallacy);
  return {
    type: "binary",
    statement: exampleObj.exemplo,
    isFallacy: true,
    fallacy,
    exampleObj,
    difficulty: fallacy.difficulty,
    correctAnswer: "sim",
  };
}

function makeValidQuestion(validArg, difficulty = 1) {
  return {
    type: "binary",
    statement: validArg.exemplo,
    isFallacy: false,
    fallacy: null,
    exampleObj: validArg,
    difficulty,
    correctAnswer: "nao",
  };
}

/**
 * Generate a MULTIPLE CHOICE question (Tipo B): which fallacy is this?
 * @param {object} fallacy - the correct fallacy
 * @param {string} mode    - difficulty mode
 * @param {boolean} sameGroupDistractors - harder variant
 */
function makeMultipleChoiceQuestion(fallacy, mode, sameGroupDistractors) {
  const exampleObj = pickExample(fallacy);

  const distractorPool = buildWeightedDistractorPool(
    fallacy,
    mode,
    sameGroupDistractors,
  );
  const distractors = pickWeightedUniqueOptions(distractorPool, 3);

  const options = shuffle([
    {
      label: fallacy.name_pt,
      value: fallacy.name_pt,
      name: fallacy.name,
    },
    ...distractors,
  ]);

  return {
    type: "multiple",
    statement: exampleObj.exemplo,
    isFallacy: true,
    fallacy,
    exampleObj,
    difficulty: fallacy.difficulty,
    options,
    correctAnswer: fallacy.name_pt,
  };
}

function makeMultipleChoiceValidQuestion(mode) {
  const validArg = pickRandom(validArguments, 1)[0];
  const distractors = pickRandom(fallaciesForMode(mode), 3);

  const options = shuffle([
    {
      label: NOT_FALLACY_OPTION,
      value: NOT_FALLACY_OPTION,
      name: null,
    },
    ...distractors.map((f) => ({
      label: f.name_pt,
      value: f.name_pt,
      name: f.name,
    })),
  ]);

  return {
    type: "multiple",
    statement: validArg.exemplo,
    isFallacy: false,
    fallacy: null,
    exampleObj: validArg,
    difficulty: getModeDifficulty(mode),
    options,
    correctAnswer: NOT_FALLACY_OPTION,
  };
}

/**
 * Build a full round of questions (default 10).
 * @param {string} mode   - novato | aprendiz | pensador | sofista
 * @param {number} count  - number of questions
 */
export function generateRound(mode, count = 10) {
  const pool = fallaciesForMode(mode);
  const sameGroup = mode === "pensador" || mode === "sofista";

  let questions = [];

  if (mode === "novato") {
    // 50% fallacy (binary) + 50% valid arguments
    const half = Math.ceil(count / 2);
    const fallacyQ = pickRandom(pool, half).map(makeBinaryQuestion);
    const validQ = pickRandom(validArguments, count - half).map((arg) =>
      makeValidQuestion(arg, getModeDifficulty(mode)),
    );
    questions = shuffle([...fallacyQ, ...validQ]);
  } else if (mode === "aprendiz") {
    const binaryCount = Math.round(count * 0.4);
    const multipleCount = count - binaryCount;
    const binaryFallacies = pickRandom(pool, Math.ceil(binaryCount / 2)).map(
      makeBinaryQuestion,
    );
    const validBinary = pickRandom(
      validArguments,
      binaryCount - binaryFallacies.length,
    ).map((arg) => makeValidQuestion(arg, getModeDifficulty(mode)));
    const multipleQ = pickRandom(pool, multipleCount).map((f) =>
      makeMultipleChoiceQuestion(f, mode, false),
    );

    questions = shuffle([...binaryFallacies, ...validBinary, ...multipleQ]);
  } else if (mode === "pensador") {
    const binaryCount = Math.round(count * 0.3);
    const multipleCount = count - binaryCount;
    const validMultipleCount = Math.max(2, Math.round(multipleCount * 0.3));
    const fallacyMultipleCount = multipleCount - validMultipleCount;

    const binaryFallacies = pickRandom(pool, Math.ceil(binaryCount / 2)).map(
      makeBinaryQuestion,
    );
    const validBinary = pickRandom(
      validArguments,
      binaryCount - binaryFallacies.length,
    ).map((arg) => makeValidQuestion(arg, getModeDifficulty(mode)));
    const multipleFallacyQ = pickRandom(pool, fallacyMultipleCount).map((f) =>
      makeMultipleChoiceQuestion(f, mode, sameGroup),
    );
    const validMultipleQ = Array.from({ length: validMultipleCount }, () =>
      makeMultipleChoiceValidQuestion(mode),
    );

    questions = shuffle([
      ...binaryFallacies,
      ...validBinary,
      ...multipleFallacyQ,
      ...validMultipleQ,
    ]);
  } else {
    const validMultipleCount = Math.max(3, Math.round(count * 0.4));
    const fallacyMultipleCount = count - validMultipleCount;
    const multipleFallacyQ = pickRandom(pool, fallacyMultipleCount).map((f) =>
      makeMultipleChoiceQuestion(f, mode, sameGroup),
    );
    const validMultipleQ = Array.from({ length: validMultipleCount }, () =>
      makeMultipleChoiceValidQuestion(mode),
    );

    questions = shuffle([...multipleFallacyQ, ...validMultipleQ]);
  }

  return questions.slice(0, count);
}
