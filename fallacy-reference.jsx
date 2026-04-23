import { useState, useMemo } from "react";

const fallacies = [
  // ── APELOS ──────────────────────────────────────────────
  {
    name: "Ad Misericordiam", name_pt: "Apelo à Piedade",
    group: "Apelos", subgroup: "Emocionais", frequency: 4, difficulty: 2,
    note: "Usar compaixão para desviar do mérito do argumento.",
    description: "Quando alguém tenta te convencer de algo fazendo você sentir pena, em vez de usar um argumento de verdade.",
    examples: [
      { exemplo: "Professor, o senhor não pode me reprovar. Minha mãe vai ficar muito triste.", explicacao: "A tristeza da mãe não muda o desempenho do aluno. São coisas separadas." },
      { exemplo: "Você não pode votar contra essa lei — pense nas crianças que vão sofrer se ela não passar!", explicacao: "A imagem das crianças sofrendo é usada para evitar a análise real do mérito da lei." }
    ]
  },
  {
    name: "Ad Populum", name_pt: "Apelo à Popularidade",
    group: "Apelos", subgroup: "Sociais", frequency: 5, difficulty: 2,
    note: "\"A maioria acredita, então é verdade.\"",
    description: "Achar que algo é verdade só porque muita gente acredita nisso. Mas muita gente já acreditou que a Terra era plana.",
    examples: [
      { exemplo: "Esse remédio natural funciona — milhões de pessoas usam!", explicacao: "Popularidade não é prova de eficácia. Muita gente também usou sangrias no passado." },
      { exemplo: "Todo mundo acha que ele é culpado, então deve ser mesmo.", explicacao: "Opinião popular não substitui evidências. Tribunais existem exatamente por isso." }
    ]
  },
  {
    name: "Ad Verecundiam", name_pt: "Apelo à Autoridade",
    group: "Apelos", subgroup: "Sociais", frequency: 5, difficulty: 3,
    note: "Citar autoridade fora de sua área ou como prova definitiva.",
    description: "Usar o nome de alguém famoso ou especialista como se isso encerrasse qualquer discussão, especialmente quando o assunto não é a área da pessoa.",
    examples: [
      { exemplo: "Esse ator famoso disse que essa dieta funciona, então deve ser verdade.", explicacao: "Ser famoso não torna alguém especialista em nutrição. A opinião dele vale tanto quanto a de qualquer leigo." },
      { exemplo: "O Einstein acreditava em Deus, então ateísmo não faz sentido.", explicacao: "Crença pessoal de um físico não é evidência filosófica ou científica sobre a existência de Deus." }
    ]
  },
  {
    name: "Ad Baculum", name_pt: "Apelo à Força / Coerção",
    group: "Apelos", subgroup: "Coercitivos", frequency: 3, difficulty: 2,
    note: "Usar ameaças implícitas ou explícitas para forçar concordância.",
    description: "Tentar convencer alguém usando medo ou ameaça, em vez de um argumento real.",
    examples: [
      { exemplo: "Você vai concordar com minha proposta, ou eu faço de tudo para dificultar sua vida aqui na empresa.", explicacao: "Ameaça não é argumento. A proposta pode ser boa ou ruim independentemente da ameaça." },
      { exemplo: "É melhor você apoiar essa política — quem não apoia costuma ter problemas com o governo.", explicacao: "Intimidação substitui raciocínio. A política deve ser avaliada pelo seu mérito." }
    ]
  },
  {
    name: "Appeal to Fear", name_pt: "Apelo ao Medo",
    group: "Apelos", subgroup: "Emocionais", frequency: 5, difficulty: 2,
    note: "Criar cenário assustador para pressionar a uma conclusão.",
    description: "Assustar as pessoas com um futuro terrível para fazê-las aceitar uma ideia, sem provar que esse futuro vai realmente acontecer.",
    examples: [
      { exemplo: "Se você não comprar esse seguro agora, vai perder tudo amanhã.", explicacao: "O medo é evocado artificialmente para pressionar a decisão, sem apresentar probabilidades reais." },
      { exemplo: "Se esse candidato ganhar, o país vai virar uma ditadura.", explicacao: "Projeção catastrófica sem evidência concreta, usada para influenciar o voto pelo medo." }
    ]
  },
  {
    name: "Appeal to Nature", name_pt: "Apelo à Natureza",
    group: "Apelos", subgroup: "Conceituais", frequency: 4, difficulty: 2,
    note: "\"É natural, logo é bom/seguro/correto.\"",
    description: "Achar que algo é bom só porque é natural, ou ruim só porque é artificial. Mas veneno de cobra é natural.",
    examples: [
      { exemplo: "Esse chá é melhor do que o remédio porque é completamente natural.", explicacao: "Natural não significa seguro ou eficaz. Muitas plantas são tóxicas e muitos remédios salvam vidas." },
      { exemplo: "Vacinas são ruins porque são artificiais, não fazem parte da natureza.", explicacao: "O grau de naturalidade de algo não determina se é bom ou ruim para a saúde." }
    ]
  },
  {
    name: "Appeal to Tradition", name_pt: "Apelo à Tradição",
    group: "Apelos", subgroup: "Conceituais", frequency: 4, difficulty: 2,
    note: "\"Sempre foi assim, então deve continuar.\"",
    description: "Defender algo só porque existe há muito tempo, sem avaliar se ainda faz sentido hoje.",
    examples: [
      { exemplo: "As mulheres nunca votaram nessa família, não vamos mudar isso agora.", explicacao: "Tradição não justifica perpetuar práticas que podemos questionar com razão." },
      { exemplo: "Educação física sempre foi obrigatória na escola, então deve continuar sendo.", explicacao: "A antiguidade da prática não responde se ela é a melhor abordagem educacional hoje." }
    ]
  },
  {
    name: "Appeal to Novelty", name_pt: "Apelo à Novidade",
    group: "Apelos", subgroup: "Conceituais", frequency: 3, difficulty: 3,
    note: "\"É novo, logo é melhor.\" Oposto da tradição.",
    description: "Achar que algo é melhor só porque é novo ou moderno, sem verificar se realmente é superior.",
    examples: [
      { exemplo: "Essa metodologia de ensino é nova, então com certeza é melhor do que as antigas.", explicacao: "Novidade não implica superioridade. A metodologia deve ser avaliada por resultados." },
      { exemplo: "Por que usar esse software velho? Esse novo acabou de sair!", explicacao: "Um produto novo pode ter mais bugs e menos recursos que uma versão madura e testada." }
    ]
  },
  {
    name: "Appeal to Consequences", name_pt: "Apelo às Consequências",
    group: "Apelos", subgroup: "Lógicos", frequency: 4, difficulty: 3,
    note: "Rejeitar uma afirmação por suas consequências indesejáveis.",
    description: "Dizer que algo não pode ser verdade porque seria ruim se fosse. Mas a realidade não muda porque a verdade é inconveniente.",
    examples: [
      { exemplo: "Não pode ser verdade que essa empresa está falindo — muita gente perderia o emprego.", explicacao: "O impacto emocional das consequências não altera os fatos financeiros da empresa." },
      { exemplo: "A teoria da evolução não pode estar certa, porque isso significaria que não temos propósito.", explicacao: "A conclusão filosófica que alguém tira da teoria não afeta se ela é cientificamente válida." }
    ]
  },
  {
    name: "Ad Ignorantiam", name_pt: "Apelo à Ignorância",
    group: "Apelos", subgroup: "Lógicos", frequency: 4, difficulty: 3,
    note: "\"Não foi provado que é falso, logo é verdadeiro.\"",
    description: "Achar que algo é verdade só porque ninguém ainda provou que é mentira — ou o contrário. O ônus da prova recai em quem afirma.",
    examples: [
      { exemplo: "Ninguém provou que aliens não existem, então eles existem.", explicacao: "Ausência de refutação não é prova de existência. A falta de evidência contra algo não é evidência a favor." },
      { exemplo: "Como você pode dizer que Deus não existe se ninguém conseguiu provar que ele não existe?", explicacao: "A ausência de prova negativa não confirma a afirmação positiva." }
    ]
  },
  {
    name: "Appeal to Emotion", name_pt: "Apelo à Emoção (geral)",
    group: "Apelos", subgroup: "Emocionais", frequency: 5, difficulty: 2,
    note: "Usar emoções no lugar de evidências e raciocínio.",
    description: "Tentar ganhar um argumento mexendo com os sentimentos da pessoa em vez de apresentar fatos e razões.",
    examples: [
      { exemplo: "Como você pode ser contra esse projeto? Pense em quanto nosso time trabalhou nisso!", explicacao: "O esforço investido não define se o projeto é bom ou ruim. São questões separadas." },
      { exemplo: "Você deveria apoiar essa causa — não sente nada pelo sofrimento dessas pessoas?", explicacao: "Apelar à culpa não responde à pergunta sobre se a causa proposta realmente resolve o problema." }
    ]
  },
  {
    name: "Appeal to Ridicule", name_pt: "Apelo ao Ridículo",
    group: "Apelos", subgroup: "Emocionais", frequency: 4, difficulty: 2,
    note: "Ridicularizar a posição contrária em vez de refutá-la.",
    description: "Fazer a ideia do outro parecer ridícula ou engraçada para que as pessoas não levem a sério, sem precisar refutá-la de verdade.",
    examples: [
      { exemplo: "Você acredita em mudança climática? Que ingênuo! Faz frio toda semana aqui.", explicacao: "O sarcasmo não substitui análise dos dados científicos sobre clima global." },
      { exemplo: "Vocês economistas ainda acreditam nessa teoria velha? Que coisa do século passado!", explicacao: "Ridicularizar não derruba uma teoria. São necessários argumentos e evidências." }
    ]
  },
  {
    name: "Appeal to Silence", name_pt: "Apelo ao Silêncio",
    group: "Apelos", subgroup: "Lógicos", frequency: 2, difficulty: 4,
    note: "Interpretar ausência de resposta como concordância.",
    description: "Concluir que alguém concorda com você só porque não respondeu ou não falou nada. Mas silêncio tem muitas causas.",
    examples: [
      { exemplo: "Eu disse ao grupo que iriamos mudar de plano e ninguém reclamou, então todo mundo aprovou.", explicacao: "As pessoas podem não ter respondido por distração, medo, ou por não terem visto a mensagem." },
      { exemplo: "A empresa não comentou sobre as acusações, o que prova que são verdadeiras.", explicacao: "Silêncio pode significar assessoria jurídica, estratégia comunicacional ou qualquer outra razão." }
    ]
  },
  {
    name: "Appeal to Wealth / Poverty", name_pt: "Apelo à Riqueza ou Pobreza",
    group: "Apelos", subgroup: "Sociais", frequency: 3, difficulty: 3,
    note: "Usar status econômico como critério de validade.",
    description: "Achar que uma ideia é melhor ou pior dependendo de quem tem dinheiro e quem não tem — como se a carteira determinasse a razão.",
    examples: [
      { exemplo: "Ele é bilionário, então sabe como gerir dinheiro melhor do que qualquer um de vocês.", explicacao: "Riqueza pode ter origens variadas e não garante acerto em qualquer contexto financeiro." },
      { exemplo: "Por que ouvir esse economista pobre? Ele não consegue nem se sustentar.", explicacao: "A situação financeira pessoal do economista não invalida seus argumentos técnicos." }
    ]
  },
  {
    name: "Appeal to Flattery", name_pt: "Apelo à Lisonja",
    group: "Apelos", subgroup: "Emocionais", frequency: 3, difficulty: 2,
    note: "Elogiar o interlocutor para fazê-lo concordar.",
    description: "Fazer um elogio grande para que a pessoa se sinta bem e acabe concordando com o que você quer, sem precisar de argumento real.",
    examples: [
      { exemplo: "Uma pessoa inteligente como você certamente vai entender por que devemos aceitar essa proposta.", explicacao: "O elogio cria pressão psicológica: discordar pareceria contradizer a própria inteligência elogiada." },
      { exemplo: "Você é o melhor pai do mundo — com certeza vai me deixar sair mais tarde hoje!", explicacao: "O elogio é usado instrumentalmente para conseguir permissão, sem razão que a justifique." }
    ]
  },
  // ── RELEVÂNCIA ──────────────────────────────────────────
  {
    name: "Ad Hominem", name_pt: "Ataque à Pessoa",
    group: "Relevância", subgroup: "Ataques Pessoais", frequency: 5, difficulty: 2,
    note: "Atacar quem faz o argumento em vez do argumento em si.",
    description: "Em vez de rebater o que alguém disse, você ataca a pessoa: o jeito que ela fala, o passado dela, o que ela faz de errado.",
    examples: [
      { exemplo: "Você não pode opinar sobre a economia do país porque nem consegue manter seu quarto arrumado.", explicacao: "Organizar o quarto não influencia a visão que uma pessoa pode ter sobre economia. São coisas sem relação." },
      { exemplo: "Não preciso ouvir seus conselhos de saúde — você fuma!", explicacao: "O comportamento pessoal da pessoa não torna automaticamente errado o conselho que ela dá. O argumento deve ser avaliado por si mesmo." }
    ]
  },
  {
    name: "Ad Hominem Circumstantial", name_pt: "Ad Hominem Circunstancial",
    group: "Relevância", subgroup: "Ataques Pessoais", frequency: 4, difficulty: 3,
    note: "\"Você defende X porque se beneficia disso.\"",
    description: "Dizer que alguém só defende uma ideia porque tem interesse pessoal nisso, como se isso tornasse o argumento errado.",
    examples: [
      { exemplo: "Claro que esse médico defende o remédio — a farmacêutica paga o salário dele.", explicacao: "Conflito de interesse é algo a se considerar, mas não invalida automaticamente o argumento. O remédio pode ser eficaz mesmo assim." },
      { exemplo: "Você defende o aumento de salário mínimo só porque você é pobre.", explicacao: "Ter interesse pessoal num assunto não torna o argumento errado. Os fatos econômicos existem independentemente." }
    ]
  },
  {
    name: "Tu Quoque", name_pt: "E Você Também",
    group: "Relevância", subgroup: "Ataques Pessoais", frequency: 5, difficulty: 2,
    note: "Evitar crítica apontando que o crítico também errou.",
    description: "Quando alguém te critica, você aponta que essa pessoa também comete o mesmo erro — como se isso tornasse a crítica inválida.",
    examples: [
      { exemplo: "Você me diz para parar de comer fast food, mas te vi comendo hambúrguer semana passada!", explicacao: "A inconsistência de quem critica não torna a crítica errada. Fast food pode ser mesmo prejudicial." },
      { exemplo: "O partido me critica por gastar demais, mas eles também gastaram quando estavam no poder!", explicacao: "Gastos anteriores do crítico não justificam gastos excessivos atuais." }
    ]
  },
  {
    name: "Poisoning the Well", name_pt: "Envenenamento do Poço",
    group: "Relevância", subgroup: "Ataques Pessoais", frequency: 4, difficulty: 3,
    note: "Desacreditar alguém antes que fale, para anular o que dirá.",
    description: "Antes de alguém falar, você já joga informações negativas sobre essa pessoa para que ninguém acredite no que ela vai dizer.",
    examples: [
      { exemplo: "Antes de ouvir o próximo palestrante, saibam que ele foi demitido por desonestidade.", explicacao: "A informação pode ser verdadeira ou falsa, mas é usada para contaminar a recepção do argumento antes mesmo de ser feito." },
      { exemplo: "Essa testemunha tem interesse no caso, então qualquer coisa que disser é suspeita.", explicacao: "Preparar o público para rejeitar o depoimento antes de ouvi-lo impede análise imparcial." }
    ]
  },
  {
    name: "Genetic Fallacy", name_pt: "Falácia Genética",
    group: "Relevância", subgroup: "Origem", frequency: 3, difficulty: 4,
    note: "Julgar argumento pela origem ou fonte, não pelo conteúdo.",
    description: "Rejeitar ou aceitar uma ideia por causa de onde ela veio, e não pelo que ela diz. Mas ideias boas podem vir de lugares inesperados.",
    examples: [
      { exemplo: "Essa teoria foi desenvolvida por um regime autoritário, então não pode ser válida.", explicacao: "A origem política de uma pesquisa não determina sua correção científica. Os dados precisam ser analisados." },
      { exemplo: "Ignore essa crítica — foi publicada num blog de fofoca.", explicacao: "A origem informal não invalida automaticamente o conteúdo. A crítica pode ser correta ou não independentemente do veículo." }
    ]
  },
  {
    name: "Guilt by Association", name_pt: "Culpa por Associação",
    group: "Relevância", subgroup: "Ataques Pessoais", frequency: 4, difficulty: 3,
    note: "Invalidar ideia por ela ser defendida por grupo indesejável.",
    description: "Dizer que uma ideia é ruim só porque pessoas ruins ou impopulares também a defendem.",
    examples: [
      { exemplo: "Essa proposta de redução de impostos foi apoiada por um político corrupto, então é uma ideia horrível.", explicacao: "Uma proposta de política pública deve ser avaliada pelos seus efeitos reais, não por quem a apoia." },
      { exemplo: "Esse argumento é o mesmo que grupos extremistas usam, então você está errado.", explicacao: "Grupos extremistas podem usar argumentos corretos em certos pontos. A origem do argumento não define sua validade." }
    ]
  },
  {
    name: "Red Herring", name_pt: "Pista Falsa / Arenque Vermelho",
    group: "Relevância", subgroup: "Desvio", frequency: 5, difficulty: 3,
    note: "Introduzir tema irrelevante para desviar do ponto central.",
    description: "Jogar um assunto diferente no meio da discussão para distrair as pessoas do ponto principal, como um truque de mágica.",
    examples: [
      { exemplo: "Por que falar sobre corrupção nesse governo se no governo anterior também tinha corrupção?", explicacao: "Corrupção passada é um assunto diferente da corrupção atual. Introduzir o passado desvia do que está sendo discutido." },
      { exemplo: "Você critica minha empresa por poluir, mas já olhou como a indústria na China está?", explicacao: "A poluição na China é irrelevante para avaliar o comportamento da empresa em questão." }
    ]
  },
  {
    name: "Whataboutism", name_pt: "E Fulano? / Deflexão",
    group: "Relevância", subgroup: "Desvio", frequency: 5, difficulty: 2,
    note: "Desviar de crítica apontando outro problema. Variante do Tu Quoque.",
    description: "Quando você é criticado, você aponta outro problema em outra pessoa ou lugar, como se isso resolvesse o seu problema.",
    examples: [
      { exemplo: "Por que falar dos direitos humanos aqui se os Estados Unidos também violam direitos?", explicacao: "Violações em outros lugares não justificam as violações do país em questão. Ambos podem estar errados." },
      { exemplo: "Você me acusa de chegar atrasado, e o João? Ele também sempre se atrasa!", explicacao: "O comportamento do João não justifica o atraso do falante. São questões independentes." }
    ]
  },
  {
    name: "Relative Privation", name_pt: "Privação Relativa",
    group: "Relevância", subgroup: "Desvio", frequency: 4, difficulty: 3,
    note: "\"Existem coisas piores\", usado para invalidar um problema real.",
    description: "Dizer que um problema não importa porque existem problemas maiores no mundo. Mas um problema não desaparece por existirem outros piores.",
    examples: [
      { exemplo: "Você está reclamando de dor de cabeça? Tem gente morrendo de fome no mundo!", explicacao: "A existência de sofrimento maior não elimina nem torna irrelevante um sofrimento menor." },
      { exemplo: "Por que se preocupar com desmatamento local se o Amazonas está sendo destruído?", explicacao: "Problemas ambientais de diferentes escalas coexistem e merecem atenção independentemente." }
    ]
  },
  {
    name: "Thought-Terminating Cliché", name_pt: "Clichê Que Encerra o Pensamento",
    group: "Relevância", subgroup: "Desvio", frequency: 4, difficulty: 3,
    note: "Frase feita usada para bloquear raciocínio crítico.",
    description: "Usar uma frase pronta e conhecida para encerrar a conversa sem precisar pensar de verdade.",
    examples: [
      { exemplo: "Não adianta questionar — é assim que as coisas funcionam.", explicacao: "A frase impede análise: por que as coisas funcionam assim? Isso é inevitável ou pode mudar?" },
      { exemplo: "Deus quis assim. Ponto final.", explicacao: "A frase encerra qualquer possibilidade de investigação sobre causas, responsabilidades ou soluções." }
    ]
  },
  // ── PRESUNÇÃO ────────────────────────────────────────────
  {
    name: "Straw Man", name_pt: "Espantalho / Homem de Palha",
    group: "Presunção", subgroup: "Distorção", frequency: 5, difficulty: 3,
    note: "Distorcer o argumento alheio para atacar uma versão mais fraca.",
    description: "Em vez de rebater o que alguém realmente disse, você inventa uma versão exagerada ou distorcida da ideia e ataca essa versão.",
    examples: [
      { exemplo: "Você quer reduzir o orçamento militar? Então quer deixar o país completamente indefeso!", explicacao: "Reduzir orçamento não é o mesmo que acabar com a defesa. O argumento original foi exagerado para parecer absurdo." },
      { exemplo: "Então você acha que devemos dar dinheiro para todo mundo não trabalhar?", explicacao: "Uma proposta de renda básica foi transformada numa caricatura para ser mais fácil de atacar." }
    ]
  },
  {
    name: "False Dilemma", name_pt: "Falso Dilema / Dicotomia",
    group: "Presunção", subgroup: "Estrutural", frequency: 5, difficulty: 2,
    note: "Apresentar apenas duas opções quando existem mais.",
    description: "Fazer parecer que só existem duas escolhas possíveis quando na verdade há outras opções no meio ou ao redor.",
    examples: [
      { exemplo: "Ou você está comigo ou está contra mim.", explicacao: "Existe um amplo espaço entre apoio total e oposição total. Alguém pode concordar em partes e discordar em outras." },
      { exemplo: "Se você não apoia essa guerra, você apoia os terroristas.", explicacao: "Há muitas posições possíveis: criticar a estratégia, propor alternativas diplomáticas, etc." }
    ]
  },
  {
    name: "Begging the Question", name_pt: "Petição de Princípio",
    group: "Presunção", subgroup: "Circular", frequency: 4, difficulty: 4,
    note: "A conclusão já está embutida nas premissas de forma velada.",
    description: "Usar como premissa a própria coisa que você quer provar, mas de um jeito disfarçado para não parecer óbvio.",
    examples: [
      { exemplo: "A Bíblia é verdade porque está escrito na Bíblia que ela é verdade.", explicacao: "Usar o próprio livro para provar que o livro é confiável é circular: a premissa já pressupõe a conclusão." },
      { exemplo: "Essa lei é justa porque é legal, e tudo que é legal é justo.", explicacao: "A equivalência entre legal e justo é exatamente o que precisaria ser provado, não assumido." }
    ]
  },
  {
    name: "Circular Reasoning", name_pt: "Raciocínio Circular",
    group: "Presunção", subgroup: "Circular", frequency: 4, difficulty: 4,
    note: "A conclusão é usada como premissa de forma explícita.",
    description: "O argumento anda em círculos: A prova B e B prova A, sem nunca sair do lugar.",
    examples: [
      { exemplo: "Eu sou confiável porque nunca minto. E nunca minto porque sou confiável.", explicacao: "As duas afirmações se sustentam mutuamente sem qualquer evidência externa." },
      { exemplo: "Esse produto é o melhor porque é o mais vendido, e é o mais vendido porque é o melhor.", explicacao: "Vendas podem ter outros motivos além de qualidade. As afirmações não se provam mutuamente." }
    ]
  },
  {
    name: "Slippery Slope", name_pt: "Plano Inclinado / Escorregão",
    group: "Presunção", subgroup: "Consequência", frequency: 5, difficulty: 3,
    note: "\"Se A acontecer, inevitavelmente Z acontecerá.\" Sem justificar os passos intermediários.",
    description: "Dizer que uma pequena mudança vai inevitavelmente levar a uma catástrofe, sem mostrar por quê cada passo aconteceria.",
    examples: [
      { exemplo: "Se liberarmos maconha, em pouco tempo todo mundo vai usar heroína.", explicacao: "Não há evidência de que legalizar uma substância leva automaticamente ao uso de outras mais pesadas." },
      { exemplo: "Se deixarmos as crianças usar celular na escola, logo nenhuma delas vai mais prestar atenção em nada.", explicacao: "Existem formas de regular o uso. A conclusão catastrófica ignora possibilidades intermediárias." }
    ]
  },
  {
    name: "False Equivalence", name_pt: "Falsa Equivalência",
    group: "Presunção", subgroup: "Distorção", frequency: 5, difficulty: 3,
    note: "Tratar duas coisas como igualmente válidas quando há diferença substancial.",
    description: "Comparar duas coisas como se fossem iguais quando na verdade são muito diferentes em tamanho, contexto ou consequências.",
    examples: [
      { exemplo: "Tanto faz ouvir o cientista quanto o influenciador — cada um tem sua opinião.", explicacao: "Opinião baseada em pesquisa de décadas não equivale a opinião pessoal sem embasamento." },
      { exemplo: "Matar um mosquito e matar uma vaca é a mesma coisa moralmente.", explicacao: "Equiparar sem justificativa ignora diferenças relevantes de complexidade cognitiva e ecossistema." }
    ]
  },
  {
    name: "No True Scotsman", name_pt: "Nenhum Verdadeiro Escocês",
    group: "Presunção", subgroup: "Definição", frequency: 3, difficulty: 4,
    note: "Redefinir o grupo para excluir contra-exemplos inconvenientes.",
    description: "Quando alguém dá um contra-exemplo ao que você disse sobre um grupo, você simplesmente diz que aquela pessoa não conta como membro de verdade do grupo.",
    examples: [
      { exemplo: "— Nenhum cristão faria uma coisa dessas. — Mas aquele pastor fez. — Bom, ele não era um cristão de verdade então.", explicacao: "A definição de 'cristão de verdade' é ajustada depois do fato para preservar a afirmação original." },
      { exemplo: "— Nenhum torcedor real abandona nos momentos difíceis. — Mas meu amigo foi embora no segundo tempo. — Ele não é um torcedor de verdade.", explicacao: "A categoria é redefinida para excluir qualquer caso inconveniente." }
    ]
  },
  {
    name: "Loaded Question", name_pt: "Pergunta Tendenciosa",
    group: "Presunção", subgroup: "Estrutural", frequency: 4, difficulty: 3,
    note: "Pergunta que pressupõe algo não estabelecido.",
    description: "Uma pergunta que já inclui uma suposição falsa ou não provada dentro dela, forçando a pessoa a aceitar essa suposição ao responder.",
    examples: [
      { exemplo: "Você já parou de bater na sua esposa?", explicacao: "Qualquer resposta (sim ou não) implica que a pessoa batia. A premissa jamais foi estabelecida." },
      { exemplo: "Por que você odeia tanto os pobres?", explicacao: "A pergunta já assume que a pessoa odeia os pobres, sem isso ter sido demonstrado." }
    ]
  },
  {
    name: "Accident", name_pt: "Acidente / Exceção Ignorada",
    group: "Presunção", subgroup: "Generalização", frequency: 3, difficulty: 4,
    note: "Aplicar regra geral a um caso que claramente é exceção.",
    description: "Pegar uma regra que funciona na maioria dos casos e aplicar ela mesmo quando a situação claramente não se encaixa.",
    examples: [
      { exemplo: "Devolver o que é emprestado é obrigação. Logo você deveria devolver essa faca ao seu amigo que agora quer te matar.", explicacao: "A regra de devolver empréstimos não se aplica quando cria perigo imediato à vida." },
      { exemplo: "A lei diz que é proibido entrar sem ingresso. Mas a ambulância entrou sem pagar!", explicacao: "Emergências médicas são claramente uma exceção razoável a qualquer regra de acesso." }
    ]
  },
  {
    name: "Converse Accident", name_pt: "Acidente Inverso",
    group: "Presunção", subgroup: "Generalização", frequency: 3, difficulty: 4,
    note: "Generalizar a partir de um caso excpcional.",
    description: "Usar uma situação excepcional como se fosse uma regra geral. O oposto do Acidente.",
    examples: [
      { exemplo: "Damos morfina a pacientes em dor extrema, então deveríamos poder dar opioides a qualquer um.", explicacao: "A permissão em contexto clínico controlado não se aplica ao uso geral irrestrito." },
      { exemplo: "Meu avô fumou a vida toda e viveu até os 90. Logo fumar não faz tão mal assim.", explicacao: "Um caso excepcional não invalida as estatísticas gerais sobre os danos do tabagismo." }
    ]
  },
  {
    name: "Cherry Picking", name_pt: "Seleção Tendenciosa de Evidências",
    group: "Presunção", subgroup: "Evidência", frequency: 5, difficulty: 3,
    note: "Escolher apenas as evidências favoráveis, ignorando as contrárias.",
    description: "Selecionar apenas os dados que apoiam a sua conclusão e ignorar todos os outros que a contradizem, como colher só as cerejas vermelhas e esconder as podres.",
    examples: [
      { exemplo: "Olha, em 3 dos últimos 5 anos a economia cresceu com esse governo!", explicacao: "Apresentar só os anos bons omitindo os anos ruins cria uma imagem distorcida do desempenho." },
      { exemplo: "Esse suplemento tem 5 estudos mostrando que funciona.", explicacao: "Se existem 50 estudos e 45 mostram que não funciona, apresentar só os 5 favoráveis é desonesto." }
    ]
  },
  {
    name: "Moving the Goalposts", name_pt: "Mudar as Traves",
    group: "Presunção", subgroup: "Estrutural", frequency: 4, difficulty: 3,
    note: "Exigir critérios adicionais sempre que os anteriores são atendidos.",
    description: "Quando alguém atende o que você pediu como prova, você muda o critério e pede outra coisa — indefinidamente.",
    examples: [
      { exemplo: "— Mostre um fóssil de transição. — Aqui está. — Bom, agora preciso de mais dois. — Aqui estão. — Mas precisam ser de espécies diferentes...", explicacao: "Os critérios de aceitação mudam constantemente, tornando impossível qualquer prova ser aceita." },
      { exemplo: "— Se você terminar o projeto até sexta, ganhe o bônus. — Terminei! — Ah, mas precisava também estar dentro do orçamento.", explicacao: "As condições foram alteradas após o cumprimento das originais." }
    ]
  },
  {
    name: "Special Pleading", name_pt: "Pleito Especial",
    group: "Presunção", subgroup: "Estrutural", frequency: 4, difficulty: 4,
    note: "Reivindicar exceção à regra sem justificativa legítima.",
    description: "Aplicar regras a todos exceto a si mesmo, sem dar uma boa razão para essa exceção.",
    examples: [
      { exemplo: "Todo mundo deve pagar impostos, mas minha empresa é diferente — geramos empregos.", explicacao: "Gerar empregos é comum a muitas empresas. Sem critério claro, a exceção é arbitrária." },
      { exemplo: "Você pediu para todo mundo chegar na hora, mas eu posso me atrasar — você sabe como são minhas manhãs.", explicacao: "Manhãs difíceis são comuns a todos. Reivindicar exceção sem critério distinto é inconsistente." }
    ]
  },
  {
    name: "Nirvana Fallacy", name_pt: "Falácia da Solução Perfeita",
    group: "Presunção", subgroup: "Estrutural", frequency: 3, difficulty: 3,
    note: "Rejeitar boa solução por não ser perfeita.",
    description: "Recusar uma solução que funciona bem porque ela não é 100% perfeita, sem oferecer nenhuma alternativa melhor.",
    examples: [
      { exemplo: "Não adianta usar cinto de segurança — ele não evita 100% das mortes em acidentes.", explicacao: "O cinto reduz drasticamente mortes. Rejeitar por não ser perfeito ignora o benefício real." },
      { exemplo: "Essas eleições não valem nada — o sistema ainda tem corrupção.", explicacao: "Um sistema imperfeito pode ainda ser melhor do que a ausência de eleições." }
    ]
  },
  {
    name: "Motte and Bailey", name_pt: "Castelo e Pátio",
    group: "Presunção", subgroup: "Definição", frequency: 3, difficulty: 5,
    note: "Defender posição radical (pátio) mas recuar para posição segura (castelo) quando pressionado.",
    description: "Você defende uma ideia ousada (difícil de defender), mas quando alguém te ataca, você recua para uma versão bem mais modesta da mesma ideia. Quando a pressão passa, volta para a ideia original.",
    examples: [
      { exemplo: "— Toda propriedade privada é roubo! — Isso é absurdo. — Calma, só estou dizendo que propriedade tem uma história complexa.", explicacao: "A posição radical foi substituída por uma versão benigna quando contestada, mas a original é o ponto que se quer defender." },
      { exemplo: "— Astrologia explica completamente sua personalidade. — Isso não tem base científica. — Não estou dizendo que é ciência, só que tem influência simbólica.", explicacao: "Recua da afirmação forte para uma vaga quando pressionado, mas volta à forte em outros momentos." }
    ]
  },
  {
    name: "Texas Sharpshooter", name_pt: "Atirador do Texas",
    group: "Presunção", subgroup: "Evidência", frequency: 3, difficulty: 4,
    note: "Encontrar padrão nos dados após os fatos, ignorando o que não se encaixa.",
    description: "É como atirar numa parede e depois desenhar o alvo em volta dos buracos — você inventa o padrão depois de ver os dados.",
    examples: [
      { exemplo: "Olha como as datas de nascimento dos grandes líderes se concentram em março e outubro!", explicacao: "Com dados suficientes sempre surgem agrupamentos aleatórios. Definir o padrão após vê-lo não é descoberta." },
      { exemplo: "Esse profeta previu 7 das 10 catástrofes do último século!", explicacao: "Se ele fez centenas de previsões vagas, 7 acertos podem ser coincidência. Os erros são ignorados." }
    ]
  },
  {
    name: "Golden Mean Fallacy", name_pt: "Falácia do Meio-Termo",
    group: "Presunção", subgroup: "Estrutural", frequency: 3, difficulty: 3,
    note: "Assumir que a verdade sempre está entre dois extremos.",
    description: "Achar que a posição correta é sempre a do meio entre duas opiniões, mesmo quando uma delas está claramente errada.",
    examples: [
      { exemplo: "Um cientista diz que a Terra tem 4,5 bilhões de anos. Outro diz que tem 6 mil. A verdade deve estar no meio.", explicacao: "Não existe meio-termo entre evidência científica sólida e crença não embasada." },
      { exemplo: "Um médico diz para tomar 2 comprimidos; o paciente acha que 0 basta. Então 1 parece razoável.", explicacao: "A dose correta é definida por farmacologia, não por compromisso entre opiniões." }
    ]
  },
  {
    name: "Kettle Logic", name_pt: "Lógica da Chaleira",
    group: "Presunção", subgroup: "Estrutural", frequency: 2, difficulty: 4,
    note: "Usar múltiplas justificativas contraditórias ao mesmo tempo.",
    description: "Dar várias desculpas ao mesmo tempo que se contradizem — cada uma pode até fazer sentido sozinha, mas juntas revelam que a pessoa só quer escapar da acusação.",
    examples: [
      { exemplo: "— Você quebrou a chaleira que te emprestei! — Eu devolvi intacta; e já estava quebrada quando peguei; e nunca te pedi emprestado.", explicacao: "As três defesas se contradizem. Se nunca pegou emprestado, não pode ter devolvido nem encontrado quebrada." },
      { exemplo: "— Você me deve dinheiro! — Já paguei tudo; além disso nunca te devi nada; e você me deve mais do que eu devo a você.", explicacao: "As justificativas se excluem mutuamente, revelando que o objetivo é apenas escapar da cobrança." }
    ]
  },
  // ── CAUSALIDADE ─────────────────────────────────────────
  {
    name: "Post Hoc Ergo Propter Hoc", name_pt: "Depois, Logo por Causa",
    group: "Causalidade", subgroup: "Correlação", frequency: 5, difficulty: 3,
    note: "B ocorreu após A, logo A causou B.",
    description: "Achar que porque uma coisa aconteceu depois de outra, a primeira causou a segunda. Mas um galo que canta antes do sol nascer não faz o sol nascer.",
    examples: [
      { exemplo: "Tomei vitamina C e em dois dias melhorei do resfriado. A vitamina C me curou.", explicacao: "Resfriados costumam durar alguns dias e melhoram naturalmente. A coincidência temporal não prova causalidade." },
      { exemplo: "Desde que instalaram aquele semáforo, os assaltos no bairro aumentaram.", explicacao: "Os assaltos podem ter aumentado por diversas razões sem nenhuma relação com o semáforo." }
    ]
  },
  {
    name: "Cum Hoc Ergo Propter Hoc", name_pt: "Junto, Logo por Causa",
    group: "Causalidade", subgroup: "Correlação", frequency: 4, difficulty: 4,
    note: "A e B ocorrem juntos, logo um causa o outro.",
    description: "Confundir correlação com causalidade: duas coisas acontecem ao mesmo tempo, mas isso não quer dizer que uma causa a outra.",
    examples: [
      { exemplo: "Países que comem mais chocolate têm mais ganhadores do Nobel. Logo chocolate aumenta a inteligência.", explicacao: "Ambos se correlacionam com riqueza e desenvolvimento. A correlação tem uma causa comum, não direta." },
      { exemplo: "Crianças que têm mais livros em casa vão melhor na escola. Então os livros as tornam mais inteligentes.", explicacao: "O ambiente familiar favorável explica ambos. Um não causa o outro diretamente." }
    ]
  },
  {
    name: "Gambler's Fallacy", name_pt: "Falácia do Jogador",
    group: "Causalidade", subgroup: "Probabilidade", frequency: 4, difficulty: 3,
    note: "Achar que eventos passados afetam probabilidades independentes futuras.",
    description: "Achar que porque algo aconteceu muito seguido, o contrário vai acontecer em breve. Uma moeda não tem memória — cara e coroa são sempre 50/50.",
    examples: [
      { exemplo: "Caiu cara 7 vezes seguidas — agora COM CERTEZA vai cair coroa.", explicacao: "Lançamentos de moeda são independentes. O histórico passado não muda a probabilidade do próximo." },
      { exemplo: "Já faz 3 meses sem ganhar nada na loteria. Esse mês é meu mês!", explicacao: "Cada sorteio é independente. Não ganhar antes não aumenta as chances de ganhar agora." }
    ]
  },
  {
    name: "Reverse Gambler's Fallacy", name_pt: "Falácia do Jogador Inversa",
    group: "Causalidade", subgroup: "Probabilidade", frequency: 2, difficulty: 5,
    note: "Inferir causa passada improvável a partir de resultado incomum.",
    description: "Ver um resultado raro e concluir que deve ter existido uma longa sequência de eventos especiais antes para que isso acontecesse.",
    examples: [
      { exemplo: "Esse bebê nasceu com características muito raras — o universo deve ter planejado isso há muito tempo.", explicacao: "Eventos raros acontecem sem que exista uma cadeia longa de causas intencionais por trás." },
      { exemplo: "Para eu ter ganhado essa partida assim, os astros devem ter se alinhado durante anos.", explicacao: "Uma vitória surpreendente pode ter causas simples e locais, sem cadeia causal extraordinária." }
    ]
  },
  {
    name: "Single Cause Fallacy", name_pt: "Falácia da Causa Única",
    group: "Causalidade", subgroup: "Simplificação", frequency: 4, difficulty: 3,
    note: "Atribuir fenômeno complexo a uma única causa.",
    description: "Achar que eventos complexos têm apenas uma causa, quando na vida real quase tudo é resultado de muitos fatores juntos.",
    examples: [
      { exemplo: "A Segunda Guerra Mundial aconteceu por causa de Hitler.", explicacao: "A guerra teve causas múltiplas: crise econômica, tratado de Versalhes, ascensão do fascismo, falhas diplomáticas, etc." },
      { exemplo: "A empresa faliu porque contratou aquele gerente ruim.", explicacao: "Falências envolvem mercado, gestão financeira, concorrência, contexto econômico e muitos outros fatores." }
    ]
  },
  {
    name: "Regression Fallacy", name_pt: "Falácia da Regressão à Média",
    group: "Causalidade", subgroup: "Probabilidade", frequency: 2, difficulty: 5,
    note: "Atribuir melhora/piora natural a uma intervenção.",
    description: "Quando algo vai muito mal, tende a melhorar naturalmente depois. Se você intervém nesse momento extremo, fica tentado a creditar a intervenção pela melhora que viria de qualquer jeito.",
    examples: [
      { exemplo: "Tomei aquele xarope de ervas quando estava com a pior febre da minha vida, e em dois dias melhorei.", explicacao: "Doenças agudas geralmente melhoram por conta própria após o pico, com ou sem intervenção." },
      { exemplo: "Repreendi meu aluno quando ele tirou a nota mais baixa do ano e na prova seguinte ele melhorou muito!", explicacao: "Notas extremas tendem a normalizar naturalmente. A repreensão pode ter coincidido com a regressão à média." }
    ]
  },
  {
    name: "Neglect of Probability", name_pt: "Negligência de Probabilidade",
    group: "Causalidade", subgroup: "Probabilidade", frequency: 3, difficulty: 4,
    note: "Ignorar probabilidades ao avaliar riscos ou causas.",
    description: "Reagir a um risco como se ele fosse enorme quando é na verdade muito pequeno — ou ignorar um risco real por parecer distante.",
    examples: [
      { exemplo: "Não vou de avião de jeito nenhum — pode cair!", explicacao: "Voar é estatisticamente muito mais seguro por quilômetro do que dirigir. O risco existe mas é mínimo." },
      { exemplo: "Tenho medo de ser atacado por tubarão toda vez que entro no mar.", explicacao: "Ataques de tubarão são extremamente raros. A probabilidade é quase zero para a maioria dos banhistas." }
    ]
  },
  {
    name: "Causal Oversimplification", name_pt: "Supersimplificação Causal",
    group: "Causalidade", subgroup: "Simplificação", frequency: 4, difficulty: 3,
    note: "Reduzir cadeia causal complexa a relação direta simples.",
    description: "Pegar um problema com muitas causas e dizer que tem só uma solução simples, ignorando toda a complexidade.",
    examples: [
      { exemplo: "Se você quer emagrecer, é só comer menos e se exercitar mais.", explicacao: "Obesidade envolve genética, hormônios, saúde mental, acesso a alimentos, condições socioeconômicas e muito mais." },
      { exemplo: "Violência no país diminuiria se simplesmente colocássemos mais policiais nas ruas.", explicacao: "Violência tem raízes em desigualdade, educação, tráfico, sistema prisional e outros fatores." }
    ]
  },
  // ── GENERALIZAÇÃO ────────────────────────────────────────
  {
    name: "Hasty Generalization", name_pt: "Generalização Apressada",
    group: "Generalização", subgroup: "Amostra", frequency: 5, difficulty: 2,
    note: "Tirar conclusão geral a partir de amostra insuficiente.",
    description: "Ver poucos exemplos de algo e concluir que é sempre assim, como provar uma colher de sopa e declarar que o pote inteiro tem gosto ruim.",
    examples: [
      { exemplo: "Três motoristas me fecharam hoje. Todos os motoristas são péssimos.", explicacao: "Três motoristas num dia não representam o comportamento de milhões de motoristas." },
      { exemplo: "Fui mal atendido duas vezes naquele banco. O atendimento deles é sempre horrível.", explicacao: "Duas experiências não caracterizam a qualidade geral de um serviço com milhares de atendimentos diários." }
    ]
  },
  {
    name: "Faulty Analogy", name_pt: "Analogia Defeituosa",
    group: "Generalização", subgroup: "Comparação", frequency: 4, difficulty: 3,
    note: "Analogia que ignora diferenças relevantes entre os casos.",
    description: "Comparar duas coisas como se fossem parecidas, mas a comparação esconde diferenças importantes que mudam tudo.",
    examples: [
      { exemplo: "Governar um país é como administrar a economia da sua casa: não pode gastar mais do que ganha.", explicacao: "Um país emite moeda, tem dívida pública com dinâmica própria e pode estimular crescimento. São sistemas muito diferentes." },
      { exemplo: "O cérebro é como um computador — ele processa e armazena informações.", explicacao: "A analogia é útil em partes, mas cérebros não têm memória RAM separada e funcionam de maneira radicalmente diferente." }
    ]
  },
  {
    name: "Composition", name_pt: "Falácia da Composição",
    group: "Generalização", subgroup: "Estrutural", frequency: 3, difficulty: 3,
    note: "\"As partes têm propriedade X, logo o todo também tem.\"",
    description: "Achar que se cada parte de algo tem uma característica, o conjunto todo também vai ter essa mesma característica.",
    examples: [
      { exemplo: "Cada músico da orquestra é o melhor do seu instrumento. Logo essa é a melhor orquestra do mundo.", explicacao: "Grandes músicos individuais nem sempre formam um conjunto coeso. Trabalho em equipe é outra habilidade." },
      { exemplo: "Cada tijolo é muito leve. Logo o muro construído com eles também é leve.", explicacao: "A soma de muitas partes leves resulta num todo pesado." }
    ]
  },
  {
    name: "Division", name_pt: "Falácia da Divisão",
    group: "Generalização", subgroup: "Estrutural", frequency: 3, difficulty: 3,
    note: "\"O todo tem propriedade X, logo cada parte também tem.\"",
    description: "Achar que se um grupo ou coisa tem uma característica, cada pedaço ou membro individual também vai ter.",
    examples: [
      { exemplo: "O Brasil é o maior exportador de soja do mundo. Logo qualquer fazendeiro brasileiro exporta muita soja.", explicacao: "O desempenho total do país não se distribui igualmente por cada produtor individual." },
      { exemplo: "Essa empresa é muito lucrativa. Logo cada departamento deve ser lucrativo.", explicacao: "Uma empresa pode ter departamentos superavitários e outros deficitários que somados dão lucro." }
    ]
  },
  {
    name: "Ecological Fallacy", name_pt: "Falácia Ecológica",
    group: "Generalização", subgroup: "Amostra", frequency: 2, difficulty: 5,
    note: "Inferir comportamento individual a partir de estatísticas de grupo.",
    description: "Usar uma média ou estatística de um grupo para tirar conclusões sobre uma pessoa específica daquele grupo.",
    examples: [
      { exemplo: "Homens ganham mais que mulheres em média, então aquele homem específico ganha mais que aquela mulher específica.", explicacao: "A estatística de grupo não determina casos individuais. Aquela mulher específica pode ganhar muito mais." },
      { exemplo: "Esse bairro tem alta taxa de criminalidade, então aquela pessoa que mora lá deve ser perigosa.", explicacao: "Estatística do bairro não prediz comportamento de moradores individuais." }
    ]
  },
  {
    name: "Anecdotal Evidence", name_pt: "Evidência Anedótica",
    group: "Generalização", subgroup: "Amostra", frequency: 5, difficulty: 2,
    note: "Usar experiência pessoal isolada no lugar de evidência sistemática.",
    description: "Usar a história de uma pessoa como se fosse uma prova científica, ignorando que uma experiência isolada pode ser exceção.",
    examples: [
      { exemplo: "Meu avô fumou a vida toda e viveu 95 anos saudável. Fumar não pode ser tão ruim.", explicacao: "Uma história individual não refuta décadas de pesquisa com milhões de participantes." },
      { exemplo: "Conheço alguém que ficou doente depois de tomar a vacina. Logo as vacinas fazem mal.", explicacao: "Um caso anedótico não estabelece causalidade nem invalida estudos epidemiológicos em larga escala." }
    ]
  },
  {
    name: "Survivorship Bias", name_pt: "Viés de Sobrevivência",
    group: "Generalização", subgroup: "Amostra", frequency: 4, difficulty: 4,
    note: "Considerar apenas os casos de sucesso, ignorando os falhos que sumiram.",
    description: "Ver só os vencedores e esquecer de todos os que tentaram a mesma coisa e falharam — como se só os aviões que voltaram da guerra importassem.",
    examples: [
      { exemplo: "Todos esses empreendedores bem-sucedidos largaram a faculdade. Logo a faculdade não é importante para o sucesso.", explicacao: "Ignoramos os milhares que largaram a faculdade e não tiveram sucesso. Eles simplesmente não aparecem nas notícias." },
      { exemplo: "Os prédios antigos são muito mais resistentes que os modernos.", explicacao: "Os prédios antigos que chegaram até nós são os sobreviventes. Os frágeis já desmoronaram faz muito tempo." }
    ]
  },
  // ── AMBIGUIDADE ──────────────────────────────────────────
  {
    name: "Equivocation", name_pt: "Equivocação / Ambiguidade Semântica",
    group: "Ambiguidade", subgroup: "Semântica", frequency: 4, difficulty: 4,
    note: "Usar a mesma palavra com dois sentidos diferentes no argumento.",
    description: "Usar uma palavra com dois significados diferentes como se fosse o mesmo significado, para fazer o argumento parecer válido.",
    examples: [
      { exemplo: "A lei da natureza manda que os fortes sobrevivam. Leis devem ser obedecidas. Logo é certo que os fortes dominem os fracos.", explicacao: "'Lei' tem significado diferente em 'lei da natureza' (descrição) e 'lei que deve ser obedecida' (norma)." },
      { exemplo: "Crianças são inocentes. Inocente significa não ter culpa. Logo crianças nunca erram.", explicacao: "'Inocente' muda de sentido jurídico para sentido moral sem aviso." }
    ]
  },
  {
    name: "Amphiboly", name_pt: "Anfibologia / Ambiguidade Gramatical",
    group: "Ambiguidade", subgroup: "Sintaxe", frequency: 2, difficulty: 4,
    note: "Frase gramaticalmente ambígua usada para enganar.",
    description: "Usar uma frase que pode ser entendida de dois jeitos diferentes por causa da gramática, e depois escolher a interpretação conveniente.",
    examples: [
      { exemplo: "Vi o homem com o telescópio.", explicacao: "A frase não determina se o telescópio pertencia a você (você o viu usando um telescópio) ou ao homem (você viu um homem que tinha um telescópio)." },
      { exemplo: "Prometemos não matar os prisioneiros mais do que o necessário.", explicacao: "A ambiguidade gramatical deixa aberto o que conta como 'necessário', tornando a promessa sem valor real." }
    ]
  },
  {
    name: "Accent / Emphasis", name_pt: "Falácia da Ênfase",
    group: "Ambiguidade", subgroup: "Semântica", frequency: 3, difficulty: 3,
    note: "Mudar o significado pela ênfase em palavras diferentes.",
    description: "A mesma frase pode ter significados completamente diferentes dependendo de qual palavra você enfatiza. Isso pode ser usado para enganar.",
    examples: [
      { exemplo: "'Não DISSE que ele roubou' vs 'Não disse que ELE roubou' vs 'Não disse que ele ROUBOU'", explicacao: "Cada ênfase muda quem fez o quê: nega ter dito, implica que outro roubou, ou implica que fez outra coisa errada." },
      { exemplo: "Manchete: 'Especialistas não acham que a vacina é perigosa' — omitindo '...para adultos saudáveis'.", explicacao: "Remover parte do contexto muda completamente o significado da afirmação original." }
    ]
  },
  {
    name: "Reification", name_pt: "Reificação / Concretismo",
    group: "Ambiguidade", subgroup: "Conceitual", frequency: 2, difficulty: 5,
    note: "Tratar conceito abstrato como se fosse objeto concreto.",
    description: "Falar de ideias, conceitos ou abstrações como se elas fossem objetos físicos reais com existência e vontades próprias.",
    examples: [
      { exemplo: "A natureza humana não quer que sejamos assim.", explicacao: "'Natureza humana' é um conceito abstrato, não uma entidade com vontades próprias." },
      { exemplo: "A história nos ensina que sempre haverá guerras.", explicacao: "'A história' não ensina nada — são interpretações humanas de eventos que fazemos isso." }
    ]
  },
  {
    name: "Euphemism", name_pt: "Falácia do Eufemismo",
    group: "Ambiguidade", subgroup: "Semântica", frequency: 4, difficulty: 3,
    note: "Usar linguagem suavizada para distorcer a natureza de um ato.",
    description: "Usar palavras bonitas ou neutras para descrever algo ruim, fazendo parecer menos grave do que é.",
    examples: [
      { exemplo: "Não demitimos funcionários — fazemos um ajuste de quadro para otimizar resultados.", explicacao: "O eufemismo corporativo obscurece que pessoas perderam seus empregos." },
      { exemplo: "Não foi tortura — foram técnicas aprimoradas de interrogação.", explicacao: "Renomear práticas de tortura não altera o sofrimento causado nem sua natureza ética." }
    ]
  },
  // ── FORMAL ───────────────────────────────────────────────
  {
    name: "Affirming the Consequent", name_pt: "Afirmar o Consequente",
    group: "Formal", subgroup: "Condicional", frequency: 3, difficulty: 4,
    note: "\"Se A então B. B ocorreu. Logo A.\" — estruturalmente inválido.",
    description: "Uma regra diz 'se X então Y'. Você vê Y acontecer e conclui que X aconteceu. Mas Y pode ter muitas outras causas.",
    examples: [
      { exemplo: "Se chove, a rua fica molhada. A rua está molhada. Logo choveu.", explicacao: "A rua pode estar molhada porque passou um caminhão-pipa, alguém jogou água, etc. Não necessariamente choveu." },
      { exemplo: "Se ele é culpado, estará nervoso. Ele está nervoso. Logo é culpado.", explicacao: "Nervosismo pode ter muitas causas além de culpa: ansiedade, medo de não ser acreditado, etc." }
    ]
  },
  {
    name: "Denying the Antecedent", name_pt: "Negar o Antecedente",
    group: "Formal", subgroup: "Condicional", frequency: 3, difficulty: 4,
    note: "\"Se A então B. A não ocorreu. Logo não-B.\" — inválido.",
    description: "Uma regra diz 'se X então Y'. Você constata que X não aconteceu e conclui que Y também não aconteceu. Mas Y pode ter outras causas.",
    examples: [
      { exemplo: "Se estudar muito, você passa. Você não estudou muito. Logo não vai passar.", explicacao: "Pode passar por outros motivos: habilidade natural, prova fácil, sorte na escolha dos temas." },
      { exemplo: "Se tomar antibiótico, você melhora. Não tomou antibiótico. Logo não vai melhorar.", explicacao: "Pode melhorar naturalmente, com outros tratamentos, ou por ser uma infecção viral." }
    ]
  },
  {
    name: "Undistributed Middle", name_pt: "Médio Não Distribuído",
    group: "Formal", subgroup: "Silogismo", frequency: 2, difficulty: 5,
    note: "Silogismo onde o termo médio não é distribuído em nenhuma premissa.",
    description: "Um erro de lógica em que o argumento parece válido mas tem uma falha de estrutura: o elemento que conecta as premissas não foi adequadamente definido.",
    examples: [
      { exemplo: "Todos os cães são mamíferos. Todos os gatos são mamíferos. Logo todos os cães são gatos.", explicacao: "'Mamífero' não conecta cães e gatos entre si — é apenas uma categoria que ambos pertencem." },
      { exemplo: "Todos os terroristas usam barba. Ele usa barba. Logo ele é terrorista.", explicacao: "Usar barba é o elemento médio, mas não é distribuído para todos os casos — a maioria dos barbados não é terrorista." }
    ]
  },
  {
    name: "Illicit Major / Minor", name_pt: "Maior/Menor Ilícito",
    group: "Formal", subgroup: "Silogismo", frequency: 2, difficulty: 5,
    note: "Distribuição indevida do termo maior ou menor no silogismo.",
    description: "Um erro técnico de lógica formal onde um termo que não foi definido para todos os casos numa premissa é usado como se cobrisse todos os casos na conclusão.",
    examples: [
      { exemplo: "Todos os gatos são animais. Nenhum cão é gato. Logo nenhum cão é animal.", explicacao: "'Animal' aparece restrito aos gatos na premissa mas é usado de forma total na conclusão — uso ilícito do termo maior." },
      { exemplo: "Todos os filósofos pensam. Nenhum robô é filósofo. Logo nenhum robô pensa.", explicacao: "'Filósofo' não cobria todos os seres pensantes na premissa, mas a conclusão trata como se cobrisse." }
    ]
  },
  {
    name: "Existential Fallacy", name_pt: "Falácia Existencial",
    group: "Formal", subgroup: "Silogismo", frequency: 1, difficulty: 5,
    note: "Inferir existência de indivíduo a partir de proposição universal.",
    description: "Concluir que pelo menos um caso real existe só a partir de uma regra universal, sem verificar se há algum caso de verdade.",
    examples: [
      { exemplo: "Todo dragão cospe fogo. Logo existe pelo menos um dragão.", explicacao: "Regras universais sobre categorias não provam que membros da categoria existem de fato." },
      { exemplo: "Toda fada tem asas. Portanto fadas com asas existem.", explicacao: "A proposição é válida no universo imaginário, mas não implica existência no mundo real." }
    ]
  },
  // ── COGNITIVA ────────────────────────────────────────────
  {
    name: "Sunk Cost Fallacy", name_pt: "Custo Irrecuperável",
    group: "Cognitiva", subgroup: "Decisão", frequency: 5, difficulty: 3,
    note: "Continuar investindo em algo ruim por já ter investido muito.",
    description: "Continuar fazendo algo que está claramente dando errado só porque você já gastou muito tempo, dinheiro ou energia naquilo. O passado não volta — o que importa é o futuro.",
    examples: [
      { exemplo: "Já paguei R$200 pelo ingresso, não posso sair do show mesmo odiando.", explicacao: "Os R$200 já se foram de qualquer jeito. Ficar não os recupera e ainda aumenta o sofrimento." },
      { exemplo: "Já investi 3 anos nesse relacionamento difícil. Não posso simplesmente terminar.", explicacao: "O tempo já investido não deve ser critério para continuar. O critério deve ser se o futuro pode melhorar." }
    ]
  },
  {
    name: "Confirmation Bias", name_pt: "Viés de Confirmação",
    group: "Cognitiva", subgroup: "Percepção", frequency: 5, difficulty: 4,
    note: "Só aceitar evidências que confirmam o que já se acredita.",
    description: "Prestar atenção apenas nas informações que confirmam o que você já pensa, e ignorar ou desqualificar as que contradizem.",
    examples: [
      { exemplo: "Toda notícia que confirma que meu candidato é bom eu compartilho. As que dizem o contrário eu ignoro.", explicacao: "A seleção de informação cria uma visão distorcida da realidade." },
      { exemplo: "Acredito que meu colega me odeia. Quando ele é frio, confirmo isso. Quando é gentil, acho que está fingindo.", explicacao: "Qualquer comportamento é interpretado para confirmar a crença prévia, tornando-a irrefutável." }
    ]
  },
  {
    name: "Wishful Thinking", name_pt: "Pensamento Desejoso",
    group: "Cognitiva", subgroup: "Percepção", frequency: 4, difficulty: 3,
    note: "Acreditar que algo é verdade porque seria bom que fosse.",
    description: "Acreditar em algo não porque há evidências, mas porque você quer muito que seja verdade.",
    examples: [
      { exemplo: "Tenho certeza que o resultado do exame vai ser bom — não consigo imaginar ser diferente.", explicacao: "Querer um resultado positivo não o torna provável. A realidade é independente dos desejos." },
      { exemplo: "Esse investimento vai dar certo — sinto que é a minha hora de ficar rico.", explicacao: "Sentimento de que é a hora certa não é análise financeira de risco e retorno." }
    ]
  },
  {
    name: "Magical Thinking", name_pt: "Pensamento Mágico",
    group: "Cognitiva", subgroup: "Percepção", frequency: 3, difficulty: 3,
    note: "Atribuir relações causais sem mecanismo plausível.",
    description: "Acreditar que pensamentos, rituais ou objetos têm poder de influenciar eventos do mundo real sem qualquer mecanismo que explique isso.",
    examples: [
      { exemplo: "Usei minha camisa da sorte na entrevista e fui aprovado. A camisa me ajudou.", explicacao: "A aprovação foi resultado de preparo e desempenho. A camisa não tem influência causal demonstrável." },
      { exemplo: "Se eu pensar positivo com força suficiente, o universo vai me trazer o que quero.", explicacao: "Pensamentos positivos podem afetar seu comportamento e atitude, mas não reorganizam eventos externos por mecanismo mágico." }
    ]
  },
  {
    name: "Dunning-Kruger Effect", name_pt: "Efeito Dunning-Kruger",
    group: "Cognitiva", subgroup: "Percepção", frequency: 4, difficulty: 3,
    note: "Superestimar competência própria por falta de metacognição.",
    description: "Quando alguém sabe pouco sobre um assunto, acha que sabe muito. Quem realmente sabe muito costuma perceber o quanto ainda não sabe.",
    examples: [
      { exemplo: "Assisti dois documentários sobre economia e agora sei o que o governo deveria fazer.", explicacao: "Exposição superficial a um tema cria falsa sensação de domínio. Economistas estudam décadas e ainda debatem." },
      { exemplo: "Joguei futebol na escola a vida toda. Sei exatamente o que o técnico deveria fazer.", explicacao: "Jogar recreativamente é muito diferente de compreender táticas, preparo físico e gestão de equipe profissional." }
    ]
  },
  {
    name: "In-group Bias", name_pt: "Viés do Grupo Próprio",
    group: "Cognitiva", subgroup: "Social", frequency: 5, difficulty: 3,
    note: "Favorecer o próprio grupo sem justificativa baseada em mérito.",
    description: "Achar que pessoas do seu grupo (nação, time, família, partido) são melhores do que as de fora, sem razão objetiva para isso.",
    examples: [
      { exemplo: "Claro que nosso time jogou melhor — o árbitro claramente favoreceu o adversário.", explicacao: "A percepção de injustiça é inflada pelo viés de favorecer o próprio grupo." },
      { exemplo: "Nossa empresa tem os melhores funcionários do mercado.", explicacao: "Sem critérios objetivos de comparação, essa afirmação reflete lealdade, não avaliação imparcial." }
    ]
  },
  {
    name: "Bandwagon Fallacy", name_pt: "Falácia do Carro da Banda",
    group: "Cognitiva", subgroup: "Social", frequency: 5, difficulty: 2,
    note: "\"Todo mundo está fazendo, então eu também devo.\" Variante do Ad Populum.",
    description: "Fazer algo ou acreditar em algo só porque todo mundo ao redor está fazendo ou acreditando, sem avaliar se faz sentido.",
    examples: [
      { exemplo: "Todo mundo está investindo em cripto agora — não posso ficar de fora.", explicacao: "Popularidade de um investimento não significa que é seguro ou adequado para seu perfil." },
      { exemplo: "Todos os meus amigos já experimentaram, então eu também preciso experimentar.", explicacao: "O comportamento dos outros não é razão suficiente para uma decisão pessoal que pode ter consequências." }
    ]
  },
  // ── META ──────────────────────────────────────────────────
  {
    name: "Fallacy Fallacy", name_pt: "Falácia da Falácia",
    group: "Meta", subgroup: "Lógica", frequency: 3, difficulty: 4,
    note: "\"Esse argumento usa falácia, logo a conclusão é falsa.\" — a conclusão pode ser verdadeira.",
    description: "Achar que se alguém usou um argumento com falha lógica, a conclusão que ele defende está automaticamente errada. Mas uma conclusão verdadeira pode ser defendida com argumento ruim.",
    examples: [
      { exemplo: "Ele argumentou mal por que a Terra é redonda, então a Terra não pode ser redonda.", explicacao: "A Terra é redonda independentemente da qualidade do argumento de quem a defende." },
      { exemplo: "Ela usou apelo à emoção para dizer que fumar faz mal. Logo fumar não faz mal.", explicacao: "O argumento pode ter sido emocional, mas a conclusão sobre os danos do cigarro é cientificamente correta." }
    ]
  },
  {
    name: "Argument from Ignorance (strong)", name_pt: "Argumento do Silêncio (forte)",
    group: "Meta", subgroup: "Lógica", frequency: 3, difficulty: 4,
    note: "Usar ausência de evidência como evidência de ausência de forma indevida.",
    description: "Concluir que algo definitivamente não existe só porque não encontramos evidência dele ainda. Mas ausência de prova não é prova de ausência.",
    examples: [
      { exemplo: "Nunca encontramos vida em outros planetas, então com certeza não existe.", explicacao: "Exploramos uma fração ínfima do universo. Não encontrar não equivale a provar inexistência." },
      { exemplo: "Não existe nenhum estudo provando que esse efeito colateral ocorre, então ele definitivamente não ocorre.", explicacao: "A ausência de estudo pode significar que o fenômeno não foi investigado, não que não acontece." }
    ]
  },
  {
    name: "Middle Ground Fallacy", name_pt: "Falácia do Meio-Caminho",
    group: "Meta", subgroup: "Lógica", frequency: 3, difficulty: 3,
    note: "Assumir que compromisso entre dois extremos é sempre correto.",
    description: "Achar que a posição equilibrada e razoável é sempre aquela que fica no meio de duas opiniões, mesmo quando uma delas está claramente errada.",
    examples: [
      { exemplo: "Um lado diz que a Terra tem 4,5 bilhões de anos, o outro diz 6 mil. A verdade deve estar no meio.", explicacao: "Não há evidência para o meio-termo. Evidências científicas apontam fortemente para 4,5 bilhões de anos." },
      { exemplo: "Alguns dizem que escravidão é errada, outros dizem que não. A verdade provavelmente está em algum lugar no meio.", explicacao: "Nem todos os debates têm posições equivalentes que mereçam ser divididas ao meio." }
    ]
  },
];

const GROUPS = ["Todos", ...Array.from(new Set(fallacies.map(f => f.group)))];

const GROUP_COLORS = {
  "Apelos":         { bg: "#0f1f0f", accent: "#4ade80", border: "#1d3a1d" },
  "Relevância":     { bg: "#0f0f20", accent: "#818cf8", border: "#1d1d3a" },
  "Presunção":      { bg: "#1f0f0f", accent: "#f87171", border: "#3a1d1d" },
  "Causalidade":    { bg: "#0f1f1f", accent: "#22d3ee", border: "#1d3a3a" },
  "Generalização":  { bg: "#1f1f0f", accent: "#fbbf24", border: "#3a3a1d" },
  "Ambiguidade":    { bg: "#1f0f1f", accent: "#e879f9", border: "#3a1d3a" },
  "Formal":         { bg: "#0f121f", accent: "#94a3b8", border: "#1d2233" },
  "Cognitiva":      { bg: "#101f0f", accent: "#86efac", border: "#1d3a1d" },
  "Meta":           { bg: "#1e0f0f", accent: "#fb923c", border: "#3a1d1d" },
};

function Pips({ value, max = 5, color }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: "50%",
          background: i < value ? color : "#252525",
          boxShadow: i < value ? `0 0 5px ${color}66` : "none",
        }} />
      ))}
    </div>
  );
}

function Badge({ label, color, border }) {
  return (
    <span style={{
      fontSize: 10, fontFamily: "'IBM Plex Mono', monospace",
      letterSpacing: "0.08em", textTransform: "uppercase",
      padding: "2px 7px", borderRadius: 3,
      border: `1px solid ${border}`, color, background: "transparent"
    }}>{label}</span>
  );
}

export default function FallacyReference() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("Todos");
  const [sort, setSort] = useState({ key: "name", dir: 1 });
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    let list = fallacies;
    if (group !== "Todos") list = list.filter(f => f.group === group);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.name_pt.toLowerCase().includes(q) ||
        f.subgroup.toLowerCase().includes(q) ||
        f.note.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.examples.some(e => e.exemplo.toLowerCase().includes(q) || e.explicacao.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) => {
      const av = a[sort.key], bv = b[sort.key];
      if (typeof av === "string") return sort.dir * av.localeCompare(bv);
      return sort.dir * (av - bv);
    });
  }, [search, group, sort]);

  function toggleSort(key) {
    setSort(s => s.key === key ? { key, dir: -s.dir } : { key, dir: 1 });
  }

  const TH = ({ k, label }) => (
    <th onClick={() => toggleSort(k)} style={{
      padding: "10px 12px", textAlign: "left",
      fontFamily: "'IBM Plex Mono', monospace", fontSize: 10,
      letterSpacing: "0.12em", textTransform: "uppercase",
      color: sort.key === k ? "#fbbf24" : "#555",
      cursor: "pointer", userSelect: "none", whiteSpace: "nowrap",
      borderBottom: "1px solid #1e1e1e", background: "#0a0a0a",
      transition: "color 0.15s"
    }}>
      {label} {sort.key === k ? (sort.dir === 1 ? "↑" : "↓") : ""}
    </th>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Georgia', serif", color: "#e0d8cc", padding: "32px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 1100, margin: "0 auto 28px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 900, color: "#f5efe6", margin: 0, letterSpacing: "-0.02em" }}>
            Compêndio de Falácias
          </h1>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#444", letterSpacing: "0.1em" }}>
            v2.0 — {fallacies.length} entradas
          </span>
        </div>
        <p style={{ margin: 0, color: "#5a5048", fontSize: 12, fontStyle: "italic" }}>
          Frequência: quão comum no cotidiano/mídia (1–5) · Dificuldade: quão difícil de identificar (1–5) · Clique numa linha para expandir
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto 18px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por nome, grupo, descrição, exemplo..."
          style={{
            flex: 1, minWidth: 220,
            background: "#111", border: "1px solid #222",
            color: "#e0d8cc", padding: "8px 14px", borderRadius: 4,
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, outline: "none"
          }}
        />
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {GROUPS.map(g => {
            const c = GROUP_COLORS[g];
            return (
              <button key={g} onClick={() => setGroup(g)} style={{
                padding: "5px 11px",
                background: group === g ? "#161616" : "transparent",
                border: `1px solid ${group === g ? (c?.accent || "#fbbf24") : "#222"}`,
                color: group === g ? (c?.accent || "#fbbf24") : "#555",
                borderRadius: 3, cursor: "pointer",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10, letterSpacing: "0.1em",
                textTransform: "uppercase", transition: "all 0.15s"
              }}>{g}</button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", borderRadius: 6, overflow: "hidden", border: "1px solid #1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <TH k="name" label="Nome" />
              <TH k="group" label="Grupo" />
              <TH k="subgroup" label="Sub-grupo" />
              <TH k="frequency" label="Frequência" />
              <TH k="difficulty" label="Dificuldade" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((f, i) => {
              const c = GROUP_COLORS[f.group] || { bg: "#111", accent: "#888", border: "#333" };
              const isOpen = expanded === f.name;
              return (
                <>
                  <tr key={f.name}
                    onClick={() => setExpanded(isOpen ? null : f.name)}
                    style={{
                      background: isOpen ? c.bg : (i % 2 === 0 ? "#0c0c0c" : "#0e0e0e"),
                      cursor: "pointer",
                      borderLeft: isOpen ? `2px solid ${c.accent}` : "2px solid transparent",
                      transition: "background 0.15s"
                    }}
                  >
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#ddd" }}>{f.name_pt}</div>
                      <div style={{ fontSize: 11, color: "#6a6058", marginTop: 1, fontStyle: "italic" }}>{f.name}</div>
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
                      <Badge label={f.group} color={c.accent} border={c.border} />
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616", fontSize: 11, color: "#585050", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {f.subgroup}
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <Pips value={f.frequency} color="#fbbf24" />
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444" }}>{f.frequency}</span>
                      </div>
                    </td>
                    <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <Pips value={f.difficulty} color="#f87171" />
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444" }}>{f.difficulty}</span>
                      </div>
                    </td>
                  </tr>

                  {isOpen && (
                    <tr key={f.name + "_exp"} style={{ background: c.bg, borderLeft: `2px solid ${c.accent}` }}>
                      <td colSpan={5} style={{ padding: "16px 20px 20px", borderBottom: "1px solid #1e1e1e" }}>

                        <p style={{ margin: "0 0 12px", fontSize: 11, color: "#666", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.04em" }}>
                          ↳ {f.note}
                        </p>

                        {/* Description */}
                        <div style={{ margin: "0 0 18px", padding: "12px 16px", background: "#080808", borderRadius: 4, borderLeft: `3px solid ${c.accent}44` }}>
                          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: c.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                            O que é?
                          </div>
                          <p style={{ margin: 0, fontSize: 13, color: "#c0b8aa", lineHeight: 1.75 }}>
                            {f.description}
                          </p>
                        </div>

                        {/* Examples */}
                        <div>
                          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: c.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
                            Exemplos
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {f.examples.map((ex, idx) => (
                              <div key={idx} style={{ background: "#080808", border: "1px solid #1a1a1a", borderRadius: 4, overflow: "hidden" }}>
                                <div style={{ padding: "10px 14px", borderBottom: "1px solid #141414" }}>
                                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>
                                    Exemplo {idx + 1}
                                  </div>
                                  <p style={{ margin: 0, fontSize: 13, color: "#d8d0c4", lineHeight: 1.65, fontStyle: "italic" }}>
                                    "{ex.exemplo}"
                                  </p>
                                </div>
                                <div style={{ padding: "9px 14px", background: `${c.bg}bb` }}>
                                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>
                                    Por que é falácia?
                                  </div>
                                  <p style={{ margin: 0, fontSize: 12, color: "#7a7268", lineHeight: 1.65 }}>
                                    {ex.explicacao}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div style={{ padding: 40, textAlign: "center", color: "#444", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12 }}>
            Nenhuma falácia encontrada para "{search}"
          </div>
        )}
      </div>

      <div style={{ maxWidth: 1100, margin: "14px auto 0", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#2a2a2a" }}>
          {filtered.length} de {fallacies.length} entradas
        </span>
      </div>
    </div>
  );
}
