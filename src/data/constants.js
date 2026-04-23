import { fallacies } from "./fallacies.js";

export const GROUPS = [
  "Todos",
  ...Array.from(new Set(fallacies.map((f) => f.group))),
];

export const GROUP_COLORS = {
  Apelos: { bg: "#0f1f0f", accent: "#4ade80", border: "#1d3a1d" },
  Relevância: { bg: "#0f0f20", accent: "#818cf8", border: "#1d1d3a" },
  Presunção: { bg: "#1f0f0f", accent: "#f87171", border: "#3a1d1d" },
  Causalidade: { bg: "#0f1f1f", accent: "#22d3ee", border: "#1d3a3a" },
  Generalização: { bg: "#1f1f0f", accent: "#fbbf24", border: "#3a3a1d" },
  Ambiguidade: { bg: "#1f0f1f", accent: "#e879f9", border: "#3a1d3a" },
  Formal: { bg: "#0f121f", accent: "#94a3b8", border: "#1d2233" },
  Cognitiva: { bg: "#101f0f", accent: "#86efac", border: "#1d3a1d" },
  Meta: { bg: "#1e0f0f", accent: "#fb923c", border: "#3a1d1d" },
};

export const FALLBACK_COLOR = { bg: "#111", accent: "#888", border: "#333" };

export const GROUP_DESCRIPTIONS = {
  Apelos:
    "Argumentos que substituem lógica por apelos a emoções, autoridade, popularidade ou força. Em vez de provar a tese, buscam convencer pelo sentimento ou pressão.",
  Relevância:
    "Argumentos que tentam desviar a atenção do ponto central, atacando a pessoa, a origem da ideia ou introduzindo temas irrelevantes para evitar debater o mérito.",
  Presunção:
    "Argumentos que introduzem premissas falsas ou não demonstradas como se fossem verdades óbvias, distorcendo a realidade ou a posição do oponente antes de refutá-la.",
  Causalidade:
    "Erros ao estabelecer relações de causa e efeito: confundir correlação com causalidade, simplificar demais cadeias causais complexas ou fazer inferências probabilísticas indevidas.",
  Generalização:
    "Tirar conclusões amplas demais a partir de amostras insuficientes, casos atípicos ou comparações inadequadas entre grupos distintos.",
  Ambiguidade:
    "Argumentos que exploram — ou são vítimas de — palavras, frases ou conceitos com mais de um significado, deslizando entre sentidos diferentes para iludir o raciocínio.",
  Formal:
    "Erros na estrutura lógica do argumento: mesmo que as premissas sejam verdadeiras, a conclusão não se segue validamente das premissas por falha na forma do raciocínio.",
  Cognitiva:
    "Vieses e atalhos mentais que distorcem a percepção, a tomada de decisão e a avaliação de evidências, afetando a qualidade do raciocínio de forma sistemática.",
  Meta:
    "Erros sobre o próprio ato de argumentar: usar a existência de falácias, a complexidade da lógica ou a falibilidade humana para desacreditar o raciocínio em geral.",
};

export const SUBGROUP_DESCRIPTIONS = {
  Apelos: {
    Emocionais:
      "Apelos que exploram sentimentos como medo, piedade, inveja ou esperança para contornar o julgamento racional.",
    Sociais:
      "Apelos que recorrem à aprovação coletiva, prestígio de autoridades ou pertencimento a grupos para justificar uma posição.",
    Coercitivos:
      "Apelos que usam ameaças, força ou consequências negativas para forçar concordância em vez de persuadir com razões.",
    Conceituais:
      "Apelos que exploram conceitos abstratos como natureza, tradição ou novidade como se esses atributos, por si só, validassem uma ideia.",
    Lógicos:
      "Apelos que recorrem à consistência, à ignorância ou a outras propriedades lógicas para criar a aparência de validade sem substância real.",
  },
  Relevância: {
    "Ataques Pessoais":
      "Argumentos que atacam características, histórico ou motivações do interlocutor para invalidar sua posição sem discutir o mérito.",
    Origem:
      "Julgar uma ideia pela sua origem (quem a disse, onde surgiu, como foi criada) em vez de avaliá-la pelo seu conteúdo.",
    Desvio:
      "Introduzir informações ou temas irrelevantes para desviar a atenção do ponto central da discussão.",
  },
  Presunção: {
    Distorção:
      "Representar a posição do oponente de forma exagerada, simplificada ou inversa para facilitar sua refutação.",
    Estrutural:
      "Apresentar falsas dicotomias ou perguntas viciadas que restringem artificialmente as opções disponíveis.",
    Circular:
      "Argumentar usando a própria conclusão como premissa, sem oferecer qualquer evidência externa de suporte.",
    Consequência:
      "Aceitar ou rejeitar uma proposição com base nas consequências de aceitá-la, e não com base na sua veracidade.",
    Definição:
      "Redefinir um termo de forma conveniente após o argumento ser desafiado, movendo o alvo para escapar de críticas.",
    Generalização:
      "Aplicar a casos individuais regras gerais que não se sustentam sem exceções, ou vice-versa.",
    Evidência:
      "Tratar a ausência de prova contrária como evidência positiva, ou exigir provas impossíveis para refutar uma posição.",
  },
  Causalidade: {
    Correlação:
      "Inferir que dois eventos relacionados no tempo ou no espaço possuem uma relação de causa e efeito.",
    Probabilidade:
      "Erros ao raciocinar sobre chances, sequências aleatórias ou a representatividade de eventos.",
    Simplificação:
      "Atribuir causas únicas ou simples a fenômenos que resultam de múltiplos fatores interdependentes.",
  },
  Generalização: {
    Amostra:
      "Tirar conclusões amplas a partir de amostras pequenas, atípicas ou selecionadas de forma tendenciosa.",
    Comparação:
      "Fazer analogias ou comparações entre grupos, situações ou categorias que diferem em aspectos relevantes.",
    Estrutural:
      "Inferir incorretamente que o que é verdadeiro para as partes é verdadeiro para o todo, ou vice-versa.",
  },
  Ambiguidade: {
    Semântica:
      "Explorar palavras com múltiplos significados, alternando entre eles para tornar o argumento mais forte do que realmente é.",
    Sintaxe:
      "Frases gramaticalmente ambíguas que permitem mais de uma interpretação razoável, gerando conclusões enganosas.",
    Conceitual:
      "Confundir termos que parecem equivalentes mas possuem distinções importantes, levando a conclusões inválidas.",
  },
  Formal: {
    Condicional:
      "Erros na lógica de proposições 'se… então…': afirmar o consequente ou negar o antecedente de forma inválida.",
    Silogismo:
      "Erros na estrutura de silogismos: distribuição incorreta de termos médios ou conclusões que não seguem das premissas.",
  },
  Cognitiva: {
    Decisão:
      "Vieses que distorcem escolhas: ancoragem em valores arbitrários, aversão à perda ou excesso de confiança.",
    Percepção:
      "Vieses que distorcem como avaliamos evidências: confirmar o que já cremos, focar no saliente e ignorar o banal.",
    Social:
      "Vieses que emergem da influência do grupo: conformidade, atribuição de intenção e julgamento por pertencimento.",
  },
  Meta: {
    Lógica:
      "Argumentos que usam a complexidade, a falibilidade ou a própria existência de falácias para rejeitar o raciocínio lógico como ferramenta.",
  },
};
