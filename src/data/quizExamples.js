/**
 * Quiz-only question bank — completely separate from the compendium examples.
 * Keyed by fallacy.name (English key from fallacies.js).
 *
 * Population status:
 *   ✓ Batch 1 — Apelos (15) + Relevância (10)  → 25 fallacies, 5 each
 *   ✓ Batch 2 — Presunção (18)
 *   ○ Batch 3 — Causalidade (10) + Generalização (7)
 *   ○ Batch 4 — Ambiguidade (5) + Formal (5) + Cognitiva (7) + Meta (3)
 *
 * Fallacies without entries here fall back to compendium examples automatically.
 */

export const quizExamples = {
  // ── APELOS ──────────────────────────────────────────────

  "Ad Misericordiam": [
    {
      exemplo:
        "Doutor, o senhor não pode me dar a multa. Estou criando meus filhos sozinho e mal tenho dinheiro para comer.",
      explicacao:
        "A situação financeira difícil não tem relação lógica com a infração cometida. São questões independentes.",
    },
    {
      exemplo:
        "Não pode me chamar atenção agora, professor. Estou passando por uma separação muito dolorosa.",
      explicacao:
        "O sofrimento pessoal não invalida a razão pedagógica da correção. As duas coisas não se cancelam.",
    },
    {
      exemplo:
        "Como você pode me negar esse empréstimo? Minha mãe está internada e eu preciso pagar as contas dela.",
      explicacao:
        "A urgência emocional não altera a análise de crédito e de risco. São critérios distintos da situação familiar.",
    },
    {
      exemplo:
        "Votem em mim. Sei que errei no passado, mas olhem o quanto sofri com essas acusações falsas.",
      explicacao:
        "O sofrimento do candidato não é critério de competência ou de mérito político.",
    },
    {
      exemplo:
        "Não me bote para fora da escola. Se eu reprovar, meu pai vai me expulsar de casa.",
      explicacao:
        "As consequências pessoais para o aluno não mudam o resultado das avaliações acadêmicas.",
    },
  ],

  "Ad Populum": [
    {
      exemplo:
        "Esse suplemento é o mais vendido da farmácia há três anos seguidos. Tem que funcionar.",
      explicacao:
        "Vendas refletem marketing e percepção, não eficácia comprovada scientificamente.",
    },
    {
      exemplo:
        "A maioria das pessoas acha que pena de morte resolve a criminalidade. Alguma coisa elas sabem.",
      explicacao:
        "Opinião majoritária não substitui dados criminológicos e estudos de efetividade penal.",
    },
    {
      exemplo:
        "Olha a fila nesse restaurante. Com tanta gente esperando, a comida deve ser excelente.",
      explicacao:
        "Filas podem refletir moda, localização privilegiada ou falta de alternativas — não apenas qualidade.",
    },
    {
      exemplo:
        "Quarenta mil pessoas curtiram esse post. Você ainda vai dizer que está errado?",
      explicacao:
        "Engajamento nas redes sociais não é critério de veracidade de uma informação.",
    },
    {
      exemplo:
        "Se tantas mães usam esse método de sono para bebê, é porque é seguro.",
      explicacao:
        "Adoção popular não equivale a respaldo científico de segurança ou eficácia.",
    },
  ],

  "Ad Verecundiam": [
    {
      exemplo:
        "Um ex-governador disse que esse investimento é ótimo. Me passou o contato da corretora.",
      explicacao:
        "Cargo político anterior não confere autoridade em análise financeira ou investimentos.",
    },
    {
      exemplo:
        "Esse físico premiado disse que acredita em vida após a morte. Ele deve ter sentido algo.",
      explicacao:
        "Prêmios em física não tornam alguém autoridade em metafísica ou experiências espirituais.",
    },
    {
      exemplo:
        "O chef da TV disse que esse azeite é o melhor. Vou comprar sem nem olhar a embalagem.",
      explicacao:
        "Chefs podem ter acordos comerciais. Recomendação televisionada não substitui análise de qualidade.",
    },
    {
      exemplo:
        "Meu avô viveu 90 anos comendo gordura animal todo dia. Então a ciência da nutrição está errada.",
      explicacao:
        "Um caso individual não refuta estudos populacionais controlados com milhares de participantes.",
    },
    {
      exemplo:
        "Esse influenciador de saúde tem 5 milhões de seguidores. O que ele fala sobre jejum deve ser certo.",
      explicacao:
        "Alcance em redes sociais não é formação em medicina ou nutrição. São critérios independentes.",
    },
  ],

  "Ad Baculum": [
    {
      exemplo:
        "Se você não votar nessa proposta, vou garantir que sua carreira aqui acabe.",
      explicacao:
        "A ameaça não torna a proposta mais ou menos válida em seus méritos. Intimidação não é argumento.",
    },
    {
      exemplo:
        "Melhor concordar com o meu relatório. Você sabe do que sou capaz quando contrariado.",
      explicacao:
        "Intimidação substitui o debate pelos méritos do relatório. O conteúdo não é avaliado.",
    },
    {
      exemplo:
        "Ou você aceita os termos do contrato, ou seu nome vai estar em todas as listas negras do setor.",
      explicacao:
        "O medo da consequência não é argumento sobre a justiça ou os méritos dos termos contratuais.",
    },
    {
      exemplo:
        "Quem reclamar da redução de salário vai ser o primeiro da lista de demissão.",
      explicacao:
        "Silenciar críticas por ameaça não responde às razões da insatisfação nem justifica a medida.",
    },
    {
      exemplo:
        "É melhor você confirmar minha versão dos fatos antes que eu fale com a diretoria.",
      explicacao:
        "A ameaça de uma denúncia não determina qual versão dos fatos é a correta.",
    },
  ],

  "Appeal to Fear": [
    {
      exemplo:
        "Se você não instalar esse antivírus agora mesmo, seus dados bancários já podem estar comprometidos.",
      explicacao:
        "O apelo ao medo imediato substitui informações técnicas reais sobre o produto.",
    },
    {
      exemplo:
        "Essa vacina nova pode alterar seu DNA. Imagine o que pode acontecer com seus filhos.",
      explicacao:
        "Cenário de horror hipotético apresentado sem nenhuma evidência científica.",
    },
    {
      exemplo:
        "Se esse candidato vencer, você não vai mais poder praticar sua religião livremente.",
      explicacao:
        "Projeção catastrófica sem base em propostas concretas, usada para influenciar o voto pelo medo.",
    },
    {
      exemplo:
        "Deixar seu filho brincar na rua hoje em dia é pedir que ele seja sequestrado.",
      explicacao:
        "Amplifica um risco real mas raro de forma a paralisar decisões cotidianas normais.",
    },
    {
      exemplo:
        "Se não aprovar essa lei de segurança agora, bandidos vão invadir sua casa sem que ninguém possa fazer nada.",
      explicacao:
        "Cenário extremo e sem nuance usado para forçar aprovação sem análise do mérito da lei.",
    },
  ],

  "Appeal to Nature": [
    {
      exemplo:
        "Prefiro tratamento com plantas medicinais. Não quero coisa química no meu corpo.",
      explicacao:
        "Plantas também contêm compostos químicos, alguns tóxicos. Natural e seguro não são sinônimos.",
    },
    {
      exemplo:
        "Essa gordura vegetal é péssima porque é processada. Banha de porco é natural e muito melhor.",
      explicacao:
        "Origem natural não determina impacto metabólico ou cardiovascular. A comparação ignora evidências nutricionais.",
    },
    {
      exemplo:
        "Parto em casa é mais natural. Hospital é intervenção desnecessária.",
      explicacao:
        "Naturalidade não equivale a segurança. Partos hospitalares reduziram drasticamente mortalidade materna e infantil.",
    },
    {
      exemplo:
        "Açúcar de coco é muito mais saudável que açúcar refinado porque é natural.",
      explicacao:
        "Ambos têm composição calórica semelhante. Naturalidade não reduz significativamente o impacto glicêmico.",
    },
    {
      exemplo:
        "Não uso protetor solar. O sol é natural — nosso corpo foi feito para recebê-lo.",
      explicacao:
        "Exposição excessiva ao UV causa câncer de pele independentemente de ser 'natural'.",
    },
  ],

  "Appeal to Tradition": [
    {
      exemplo:
        "Casamento sempre foi entre homem e mulher nessa família. Não tem por que mudar isso.",
      explicacao:
        "Tradição familiar não é argumento moral ou jurídico para limitar direitos de outras pessoas.",
    },
    {
      exemplo:
        "Essa escola usa o método de memorização faz cem anos. Não precisa de inovação pedagógica.",
      explicacao:
        "Longevidade de um método não prova eficácia ou adequação ao contexto educacional atual.",
    },
    {
      exemplo:
        "Nossos ancestrais comiam assim. Essa dieta moderna é que está nos deixando doentes.",
      explicacao:
        "Longevidade histórica de um hábito alimentar não garante que é a melhor opção disponível hoje.",
    },
    {
      exemplo:
        "O futebol sempre foi masculino no nosso clube. Não faz sentido mudar isso agora.",
      explicacao:
        "Tradição de exclusão não é justificativa para mantê-la. A antiguidade de uma prática não a valida.",
    },
    {
      exemplo:
        "Trabalhamos com papel há décadas. Sistema digital vai complicar tudo, não tem necessidade.",
      explicacao:
        "Antiguidade de um processo não o torna mais eficiente ou adequado ao presente.",
    },
  ],

  "Appeal to Novelty": [
    {
      exemplo:
        "Essa startup vai mudar tudo. O modelo de negócio deles é totalmente disruptivo.",
      explicacao:
        "Inovação e disrupção são rótulos, não provas de viabilidade ou de valor real.",
    },
    {
      exemplo:
        "Saiu uma nova versão do aplicativo. Com certeza resolveu todos os problemas da anterior.",
      explicacao:
        "Versões novas podem trazer novos bugs. Novidade não implica melhoria.",
    },
    {
      exemplo:
        "Essa técnica de meditação é nova e está sendo usada no Silicon Valley. Deve ser mais eficaz.",
      explicacao:
        "Adoção por grupo tecnológico de elite não valida eficácia terapêutica.",
    },
    {
      exemplo:
        "Por que usar esse protocolo de segurança antigo? O novo foi lançado essa semana.",
      explicacao:
        "Protocolos novos podem ter vulnerabilidades não descobertas. Maturidade e testes têm valor.",
    },
    {
      exemplo:
        "Esse filme já tem um buzz incrível antes de estrear. Com certeza vai ser melhor que os clássicos.",
      explicacao:
        "Marketing antecipado não é critério de qualidade cinematográfica.",
    },
  ],

  "Appeal to Consequences": [
    {
      exemplo:
        "Esse relatório não pode concluir que o projeto falhou. Muita gente foi contratada por causa dele.",
      explicacao:
        "O impacto no emprego não altera os dados objetivos sobre o desempenho do projeto.",
    },
    {
      exemplo:
        "Não pode ser verdade que o investimento foi uma fraude. Minha aposentadoria inteira está lá.",
      explicacao:
        "Consequências pessoais severas não mudam a realidade dos fatos investigados.",
    },
    {
      exemplo:
        "A teoria de que o universo não tem propósito não pode estar certa. Seria desolador.",
      explicacao:
        "Conforto emocional não é critério para verdade científica ou filosófica.",
    },
    {
      exemplo:
        "Não posso aceitar esse diagnóstico. Significaria que não poderia trabalhar nunca mais.",
      explicacao:
        "A incapacidade emocional de aceitar um diagnóstico não altera os dados clínicos.",
    },
    {
      exemplo:
        "Essa pesquisa não pode mostrar que fumar em ambientes fechados é prejudicial. Destruiria o setor de bares.",
      explicacao:
        "Impacto econômico de uma descoberta não invalida os dados epidemiológicos.",
    },
  ],

  "Ad Ignorantiam": [
    {
      exemplo:
        "A medicina nunca provou que homeopatia não funciona. Logo pode funcionar muito bem.",
      explicacao:
        "Ausência de refutação definitiva não é prova de eficácia. O ônus da prova recai em quem afirma.",
    },
    {
      exemplo:
        "Ninguém conseguiu provar que essa lenda urbana é falsa. Então deve ter alguma verdade.",
      explicacao: "A dificuldade de desprovar não valida a afirmação original.",
    },
    {
      exemplo:
        "Não existe nenhum estudo que comprove que meditação não faz nenhum efeito. Então faz.",
      explicacao:
        "Ausência de estudo negativo não é evidência de efeito positivo.",
    },
    {
      exemplo:
        "Como você pode ter certeza que monstros marinhos não existem? Ninguém explorou todo o oceano ainda.",
      explicacao:
        "A não-exploração completa não valida a existência de criaturas não documentadas.",
    },
    {
      exemplo: "Não encontramos provas de que ele mentiu. Então é honesto.",
      explicacao:
        "Ausência de prova de mentira não equivale a prova de honestidade.",
    },
  ],

  "Appeal to Emotion": [
    {
      exemplo:
        "Se você realmente se importasse com o meio ambiente, assinaria nossa petição agora.",
      explicacao:
        "Culpa emocional não substitui análise do conteúdo e da eficácia real da petição.",
    },
    {
      exemplo:
        "Pense nos animais sofrendo nesse laboratório. Como você pode apoiar pesquisa com animais?",
      explicacao:
        "A imagem de sofrimento animal é usada para evitar o debate ético e científico sobre pesquisa.",
    },
    {
      exemplo:
        "Você se lembra de quando seu pai era vivo? Ele teria adorado esse investimento.",
      explicacao: "Comoção por memória afetiva não é análise financeira.",
    },
    {
      exemplo:
        "Nossos soldados morreram por esse país. Quem critica nossa política militar os desrespeita.",
      explicacao:
        "Sacrifício militar e qualidade de políticas de defesa são questões separadas.",
    },
    {
      exemplo:
        "Imagine sua filha passando pelo que essas vítimas passaram. Agora me diga se ainda acha que a lei está certa.",
      explicacao:
        "Empatia induzida por imagem hipotética não responde à questão jurídica em debate.",
    },
  ],

  "Appeal to Ridicule": [
    {
      exemplo:
        "Você acredita em mudança climática? Com esse friozão de hoje? Tô rindo muito.",
      explicacao:
        "Clima local de um dia é distinto de mudança climática de longo prazo. O sarcasmo não substitui essa distinção.",
    },
    {
      exemplo:
        "Então você acha que precisamos de mais psicólogos nas escolas? É criança, não louco!",
      explicacao:
        "Ridicularizar saúde mental infantil desvia do debate sobre o papel de apoio psicológico na educação.",
    },
    {
      exemplo:
        "Filosofia na faculdade? É pra ficar fazendo pergunta sem resposta para sempre?",
      explicacao:
        "Sarcasmo sobre a disciplina não responde à questão sobre o valor do pensamento crítico.",
    },
    {
      exemplo:
        "Energia solar? Depende do sol aparecer! Vai bem no Brasil, né...",
      explicacao:
        "Ironia superficial não analisa os dados reais de geração solar ou os avanços em armazenamento.",
    },
    {
      exemplo:
        "Você acredita em comunicação não-violenta? Vai lá falar isso em favela e me conta.",
      explicacao:
        "Ridicularizar o contexto de aplicação não avalia o mérito da proposta comunicativa.",
    },
  ],

  "Appeal to Silence": [
    {
      exemplo:
        "Ninguém no grupo reclamou da mudança de horário. Significa que todos aprovaram.",
      explicacao:
        "Silêncio pode indicar que a mensagem não foi lida, desconforto em discordar, ou simples indiferença.",
    },
    {
      exemplo:
        "A empresa não comentou as denúncias em 48 horas. Prova que são culpados.",
      explicacao:
        "Assessoria jurídica frequentemente orienta silêncio estratégico. Isso não é confissão.",
    },
    {
      exemplo:
        "Apresentei minha proposta e ninguém respondeu no chat. Todo mundo achou ótima.",
      explicacao:
        "Falta de resposta pode indicar desde concordância até que as pessoas simplesmente não viram a mensagem.",
    },
    {
      exemplo: "O ministério não negou o rumor oficialmente. Logo é verdade.",
      explicacao:
        "Não negar não é confirmar. Rumores não adquirem validade por falta de resposta institucional.",
    },
    {
      exemplo:
        "Você não reagiu quando eu disse que seu projeto era fraco. Concordou comigo.",
      explicacao:
        "Silêncio em situação de confronto pode refletir choque, discordância não verbalizada ou estratégia de evitação.",
    },
  ],

  "Appeal to Wealth / Poverty": [
    {
      exemplo:
        "Esse milionário disse que a crise foi inevitável. Ele entende de economia porque acumulou riqueza.",
      explicacao:
        "Riqueza pode vir de herança, sorte ou especulação — não necessariamente de competência analítica econômica.",
    },
    {
      exemplo:
        "Por que ouvir esse economista de esquerda? Ele nem tem carro próprio.",
      explicacao:
        "Condição financeira pessoal não invalida análise técnica ou acadêmica.",
    },
    {
      exemplo:
        "Confio nesse personal trainer porque cobra caro. Barato é sinal de que não sabe o que faz.",
      explicacao: "Preço não é indicador objetivo de qualidade profissional.",
    },
    {
      exemplo:
        "Esse pequeno agricultor sabe mais sobre o campo do que qualquer PhD agrônomo rico.",
      explicacao:
        "Experiência prática é valiosa, mas não substitui formação técnica em questões complexas.",
    },
    {
      exemplo:
        "Com o dinheiro que ele tem, a opinião dele sobre impostos deve contar mais.",
      explicacao:
        "Riqueza não confere maior legitimidade em debates de política fiscal.",
    },
  ],

  "Appeal to Flattery": [
    {
      exemplo:
        "Uma mente como a sua certamente vai perceber o valor real desta oferta imobiliária.",
      explicacao:
        "O elogio cria pressão psicológica para aceitar sem análise crítica, para não parecer contradizer a inteligência elogiada.",
    },
    {
      exemplo:
        "Você é a pessoa mais justa que conheço — com certeza vai me dar razão nessa disputa.",
      explicacao:
        "O elogio de 'justo' constrange a pessoa a concordar para parecer coerente com a imagem construída.",
    },
    {
      exemplo:
        "Você tem um gosto incrível. Vai adorar esse vinho que estou vendendo.",
      explicacao:
        "Lisonja sobre gosto não é argumento sobre a qualidade objetiva do produto.",
    },
    {
      exemplo:
        "Sei que você é uma pessoa aberta e moderna. Não vai ter problema com essa cláusula polêmica do contrato.",
      explicacao:
        "Elogio de modernidade cria pressão para que discordar pareça ser 'fechado' ou antiquado.",
    },
    {
      exemplo:
        "Você é o melhor chefe que já tive — tenho certeza que vai aprovar minhas horas extras.",
      explicacao:
        "O elogio anterior ao pedido é instrumental, não sincero, e não é argumento para a aprovação.",
    },
  ],

  // ── RELEVÂNCIA ──────────────────────────────────────────

  "Ad Hominem": [
    {
      exemplo:
        "Não leve a sério o que esse economista fala. Ele foi casado três vezes e não consegue nem gerir sua vida pessoal.",
      explicacao:
        "Vida afetiva não tem relação com competência analítica em economia. São esferas separadas.",
    },
    {
      exemplo:
        "Você defende essa dieta mas está acima do peso. Por que eu ouviria você?",
      explicacao:
        "Aparência física não invalida conhecimento nutricional. O argumento deve ser avaliado por si mesmo.",
    },
    {
      exemplo:
        "Ele é desorganizado e confuso. Claro que o projeto dele não vai funcionar.",
      explicacao:
        "Características pessoais de organização não determinam a viabilidade técnica de um projeto.",
    },
    {
      exemplo:
        "Essa pesquisadora é feminista. Já dá para saber que o resultado vai ser tendencioso.",
      explicacao:
        "Convicções pessoais não invalidam metodologia científica revisada por pares.",
    },
    {
      exemplo:
        "O cara que sugeriu essa lei sequer terminou a faculdade. Nem precisa ler o texto.",
      explicacao:
        "Nível educacional do proponente não determina o mérito do conteúdo da proposta.",
    },
  ],

  "Ad Hominem Circumstantial": [
    {
      exemplo:
        "É claro que esse nutricionista defende proteína de soja — ele é vegetariano.",
      explicacao:
        "Interesse pessoal na dieta não invalida a base científica da recomendação.",
    },
    {
      exemplo:
        "Essa ONG defende a floresta porque recebe doação de países que já desmataram tudo.",
      explicacao:
        "A origem do financiamento é tema legítimo, mas não invalida automaticamente os argumentos ambientais.",
    },
    {
      exemplo:
        "Esse político é contra o aumento da gasolina porque tem fábrica de etanol.",
      explicacao:
        "Conflito de interesse deve ser considerado, mas não substitui análise dos méritos da política.",
    },
    {
      exemplo:
        "Claro que o sindicato apoia essa greve — eles têm interesse em agitar os trabalhadores.",
      explicacao:
        "Interesse no resultado não torna a pauta da greve ilegítima. Os fatos sobre condições de trabalho são independentes.",
    },
    {
      exemplo:
        "Esse juiz é contra a privatização da água porque sua família trabalha na empresa estatal.",
      explicacao:
        "Potencial conflito de interesse deve ser declarado, mas não invalida automaticamente o raciocínio jurídico.",
    },
  ],

  "Tu Quoque": [
    {
      exemplo:
        "Você me cobra que chego atrasado nas reuniões, mas você mesmo cancelou três encontros esse mês.",
      explicacao:
        "As ausências da pessoa que critica não eliminam o problema real do atraso.",
    },
    {
      exemplo: "Você fala em economizar, mas eu vi sua fatura do cartão.",
      explicacao:
        "Gastos do interlocutor não tornam inválido o conselho sobre economia.",
    },
    {
      exemplo:
        "A empresa me cobra produtividade, mas não investe em ferramentas nem em treinamento.",
      explicacao:
        "Problemas estruturais da empresa são legítimos, mas não invalidam a cobrança por resultados.",
    },
    {
      exemplo:
        "Você critica minha alimentação? Já olhou o que você come no fim de semana?",
      explicacao:
        "Inconsistência do crítico não torna errada sua observação sobre alimentação.",
    },
    {
      exemplo:
        "O governo me cobra imposto em dia mas atrasa repasses há meses.",
      explicacao:
        "Falha do governo é problema real, mas não elimina a obrigação fiscal do cidadão.",
    },
  ],

  "Poisoning the Well": [
    {
      exemplo:
        "Antes de ouvir a defesa dele, saibam que essa pessoa já foi investigada por fraude duas vezes.",
      explicacao:
        "A informação pode ser verdadeira, mas seu uso antecipado contamina a recepção do argumento antes de ser apresentado.",
    },
    {
      exemplo:
        "Esse jornalista vai falar agora sobre o governo. Lembrando que ele votou no candidato oposto.",
      explicacao:
        "Voto pessoal do jornalista é introduzido para que qualquer crítica pareça ideológica antes mesmo de ser feita.",
    },
    {
      exemplo:
        "Esse médico vai apresentar dados sobre a vacina. Só quero que saibam que ele recebe da indústria farmacêutica.",
      explicacao:
        "A informação pode ser relevante, mas apresentada assim anula a possibilidade de avaliação imparcial.",
    },
    {
      exemplo:
        "Vamos ouvir a proposta do João. Mas já adianto: ele sempre foi contra o nosso grupo.",
      explicacao:
        "Posicionamento anterior contamina a recepção antes que a proposta seja sequer conhecida.",
    },
    {
      exemplo:
        "Esse perito vai depor. Antes, cabe mencionar que ele é amigo do advogado de defesa.",
      explicacao:
        "Mesmo que seja verdade, introduzir isso antes do depoimento impede avaliação justa do conteúdo.",
    },
  ],

  "Genetic Fallacy": [
    {
      exemplo:
        "Essa técnica pedagógica foi criada na União Soviética. Não dá para aplicar em nossas escolas.",
      explicacao:
        "Origem ideológica do método não determina sua eficácia pedagógica, que deve ser avaliada por resultados.",
    },
    {
      exemplo:
        "Esse argumento é idêntico ao que grupos de extrema direita usam. Logo está errado.",
      explicacao:
        "Grupos extremistas podem usar argumentos corretos. A origem não define a validade lógica.",
    },
    {
      exemplo:
        "A teoria foi desenvolvida por um pesquisador que depois foi exposto como desonesto. Não pode ser válida.",
      explicacao:
        "Condutas posteriores do pesquisador não apagam retroativamente a validade dos dados publicados e revisados.",
    },
    {
      exemplo:
        "Esse conceito veio da psicanálise freudiana. Freud estava errado em muita coisa, então isso também está.",
      explicacao:
        "Ser proveniente de uma escola com falhas não invalida conceitos específicos dessa mesma escola.",
    },
    {
      exemplo:
        "A proposta partiu de uma empresa concorrente nossa. Claramente não é do nosso interesse adotar.",
      explicacao:
        "Origem empresarial rival não é argumento técnico contra a qualidade da proposta.",
    },
  ],

  "Guilt by Association": [
    {
      exemplo:
        "Essa proposta de reforma trabalhista foi apoiada por aquele empresário que foi preso. Descarte imediato.",
      explicacao:
        "A proposta deve ser avaliada pelo seu conteúdo, não pela ficha de quem a apoia.",
    },
    {
      exemplo:
        "Esse argumento é o mesmo que partidos autoritários usam. Logo quem o defende é autoritário.",
      explicacao:
        "Um argumento pode ser correto mesmo que também seja usado por pessoas com motivações ruins.",
    },
    {
      exemplo:
        "Você foi visto conversando com fulano. Imagem é tudo — cuidado com suas associações.",
      explicacao:
        "Proximidade física ou social não equivale a endosso de ideias ou comportamentos.",
    },
    {
      exemplo:
        "Essa filosofia também foi citada positivamente por grupos racistas. Não posso endossá-la.",
      explicacao:
        "Citações por grupos extremistas não contaminam automaticamente o conteúdo filosófico.",
    },
    {
      exemplo:
        "Esse cientista assinou a mesma petição que um negacionista climático. Isso diz muito sobre ele.",
      explicacao:
        "Uma petição pode ser assinada por motivos distintos. Compartilhar um documento não implica compartilhar ideologia.",
    },
  ],

  "Red Herring": [
    {
      exemplo:
        "Você critica minha gestão do departamento, mas veja o caos no departamento vizinho!",
      explicacao:
        "A situação do outro departamento é irrelevante para avaliar a gestão atual em foco.",
    },
    {
      exemplo:
        "Reclamam da qualidade da água aqui, mas em outros países a água nem chega nas torneiras.",
      explicacao:
        "Comparação com situação pior em outro lugar não responde à questão sobre a qualidade local.",
    },
    {
      exemplo:
        "Estamos discutindo aumento de impostos, mas o verdadeiro problema é o desperdício do governo.",
      explicacao:
        "Desperdício é tema legítimo, mas introduzi-lo aqui desvia da questão tributária em análise.",
    },
    {
      exemplo:
        "Você questiona minha honestidade, mas já pensou nos crimes hediondos cometidos por aí?",
      explicacao:
        "Crimes graves de outros são irrelevantes para a questão de honestidade específica levantada.",
    },
    {
      exemplo:
        "A pauta da reunião era segurança do trabalho, mas o gerente trouxe dados de produtividade do trimestre.",
      explicacao:
        "Dados de produtividade podem ser importantes, mas sua introdução aqui desvia do tema original.",
    },
  ],

  Whataboutism: [
    {
      exemplo:
        "Você me acusa de plagiar, mas esse outro aluno da turma fez a mesma coisa e não foi punido.",
      explicacao:
        "Inconsistência na punição de outros é um problema separado — não elimina o plágio em questão.",
    },
    {
      exemplo:
        "O Brasil polui? E a China, que despeja resíduo industrial sem controle nenhum?",
      explicacao:
        "Poluição da China não justifica nem compensa a poluição brasileira. Ambos são problemas independentes.",
    },
    {
      exemplo:
        "Criticam nossa empresa por trabalho infantil, mas vejam as práticas de subcontratados da concorrência.",
      explicacao:
        "Práticas da concorrência são assunto separado. O problema da empresa em questão permanece.",
    },
    {
      exemplo:
        "Você reclama que cheguei bêbado, mas a semana passada você fumou quando estava proibido.",
      explicacao:
        "Infração passada do interlocutor não anula o problema presente levantado.",
    },
    {
      exemplo:
        "O governo atual corrompe? Todos os governos corrompem! Isso não é novidade.",
      explicacao:
        "Generalizar a corrupção como universal não resolve nem justifica a corrupção específica em análise.",
    },
  ],

  "Relative Privation": [
    {
      exemplo:
        "Você se queixa de trabalhar 10 horas por dia? Tem gente que trabalha 14 sem folga.",
      explicacao:
        "A existência de condições piores não torna as 10 horas diárias aceitáveis ou legais.",
    },
    {
      exemplo: "Reclamar de ansiedade? Tem gente vivendo em zona de guerra.",
      explicacao:
        "Saúde mental é legítima independentemente de escalas de sofrimento alheio.",
    },
    {
      exemplo:
        "Você acha ruim sua escola sem quadra? Em certas cidades não tem escola nenhuma.",
      explicacao:
        "Carência de outros não justifica manter infraestrutura inadequada.",
    },
    {
      exemplo:
        "Você está triste com o fim do namoro? Pensa em quem perdeu a família num acidente.",
      explicacao:
        "Luto e tristeza menores não precisam ser apagados por comparação com tragédias maiores.",
    },
    {
      exemplo:
        "Reclamam do preço da conta de luz? Em países pobres não tem nem eletricidade.",
      explicacao:
        "Acesso precário em outros países não justifica preços altos ou serviço ruim no contexto local.",
    },
  ],

  "Thought-Terminating Cliché": [
    {
      exemplo:
        "Não adianta questionar. Líder tem que liderar e seguidor tem que seguir.",
      explicacao:
        "A frase impede análise sobre quando seguidores devem questionar ordens inadequadas.",
    },
    {
      exemplo: "Isso é coisa de Deus. A gente não tem que entender.",
      explicacao:
        "Encerra a possibilidade de buscar causas, responsabilidades ou soluções para o problema.",
    },
    {
      exemplo:
        "São tempos difíceis para todo mundo. Não tem muito o que fazer.",
      explicacao:
        "A frase normaliza a situação e bloqueia análise sobre possíveis intervenções ou mudanças.",
    },
    {
      exemplo: "Essa é a lei do mercado. Sempre foi assim e sempre será.",
      explicacao:
        "'Lei do mercado' é usado para interromper debate sobre intervenções regulatórias possíveis.",
    },
    {
      exemplo: "No final tudo se resolve. Sempre resolveu.",
      explicacao:
        "Otimismo fatalista encerra a análise de riscos reais e a necessidade de ação preventiva.",
    },
  ],

  // ── PRESUNÇÃO ────────────────────────────────────────────

  "Straw Man": [
    {
      exemplo:
        "Você quer regular as redes sociais? Então quer o governo controlando o que as pessoas pensam!",
      explicacao:
        "Regular algoritmos ou publicidade enganosa é diferente de controlar pensamentos. A posição foi exagerada.",
    },
    {
      exemplo:
        "Você é a favor de imposto sobre fortunas? Ou seja, quer punir quem trabalhou duro.",
      explicacao:
        "Imposto sobre grandes patrimônios não equivale a punição ao trabalho. A proposta foi distorcida.",
    },
    {
      exemplo:
        "Você questiona o uso de agrotóxicos? Então prefere que a população passe fome.",
      explicacao:
        "Questionar agrotóxicos não implica defender fome. Existem abordagens alternativas de produção.",
    },
    {
      exemplo:
        "Você defende licença parental para pais? Acha que homens devem ficar em casa enquanto a empresa sofre?",
      explicacao:
        "Licença parental é discutida com critérios e limites. A caricatura ignora toda a proposta real.",
    },
    {
      exemplo:
        "Você apoia redução da jornada de trabalho? Logo quer que as empresas fechem ao meio-dia.",
      explicacao:
        "Reduzir jornada não é o mesmo que paralisar empresas. A conclusão é uma distorção da proposta.",
    },
  ],

  "False Dilemma": [
    {
      exemplo:
        "Ou você apoia 100% o plano da diretoria, ou está sabotando o projeto.",
      explicacao:
        "Há um espaço enorme entre apoio total e sabotagem — como sugerir ajustes ou apontar riscos.",
    },
    {
      exemplo:
        "Ou reduzimos os gastos sociais agora, ou o país vai à falência em seis meses.",
      explicacao:
        "Existem múltiplas alternativas fiscais. A situação foi apresentada como se houvesse apenas dois caminhos.",
    },
    {
      exemplo:
        "Você é pai de família ou fica o dia todo nas redes sociais — escolha.",
      explicacao:
        "Ser pai responsável e usar redes sociais com moderação não são mutuamente exclusivos.",
    },
    {
      exemplo:
        "Nessa empresa: ou você está 100% comprometido, ou não está. Quem não faz hora extra não está comprometido.",
      explicacao:
        "Comprometimento tem muitas formas. Não fazer hora extra não implica ausência de dedicação.",
    },
    {
      exemplo:
        "Ou aceitamos essa tecnologia completamente, ou voltamos à Idade Média.",
      explicacao:
        "Entre adoção irrestrita e rejeição total existem inúmeras abordagens reguladas e graduais.",
    },
  ],

  "Begging the Question": [
    {
      exemplo:
        "Esse remédio funciona porque é eficaz. E é eficaz porque ele funciona.",
      explicacao:
        "'Funciona' e 'eficaz' são sinônimos aqui. A afirmação repete a conclusão sem evidência externa.",
    },
    {
      exemplo:
        "Deus existe porque a Criação existe, e a Criação só pode existir porque Deus a criou.",
      explicacao:
        "A existência de Deus é assumida como premissa para provar sua própria existência.",
    },
    {
      exemplo:
        "Você pode confiar nessa fonte porque ela sempre diz a verdade, e sabemos disso porque ela é confiável.",
      explicacao:
        "A confiabilidade da fonte é pressuposta como premissa para justificar a confiança nela.",
    },
    {
      exemplo:
        "Esse candidato é o melhor porque ninguém melhor se candidatou.",
      explicacao:
        "'O melhor' é assumido como premissa, quando seria exatamente isso que se quer provar.",
    },
    {
      exemplo:
        "Essa lei é boa porque legisladores bons a aprovaram, e sabemos que são bons porque aprovam leis boas.",
      explicacao:
        "As afirmações se sustentam circularmente sem qualquer critério externo de avaliação.",
    },
  ],

  "Circular Reasoning": [
    {
      exemplo:
        "Acredito nessa teoria porque ela explica os fatos, e os fatos confirmam a teoria.",
      explicacao:
        "Os fatos que confirmam são justamente os interpretados pela teoria. Sem verificação independente.",
    },
    {
      exemplo:
        "Esse modelo econômico funciona porque os países que o adotam prosperam, e prosperam porque adotaram esse modelo.",
      explicacao:
        "A causalidade é assumida em ambas as direções sem evidência de qual variável explica a outra.",
    },
    {
      exemplo:
        "Ele é um líder nato porque inspira as pessoas, e inspira porque é um líder nato.",
      explicacao:
        "As duas afirmações se definem mutuamente sem apontar nenhuma evidência concreta.",
    },
    {
      exemplo:
        "Essa instituição é íntegra porque seleciona pessoas íntegras, que por sua vez fazem a instituição íntegra.",
      explicacao:
        "O raciocínio gira sem revelar como integridade é verificada em qualquer dos dois lados.",
    },
    {
      exemplo:
        "Minha opinião está certa porque faz sentido, e faz sentido porque está certa.",
      explicacao:
        "'Fazer sentido' e 'estar certa' não são independentes. O argumento não sai do lugar.",
    },
  ],

  "Slippery Slope": [
    {
      exemplo:
        "Se permitirmos eutanásia para doentes terminais, em breve estaremos matando qualquer pessoa inconveniente.",
      explicacao:
        "Legislação pode estabelecer critérios rigorosos. A cadeia catastrófica não é inevitável.",
    },
    {
      exemplo:
        "Se o governo controlar o preço do pão hoje, amanhã vai controlar tudo e viraremos uma ditadura.",
      explicacao:
        "Controle de preço em setor específico não implica automaticamente colapso democrático.",
    },
    {
      exemplo:
        "Se você ceder uma vez nessa negociação, a outra parte sempre vai te explorar daqui para frente.",
      explicacao:
        "Uma concessão pontual não define toda a dinâmica futura. Depende de contexto e relação.",
    },
    {
      exemplo:
        "Deixar filho mais novo dormir um pouco mais tarde vai fazer ele perder toda a disciplina de sono.",
      explicacao:
        "Uma exceção não destrói automaticamente um padrão. Cada passo da cadeia não é inevitável.",
    },
    {
      exemplo:
        "Se aceitarmos imigrantes, em pouco tempo não teremos mais identidade cultural nenhuma.",
      explicacao:
        "Culturas se influenciam mutuamente sem se apagar. A conclusão extrema não segue dos passos intermediários.",
    },
  ],

  "False Equivalence": [
    {
      exemplo:
        "Fumar um cigarro por semana e fumar um maço por dia é tudo a mesma coisa: tabagismo.",
      explicacao:
        "A frequência e quantidade têm impacto drasticamente diferente na saúde. Equipará-las é enganoso.",
    },
    {
      exemplo:
        "Roubar uma caneta e desviar um milhão de reais são igualmente errados: ambos são furto.",
      explicacao:
        "A categoria jurídica comum não elimina as diferenças de escala, dano e consequência social.",
    },
    {
      exemplo:
        "Tanto faz ler o artigo científico original quanto o post de resumo nas redes. É a mesma informação.",
      explicacao:
        "Resumos perdem nuances metodológicas, limitações e contexto que os artigos contêm.",
    },
    {
      exemplo:
        "Veganismo e carnismo são só dois estilos de vida diferentes. Nenhum é mais sustentável que o outro.",
      explicacao:
        "Dados de emissão de carbono e uso de água mostram diferenças substanciais entre as dietas.",
    },
    {
      exemplo:
        "Opinar nas redes e publicar estudo revisado por pares são formas equivalentes de contribuir com o debate.",
      explicacao:
        "Revisão por pares envolve metodologia, verificação e responsabilidade que post pessoal não tem.",
    },
  ],

  "No True Scotsman": [
    {
      exemplo:
        "— Nenhum torcedor de verdade vaia o próprio time. — Mas vi centenas vaiar no estádio. — Esses não são torcedores de verdade.",
      explicacao:
        "A definição de 'torcedor de verdade' é ajustada para excluir qualquer contra-exemplo inconveniente.",
    },
    {
      exemplo:
        "— Nenhum empreendedor de verdade desiste. — Mas meu sócio desistiu e era empreendedor. — Ele não era de verdade então.",
      explicacao:
        "O rótulo é redefinido pós-fato para preservar a afirmação original sem possibilidade de refutação.",
    },
    {
      exemplo:
        "— Professores de verdade nunca perdem a paciência. — E o professor da sala 3? — Esse não é professor de verdade.",
      explicacao:
        "A categoria é reformulada para excluir qualquer exemplo que contradiga o ideal estipulado.",
    },
    {
      exemplo:
        "— Veganos de verdade não usam absolutamente nada de origem animal. — Usei um remédio com gelatina por obrigação médica. — Então não é vegano.",
      explicacao:
        "A definição é usada como filtro que rejeita qualquer membro que apresente complexidade real.",
    },
    {
      exemplo:
        "— Patriotas de verdade nunca criticam o próprio país. — Mas crítica construtiva é amor ao país. — Quem critica não é patriota.",
      explicacao:
        "A definição de 'patriota' é estreitada para silenciar qualquer crítica legítima.",
    },
  ],

  "Loaded Question": [
    {
      exemplo:
        "Quando você vai admitir que seu projeto foi um fracasso?",
      explicacao:
        "A pergunta pressupõe que o projeto fracassou, sem que isso tenha sido estabelecido.",
    },
    {
      exemplo:
        "Por que você sempre chega atrasado para todas as reuniões?",
      explicacao:
        "'Sempre' e 'todas' são generalizações embutidas na pergunta sem respaldo nos fatos.",
    },
    {
      exemplo:
        "Você já parou de mentir para sua equipe?",
      explicacao:
        "Qualquer resposta (sim ou não) implica que a pessoa mentia. A premissa não foi estabelecida.",
    },
    {
      exemplo:
        "Quando foi que você percebeu que estava errado nessa decisão?",
      explicacao:
        "A pergunta pressupõe que a decisão estava errada, o que não foi demonstrado.",
    },
    {
      exemplo:
        "Por que você tem tanto preconceito contra ideias novas?",
      explicacao:
        "A existência de preconceito é pressuposta na própria pergunta, sem evidência que a sustente.",
    },
  ],

  Accident: [
    {
      exemplo:
        "É proibido entrar com animais no condomínio. Logo o cão-guia do morador deficiente não pode entrar.",
      explicacao:
        "Cão-guia é exceção razoável à regra. Aplicá-la sem discernimento ignora o contexto.",
    },
    {
      exemplo:
        "Mentir é errado. Logo não poderia ter mentido para o assassino sobre onde estava minha família.",
      explicacao:
        "A regra geral contra mentiras tem exceções moralmente justificadas em situações extremas.",
    },
    {
      exemplo:
        "Os médicos devem respeitar a autonomia do paciente. Logo não podem intervir quando ele está inconsciente.",
      explicacao:
        "Autonomia pressupõe capacidade de decidir. Inconsciência é exceção à regra geral.",
    },
    {
      exemplo:
        "É proibido ultrapassar o sinal vermelho. Logo o bombeiro na emergência deveria ter parado.",
      explicacao:
        "Emergências com sirene ativa são exceção explícita ao código de trânsito.",
    },
    {
      exemplo:
        "Contratos devem ser cumpridos. Logo você deve entregar o produto mesmo sabendo que será usado para prejudicar alguém.",
      explicacao:
        "Contratos têm limites éticos e legais. Cumprimento irrestrito ignora exceções importantes.",
    },
  ],

  "Converse Accident": [
    {
      exemplo:
        "Damos analgésicos fortes a pacientes com dor crônica intratável. Logo qualquer um deveria conseguir comprar sem receita.",
      explicacao:
        "O contexto clínico controlado não serve de base para uma regra geral de acesso irrestrito.",
    },
    {
      exemplo:
        "Vi uma criança de 10 anos que entendeu física quântica. Logo crianças dessa idade deveriam aprender física quântica na escola.",
      explicacao:
        "Um caso excepcional não define o que é adequado para a população geral nessa faixa etária.",
    },
    {
      exemplo:
        "Esse piloto de Fórmula 1 dirige a 300 km/h. Logo os limites de velocidade nas estradas são desnecessários.",
      explicacao:
        "Condições de pista controlada e treinamento extremo não se generalizam para o tráfego comum.",
    },
    {
      exemplo:
        "Minha avó comeu gordura animal a vida toda e teve saúde excelente. Logo as restrições cardiológicas são exageradas.",
      explicacao:
        "Um caso excepcional não invalida dados estatísticos de risco em populações.",
    },
    {
      exemplo:
        "Esse atleta treina 8 horas por dia e tem saúde ótima. Logo todo mundo deveria treinar 8 horas diárias.",
      explicacao:
        "Metabolismo e condicionamento de atleta profissional não representam a situação da população geral.",
    },
  ],

  "Cherry Picking": [
    {
      exemplo:
        "Esse bairro registrou zero roubos em março e abril. A segurança melhorou muito.",
      explicacao:
        "Dois meses sem incluir sazonalidade e outros períodos não representam uma tendência real.",
    },
    {
      exemplo:
        "Três especialistas apoiam nosso protocolo. Deve ser o correto.",
      explicacao:
        "Se quinze especialistas da área discordam, apresentar só os três favoráveis é seleção tendenciosa.",
    },
    {
      exemplo:
        "A empresa cresceu 40% nesse trimestre. Ótimo momento para investir!",
      explicacao:
        "Um trimestre positivo isolado pode esconder tendência de queda nos demais períodos.",
    },
    {
      exemplo:
        "Citei cinco trechos do livro que provam meu ponto. O autor claramente concorda comigo.",
      explicacao:
        "Selecionar trechos sem contexto pode inverter o argumento real do autor.",
    },
    {
      exemplo:
        "As pesquisas que mostram que nosso candidato está bem empatado, isso que conta.",
      explicacao:
        "Ignorar pesquisas desfavoráveis enquanto se divulga apenas as favoráveis distorce o cenário eleitoral real.",
    },
  ],

  "Moving the Goalposts": [
    {
      exemplo:
        "— Mostre peerreview para eu mudar de opinião. — Aqui estão três artigos. — Mas não são em revista top-tier.",
      explicacao:
        "O critério muda assim que o anterior é cumprido, tornando impossível qualquer prova ser aceita.",
    },
    {
      exemplo:
        "— Se você entregar o relatório hoje, eu te deixo de folga sexta. — Entreguei! — Mas precisava estar formatado no padrão novo.",
      explicacao:
        "A condição extra foi acrescentada após o cumprimento da original, frustrando o acordo.",
    },
    {
      exemplo:
        "— Aprenda a programar e você consegue emprego. — Aprendi. — Mas agora precisa de experiência de 2 anos.",
      explicacao:
        "Cada barreira superada revela uma nova, sem que as condições iniciais sejam honradas.",
    },
    {
      exemplo:
        "— Prove que você pode liderar uma equipe pequena. — Liderei! — Bom, mas a equipe grande é diferente.",
      explicacao:
        "O critério original foi substituído por outro antes de ser reconhecido como cumprido.",
    },
    {
      exemplo:
        "— Emagreça 10 kg e eu considero a operação. — Emagreci. — Agora precisa estabilizar por seis meses.",
      explicacao:
        "Meta cumprida não é reconhecida; novos requisitos são introduzidos indefinidamente.",
    },
  ],

  "Special Pleading": [
    {
      exemplo:
        "Todos os funcionários precisam cumprir o horário, mas o sócio fundador tem outra história.",
      explicacao:
        "Sem critério explícito que justifique a exceção, a regra é aplicada de forma arbitrária.",
    },
    {
      exemplo:
        "A lei vale para todo mundo, mas minha empresa é pequena e não pode pagar o compliance todo.",
      explicacao:
        "Porte da empresa pode ser critério legal legítimo, mas precisa ser parte da lei, não uma exceção informal.",
    },
    {
      exemplo:
        "Todos devem declarar imposto de renda, mas meu caso é especial — sou artista independente.",
      explicacao:
        "Artistas independentes também são obrigados a declarar. A reivindicação de exceção não tem base legal.",
    },
    {
      exemplo:
        "As regras de privacidade valem para todos, mas a imprensa precisaria de acesso irrestrito para fazer seu trabalho.",
      explicacao:
        "Acesso jornalístico tem limites claros. Exceção ampla sem critério é pleito especial.",
    },
    {
      exemplo:
        "Todo mundo paga mensalidade, mas eu conheço o dono — acertamos de outro jeito.",
      explicacao:
        "Relação pessoal com o dono não é critério objetivo; cria privilégio sem justificativa sistêmica.",
    },
  ],

  "Nirvana Fallacy": [
    {
      exemplo:
        "A lei contra assédio não vai funcionar. As denúncias ainda vão acontecer mesmo assim.",
      explicacao:
        "Nenhuma lei elimina cem por cento de um problema. Reduzir drasticamente já seria benefício real.",
    },
    {
      exemplo:
        "Transporte público não resolve o trânsito porque ainda haverá carros na rua.",
      explicacao:
        "Reduzir significativamente carros em circulação já é melhoria concreta, mesmo que imperfeita.",
    },
    {
      exemplo:
        "Esse filtro de água não serve de nada — não remove 100% dos contaminantes.",
      explicacao:
        "Remover 99% dos contaminantes é benefício real. Exigir perfeição absoluta é padrão inatingível.",
    },
    {
      exemplo:
        "Esses programas de reabilitação para presidiários não funcionam porque ainda há reincidência.",
      explicacao:
        "Reduzir a taxa de reincidência já é resultado valido. Eliminar toda a reincidência não é critério razoável.",
    },
    {
      exemplo:
        "Não vou usar protetor solar FPS 30 — não bloqueia 100% da radiação.",
      explicacao:
        "FPS 30 bloqueia cerca de 97% da radiação UVB. Rejeitar por não ser perfeito ignora o benefício substancial.",
    },
  ],

  "Motte and Bailey": [
    {
      exemplo:
        "— Capitalismo é exploração pura do trabalhador! — Isso é uma visão muito radical. — Só estou dizendo que há desigualdades no mercado.",
      explicacao:
        "A posição extrema foi abandonada quando desafiada, mas é a que o argumento original defende.",
    },
    {
      exemplo:
        "— Toda autoridade é ilegítima por natureza! — Isso é anarquismo. — Não, só defendo que a autoridade deve ser questionada.",
      explicacao:
        "Questionamento de autoridade é benigno. A afirmação inicial era muito mais radical.",
    },
    {
      exemplo:
        "— Masculinidade tóxica destrói todos os homens! — Está generalizando demais. — Apenas digo que alguns padrões culturais são nocivos.",
      explicacao:
        "A segunda afirmação é defensável; a primeira era a posição real sendo avançada.",
    },
    {
      exemplo:
        "— A ciência não sabe nada de verdade! — Isso é muito extremo. — Só estou dizendo que a ciência tem limitações.",
      explicacao:
        "Limitações da ciência são fato aceito; afirmar que não sabe nada é posição radicalmente diferente.",
    },
    {
      exemplo:
        "— Essa empresa rouba os clientes! — Acusação grave. — Calma, só disse que as práticas não são transparentes.",
      explicacao:
        "Falta de transparência não é roubo. Recua da acusação forte para uma vaga quando pressionado.",
    },
  ],

  "Texas Sharpshooter": [
    {
      exemplo:
        "Nosso produto foi mencionado positivamente em três análises independentes neste semestre!",
      explicacao:
        "Se houve vinte análises e dezessete foram negativas, selecionar três cria padrão falso.",
    },
    {
      exemplo:
        "Olha, os quatro maiores atentados terroristas aconteceram em anos ímpares. Padrão suspeito.",
      explicacao:
        "Com dados suficientes qualquer subconjunto pode parecer não aleatório. O critério foi escolhido depois.",
    },
    {
      exemplo:
        "Esse investidor acertou o mercado em 2015, 2018 e 2022. Ele tem um método secreto.",
      explicacao:
        "Se ele fez previsões todo ano, três acertos em vinte anos podem ser coincidência. Os erros são ignorados.",
    },
    {
      exemplo:
        "Essa região tem concentração incomum de gênios! Cinco nasceram aqui no século XX.",
      explicacao:
        "Sem comparar com a taxa esperada e com regiões equivalentes, o padrão pode ser acidental.",
    },
    {
      exemplo:
        "Os acidentes acontecem sempre nessa curva da estrada — deve ter algo místico ali.",
      explicacao:
        "A curva pode ter condições físicas que aumentam o risco. Definir o 'padrão' sem controle é arbitrário.",
    },
  ],

  "Golden Mean Fallacy": [
    {
      exemplo:
        "Um nutricionista diz que o paciente precisa de 2000 calorias; o paciente acha que 800 bastam. Então 1400 parece razoável.",
      explicacao:
        "A necessidade calórica é determinada por metabolismo, não por compromisso entre opiniões.",
    },
    {
      exemplo:
        "Alguns dizem que o réu é inocente, outros que é culpado. Provavelmente é parcialmente culpado.",
      explicacao:
        "Culpabilidade jurídica não é um espectro contínuo que se determina pela média das opiniões.",
    },
    {
      exemplo:
        "Especialistas dizem que o edifício precisa ser demolido. Os moradores querem ficar. Demolir metade resolve.",
      explicacao:
        "Segurança estrutural não admite compromisso político. A metade restante ainda pode desabar.",
    },
    {
      exemplo:
        "Você acha que devemos investir tudo em energia solar; eu acho que devemos manter o carvão. A resposta é 50/50.",
      explicacao:
        "A proporção ideal depende de dados técnicos e econômicos, não de uma divisão equânime de opiniões.",
    },
    {
      exemplo:
        "Uns dizem que a droga é completamente segura, outros que é mortal. A verdade é que faz mais ou menos mal.",
      explicacao:
        "O impacto de uma substância é determinado por farmacologia, não pelo ponto médio entre posições opostas.",
    },
  ],

  "Kettle Logic": [
    {
      exemplo:
        "— Você não me devolveu o livro! — Eu devolvi sim; e nunca te pedi emprestado; e aliás ele é meu.",
      explicacao:
        "As três defesas se contradizem: se nunca pediu emprestado, não pôde ter devolvido.",
    },
    {
      exemplo:
        "— Você gastou o orçamento do projeto! — Não gastei nada além do previsto; e os gastos foram necessários; e a culpa é da equipe financeira.",
      explicacao:
        "Cada justificativa aponta em direção diferente, revelando que o objetivo é escapar da responsabilidade.",
    },
    {
      exemplo:
        "— Você copiou o relatório do colega! — Não copiei; e qualquer semelhança é coincidência; e todo mundo faz isso.",
      explicacao:
        "Negar, justificar como acidente e normalizar são estratégias contraditórias usadas simultaneamente.",
    },
    {
      exemplo:
        "— Você prometeu me ligar! — Eu liguei e você não atendeu; e nunca disse que ligaria; e avisei que poderia não ter tempo.",
      explicacao:
        "As justificativas se excluem mutuamente. Se ligou, não pode ter nunca prometido e nem avisado falta de tempo.",
    },
    {
      exemplo:
        "— Você revelou o segredo da empresa! — Não era segredo; e eu não revelei, apenas comentei; e todos já sabiam.",
      explicacao:
        "Se todos já sabiam, não era segredo — mas também não precisava ser 'apenas comentado'.",
    },
  ],

  // ── CAUSALIDADE ───────────────────────────────────────────

  "Post Hoc Ergo Propter Hoc": [
    {
      exemplo:
        "Comecei a tomar chá verde e perdi 4 kg em um mês. O chá verde emagrece.",
      explicacao:
        "A perda de peso pode ter outras causas simultâneas. Sequência temporal não estabelece causalidade.",
    },
    {
      exemplo:
        "Instalamos câmeras de segurança e os roubos no comércio caíram. As câmeras resolveram o problema.",
      explicacao:
        "A queda pode coincidir com mais policiamento, mudança de estação ou outros fatores não considerados.",
    },
    {
      exemplo:
        "Desde que o novo prefeito assumiu, o trânsito melhorou muito. Ele que resolveu.",
      explicacao:
        "Obras iniciadas na gestão anterior ou mudanças no comportamento dos motoristas podem explicar a melhora.",
    },
    {
      exemplo:
        "Meu time perdeu logo depois que eu coloquei a camisa ao contrário. A camisa me amaldiçoou.",
      explicacao:
        "Resultado esportivo tem causas técnicas e táticas. A roupa do torcedor não interfere no placar.",
    },
    {
      exemplo:
        "Minha empresa cresceu no mesmo período em que mudamos o logotipo. O rebranding funcionou.",
      explicacao:
        "Crescimento pode decorrer de melhora de produto, expansão de mercado ou conjuntura econômica favorável.",
    },
  ],

  "Cum Hoc Ergo Propter Hoc": [
    {
      exemplo:
        "Notei que quando vendo mais sorvete, os afogamentos aumentam. Sorvete causa afogamentos.",
      explicacao:
        "Ambos aumentam no verão pelo calor. A correlação tem uma causa comum, não uma relação direta.",
    },
    {
      exemplo:
        "Países com mais televisores per capita têm expectativa de vida maior. Televisão aumenta a longevidade.",
      explicacao:
        "Ambos os índices correlacionam com riqueza e desenvolvimento, não um com o outro diretamente.",
    },
    {
      exemplo:
        "Funcionários que usam fones de ouvido no trabalho são mais produtivos. Logo devemos obrigar o uso de fones.",
      explicacao:
        "Pessoas já produtivas podem preferir fones para se concentrar. O perfil, não o fone, explica a produtividade.",
    },
    {
      exemplo:
        "Cidades com mais igrejas têm mais crimes. Religião aumenta a criminalidade.",
      explicacao:
        "Ambos aumentam com o tamanho da população. Populações maiores têm mais de tudo, igrejas e crimes.",
    },
    {
      exemplo:
        "Alunos que dormem mais horas tiram notas melhores. Dormir muito melhora as notas.",
      explicacao:
        "Estudantes menos estressados e com rotina saudável tendem a dormir bem e a estudar melhor. O sono é consequência, não só causa.",
    },
  ],

  "Gambler's Fallacy": [
    {
      exemplo:
        "A roleta caiu no vermelho cinco vezes seguidas — agora vai cair no preto com certeza.",
      explicacao:
        "Cada giro da roleta é independente. O equipamento não tem memória dos resultados anteriores.",
    },
    {
      exemplo:
        "Já errei quatro questões de múltipla escolha seguidas. A próxima tem que ser certa.",
      explicacao:
        "Se as questões são independentes, erros anteriores não aumentam a probabilidade de acerto na seguinte.",
    },
    {
      exemplo:
        "Esse time não vence fora de casa há dez jogos. Hoje vai vencer com certeza.",
      explicacao:
        "Cada partida tem suas próprias condicionantes. Sequência passada não altera probabilidade futura de forma mágica.",
    },
    {
      exemplo:
        "Faz semanas que não consigo vaga no estacionamento aqui. Hoje tem que ter.",
      explicacao:
        "A disponibilidade de vagas depende de quem está lá naquele momento, não de compensação pelos dias anteriores.",
    },
    {
      exemplo:
        "Já fiz dez apostas perdedoras seguidas nessa máquina caça-níquel. Ela está 'devendo' para mim.",
      explicacao:
        "Máquinas caça-níquel têm probabilidade fixa por rodada. Não há mecanismo de compensação por perdas acumuladas.",
    },
  ],

  "Reverse Gambler's Fallacy": [
    {
      exemplo:
        "Esse jogador de basquete acertou oito arremessos seguidos — ele deve estar 'em chamas' com uma habilidade sobrenatural hoje.",
      explicacao:
        "Sequências longas ocorrem por acaso em qualquer processo probabilístico sem exigir explicação especial.",
    },
    {
      exemplo:
        "Esse número saiu três sorteios seguidos na loteria. Deve haver uma força mística empurrando-o.",
      explicacao:
        "Em sorteios aleatórios, qualquer sequência tem a mesma probabilidade de ocorrer. Não há força por trás.",
    },
    {
      exemplo:
        "Para eu ter nascido exatamente quem sou, o universo deve ter se preparado por bilhões de anos.",
      explicacao:
        "A singularidade de cada pessoa resulta de processos naturais, não de preparação intencional retroativa.",
    },
    {
      exemplo:
        "Essa moeda caiu cara dez vezes seguidas. Alguém deve estar manipulando o lançamento.",
      explicacao:
        "Com probabilidade de 50%, sequências de dez do mesmo lado ocorrem por acaso sem necessitar de intervenção.",
    },
    {
      exemplo:
        "Encontrei meu cônjuge de forma tão improvável — o destino deve ter trabalhado por anos para nos unir.",
      explicacao:
        "Encontros acontecem por circunstâncias comuns. A raridade subjetiva não implica planejamento anterior.",
    },
  ],

  "Single Cause Fallacy": [
    {
      exemplo:
        "A violência juvenil aumentou porque os pais deixaram de dar limites.",
      explicacao:
        "Violência juvenil envolve desigualdade social, falta de oportunidades, tráfico, saúde mental e muitos outros fatores.",
    },
    {
      exemplo: "O Brasil não se desenvolve por causa da corrupção.",
      explicacao:
        "Desenvolvimento é multifatorial: qualidade educacional, infraestrutura, política industrial, inserção global, entre outros.",
    },
    {
      exemplo:
        "A crise financeira de 2008 foi causada pela ganância dos banqueiros.",
      explicacao:
        "A crise envolveu regulação insuficiente, produtos financeiros complexos, agências de rating e políticas monetárias.",
    },
    {
      exemplo: "A depressão acontece por falta de força de vontade.",
      explicacao:
        "Depressão é transtorno multifatorial: neurobiológico, genético, ambiental e psicossocial.",
    },
    {
      exemplo: "As favelas existem porque as pessoas não querem trabalhar.",
      explicacao:
        "Favelas resultam de migração histórica, segregação urbana, falta de habitação acessível e exclusão econômica estrutural.",
    },
  ],

  "Regression Fallacy": [
    {
      exemplo:
        "Meu atleta estava em péssima fase. Mudei o treinamento e ele melhorou muito. O novo método funciona.",
      explicacao:
        "Desempenhos muito abaixo do normal tendem a se recuperar naturalmente. A mudança pode ter coincidido com a regressão à média.",
    },
    {
      exemplo:
        "Apliquei uma pomada caseira quando minha enxaqueca estava insuportável e em duas horas passou.",
      explicacao:
        "Enxaquecas intensas costumam ceder sozinhas. A pomada foi aplicada no pico, quando a melhora seria natural de qualquer forma.",
    },
    {
      exemplo:
        "O estoque caiu ao menor valor em anos. Comprei e ele subiu 30%. Tenho olho para investimento.",
      explicacao:
        "Preços em mínimos históricos tendem a se recuperar por regressão à média, não por habilidade do comprador.",
    },
    {
      exemplo:
        "Briguei com meu filho quando ele estava com as piores notas do ano e depois melhorou. A bronca resolveu.",
      explicacao:
        "Notas muito baixas frequentemente melhoram na sequência sem intervenção por regressão estatística natural.",
    },
    {
      exemplo:
        "A empresa estava no pior momento quando contrataram o novo CEO. Logo depois os resultados melhoraram.",
      explicacao:
        "Empresas em mínimos históricos tendem a se recuperar parcialmente por dinâmicas de mercado, independentemente da liderança.",
    },
  ],

  "Neglect of Probability": [
    {
      exemplo:
        "Não vou usar o metrô hoje — já vi casos de pessoa sendo empurrada para os trilhos.",
      explicacao:
        "Esse tipo de incidente é extremamente raro. A probabilidade real não justifica evitar o transporte.",
    },
    {
      exemplo:
        "Não vou comer nesse restaurante — conheço alguém que teve intoxicação alimentar uma vez.",
      explicacao:
        "Um caso isolado não representa o risco geral. A probabilidade de intoxicação é baixa na maioria dos estabelecimentos.",
    },
    {
      exemplo:
        "Não vou fazer cirurgia — vi um caso que terminou em morte na anestesia.",
      explicacao:
        "Complicações fatais em anestesia são raríssimas. Recusar cirurgia necessária por esse motivo ignora os riscos da não-intervenção.",
    },
    {
      exemplo:
        "Preciso me vacinar contra raiva todo mês — tem morcego no meu bairro.",
      explicacao:
        "Transmissão de raiva por morcego é muito rara. Vacinação profilática tem indicação específica, não geral por presença do animal.",
    },
    {
      exemplo:
        "Fiquei com medo de voar para Lisboa depois de ver notícia de queda de avião há dez anos.",
      explicacao:
        "Aviação comercial é o meio de transporte mais seguro por passageiro-quilômetro. O risco é estatisticamente desprezível.",
    },
  ],

  "Causal Oversimplification": [
    {
      exemplo:
        "É só proibir as drogas com leis mais duras e o uso vai acabar.",
      explicacao:
        "Uso de drogas envolve dependência química, fatores sociais, saúde mental e vulnerabilidade econômica. Proibição isolada não resolve.",
    },
    {
      exemplo:
        "Para acabar com o desemprego é só as empresas contratarem mais pessoas.",
      explicacao:
        "Emprego depende de demanda econômica, qualificação da força de trabalho, crédito, regulação e muitos outros fatores.",
    },
    {
      exemplo:
        "O trânsito melhoraria se as pessoas simplesmente respeitassem as regras.",
      explicacao:
        "Trânsito depende também de infraestrutura viária, planejamento urbano, transporte público e densidade populacional.",
    },
    {
      exemplo:
        "A saúde pública melhoraria se todos simplesmente comessem bem e se exercitassem.",
      explicacao:
        "Saúde pública depende de saneamento, acesso a serviços médicos, condições socioeconômicas e fatores genéticos.",
    },
    {
      exemplo:
        "Para a educação melhorar é só pagar melhor os professores.",
      explicacao:
        "Qualidade educacional envolve infraestrutura escolar, currículo, formação docente, contexto familiar e engajamento dos alunos.",
    },
  ],

  // ── GENERALIZAÇÃO ─────────────────────────────────────────

  "Hasty Generalization": [
    {
      exemplo:
        "Os dois médicos que consultei foram frios e apressados. Os médicos não sabem tratar pacientes.",
      explicacao:
        "Dois médicos não representam a totalidade de profissionais. A generalização ignora a ampla variação individual.",
    },
    {
      exemplo:
        "Comprei dois produtos daquela marca e ambos quebraram. Essa marca fabrica lixo.",
      explicacao:
        "Dois casos não definem a qualidade média de milhares de produtos. Pode ser azar ou lote específico.",
    },
    {
      exemplo:
        "Todos os adolescentes são irresponsáveis — olha como meus sobrinhos se comportam.",
      explicacao:
        "Comportamento de poucos adolescentes conhecidos não representa os milhões de jovens com perfis completamente diferentes.",
    },
    {
      exemplo:
        "Fui a Paris e todo mundo foi mal-educado comigo. Os franceses são antipáticos.",
      explicacao:
        "Alguns franceses em algumas situações não caracterizam a personalidade de 67 milhões de pessoas.",
    },
    {
      exemplo:
        "Três políticos foram pegos em escândalo esta semana. Todos os políticos são corruptos.",
      explicacao:
        "Casos visíveis de corrupção não provam que todos os representantes eleitos são corruptos.",
    },
  ],

  "Faulty Analogy": [
    {
      exemplo:
        "Assim como um cirurgião às vezes precisa cortar para curar, o Estado às vezes precisa aumentar impostos para prosperar.",
      explicacao:
        "A analogia ignora que cortar tecido e arrecadar impostos têm consequências e mecanismos completamente diferentes.",
    },
    {
      exemplo:
        "Uma empresa é como um time de futebol: precisa de um líder forte no comando.",
      explicacao:
        "Gestão empresarial envolve complexidade burocrática, conformidade legal e múltiplos stakeholders que o futebol não tem.",
    },
    {
      exemplo:
        "Assim como plantas precisam de luz para crescer, crianças precisam de liberdade total sem regras.",
      explicacao:
        "Crianças são seres sociais que se desenvolvem com estrutura e limites. A analogia botânica não se aplica ao desenvolvimento humano.",
    },
    {
      exemplo:
        "O sistema imunológico é como um exército — destrói os invasores. Logo devemos tratar doenças como guerras.",
      explicacao:
        "Metáfora bélica pode levar a abordagens médicas inadequadas que ignoram a complexidade do equilíbrio imunológico.",
    },
    {
      exemplo:
        "Navegar na internet é como sair na rua: se você não quer ser assaltado, não mostre o que tem.",
      explicacao:
        "Crimes digitais têm natureza, escala e responsabilidades legais muito diferentes dos crimes físicos.",
    },
  ],

  Composition: [
    {
      exemplo:
        "Cada componente desse software foi desenvolvido pela melhor equipe disponível. Logo o sistema será perfeito.",
      explicacao:
        "Integração entre componentes exige compatibilidade e arquitetura global que partes excelentes isoladamente não garantem.",
    },
    {
      exemplo:
        "Cada ingrediente desse prato é delicioso sozinho. Logo o prato vai ser incrível.",
      explicacao:
        "Combinação de sabores e texturas pode criar resultados desagradáveis mesmo com ingredientes individualmente bons.",
    },
    {
      exemplo:
        "Cada departamento atingiu sua meta individual. Logo a empresa atingiu todas as suas metas.",
      explicacao:
        "Metas interdependentes entre departamentos podem não se traduzir em meta organizacional cumprida.",
    },
    {
      exemplo:
        "Cada nó da rede é seguro. Portanto a rede inteira é segura.",
      explicacao:
        "Segurança de rede depende também dos protocolos de comunicação entre nós, não só de cada nó isolado.",
    },
    {
      exemplo:
        "Cada jogador do time é fisicamente superior. Logo o time vai dominar a partida.",
      explicacao:
        "Desempenho coletivo depende de entrosamento, esquema tático e comunicação que superioridade física individual não garante.",
    },
  ],

  Division: [
    {
      exemplo:
        "O exército brasileiro é poderoso. Logo qualquer soldado brasileiro é individualmente poderoso.",
      explicacao:
        "Poder militar é coletivo e depende de logística, coordenação e armamento. Não se distribui igualmente por cada membro.",
    },
    {
      exemplo:
        "Essa faculdade tem departamentos de pesquisa de excelência. Logo qualquer professor de lá é excepcional.",
      explicacao:
        "Qualidade institucional agrega áreas de destaque e áreas comuns. Não caracteriza cada professor individualmente.",
    },
    {
      exemplo:
        "Esse hospital tem 95% de satisfação dos pacientes. Logo o médico que me atendeu deve ser excelente.",
      explicacao:
        "A média institucional pode esconder grande variação individual entre profissionais.",
    },
    {
      exemplo:
        "A seleção brasileira de vôlei é a melhor do mundo. Logo qualquer jogadora da seleção é a melhor do mundo na sua posição.",
      explicacao:
        "A melhor equipe pode ter jogadoras excelentes em posições específicas sem que cada uma seja a melhor individualmente.",
    },
    {
      exemplo:
        "Esse partido defende a liberdade econômica. Logo qualquer filiado defende exatamente as mesmas posições.",
      explicacao:
        "Partidos abrigam espectros de opiniões. Posição oficial não define uniformemente a visão de cada membro.",
    },
  ],

  "Ecological Fallacy": [
    {
      exemplo:
        "Regiões com maior consumo de azeite têm menor incidência de doenças cardíacas. Logo aquele italiano come muito azeite e tem coração saudável.",
      explicacao:
        "Dados regionais não determinam hábitos individuais. Aquele italiano específico pode consumir pouco azeite.",
    },
    {
      exemplo:
        "Países nórdicos têm os maiores índices de felicidade. Logo aquele norueguês deve ser uma pessoa feliz.",
      explicacao:
        "Média nacional não prediz a felicidade de nenhum indivíduo em particular.",
    },
    {
      exemplo:
        "Turmas com melhor desempenho médio têm mais horas de estudo. Logo aquele aluno de turma ruim não estuda.",
      explicacao:
        "Um aluno pode estudar muito mais que a média da sua turma. A estatística da turma não descreve o indivíduo.",
    },
    {
      exemplo:
        "Bairros ricos têm menos evasão escolar. Logo aquela criança de bairro rico vai terminar os estudos.",
      explicacao:
        "Estatística de bairro não garante trajetória individual. Fatores familiares podem contradizer a média local.",
    },
    {
      exemplo:
        "Países com mais acesso à internet têm economias mais dinâmicas. Logo qualquer usuário de internet é economicamente produtivo.",
      explicacao:
        "Acesso a internet é condição necessária mas não suficiente para produtividade individual.",
    },
  ],

  "Anecdotal Evidence": [
    {
      exemplo:
        "Meu vizinho não usou cinto de segurança e sobreviveu ao acidente. O cinto não serve para nada.",
      explicacao:
        "Um caso favorável ignora os milhares em que o cinto salvou vidas. Evidência anedótica não refuta estudos populacionais.",
    },
    {
      exemplo:
        "Tomo esse suplemento há dois anos e nunca fiquei doente. Ele é o segredo da saúde.",
      explicacao:
        "Ausência de doenças pode ter múltiplas causas. Uma experiência pessoal não prova eficácia do suplemento.",
    },
    {
      exemplo:
        "Conheço um empresário que nunca terminou o ensino médio e é milionário. Educação formal é inútil.",
      explicacao:
        "Um caso excepcional não invalida a correlação consistente entre escolaridade e oportunidades econômicas.",
    },
    {
      exemplo:
        "Um familiar meu tomou remédio para pressão e teve reação horrível. Esse remédio não presta.",
      explicacao:
        "Reações adversas individuais existem em qualquer medicamento. Eficácia e segurança são avaliadas em populações, não em casos isolados.",
    },
    {
      exemplo:
        "Fui ao mercado ontem às 18h e não havia fila. A escalada de preços não está afetando o consumo.",
      explicacao:
        "Uma visita em horário e local específicos não representa padrão de consumo nacional ou regional.",
    },
  ],

  "Survivorship Bias": [
    {
      exemplo:
        "Os grandes escritores do passado não tinham formação universitária. Logo faculdade de letras é desnecessária para escrever bem.",
      explicacao:
        "Lembramos dos gênios sobreviventes. Ignoramos os muitos sem formação que nunca publicaram nada relevante.",
    },
    {
      exemplo:
        "Essas startups que se tornaram unicórnio começaram em garagens. Logo montar uma empresa em casa é o caminho para o sucesso.",
      explicacao:
        "Milhares de startups começaram em garagens e faliram. As histórias de sucesso sobrepõem as de fracasso invisíveis.",
    },
    {
      exemplo:
        "Os soldados que voltaram da guerra tinham mais buracos nos motores do que nas cabines. Logo reforce os motores.",
      explicacao:
        "Exemplo clássico invertido: os aviões com buracos nas cabines não voltaram. O real perigo era justamente onde não havia marcas.",
    },
    {
      exemplo:
        "Esses prédios antigos foram construídos sem engenharia moderna e duram séculos. Antigamente construíam melhor.",
      explicacao:
        "Vemos os prédios que sobreviveram. Os que desabaram não estão lá para contar a história.",
    },
    {
      exemplo:
        "Os investidores que ficaram ricos ignoraram os analistas e seguiram o instinto. Análise de mercado é perda de tempo.",
      explicacao:
        "Ignoramos os muitos que seguiram o instinto e perderam tudo. Os fracassos não viram cases de sucesso.",
    },
  ],

  // ── AMBIGUIDADE ───────────────────────────────────────────

  Equivocation: [
    {
      exemplo:
        "Ter fé é bom. Ciência exige fé nos dados. Logo ciência é religião.",
      explicacao:
        "'Fé' significa confiança baseada em evidência na ciência e crença sem evidência na religião. Usar a mesma palavra com dois sentidos invalida o argumento.",
    },
    {
      exemplo:
        "Crianças são inocentes. Logo crianças nunca praticam atos errados.",
      explicacao:
        "'Inocente' muda de sentido moral-jurídico para sentido de comportamento perfeito. A mudança silenciosa cria conclusão falsa.",
    },
    {
      exemplo:
        "A evolução diz que os mais aptos sobrevivem. Empresas bem-sucedidas sobrevivem. Logo empresas bem-sucedidas são as mais aptas biologicamente.",
      explicacao:
        "'Aptos' em biologia refere-se a reprodução, não a sucesso comercial. O termo é transposto sem justificativa.",
    },
    {
      exemplo:
        "Toda lei deve ser obedecida. A lei da gravidade é uma lei. Logo devemos obedecer à lei da gravidade.",
      explicacao:
        "'Lei' como norma jurídica e 'lei' como regularidade natural são conceitos completamente distintos.",
    },
    {
      exemplo:
        "O banco da praça é de madeira. Banco de madeira é instável. Logo não devo confiar nesse banco.",
      explicacao:
        "'Banco' alterna entre mobiliário e instituição financeira. A ambiguidade semântica esconde a falácia.",
    },
  ],

  Amphiboly: [
    {
      exemplo:
        "Anúncio: 'Vendemos cachorros quentes para crianças.' ",
      explicacao:
        "A frase admite que as crianças são as vendidas, não os cachorros-quentes. Ambiguidade sintática cria interpretação absurda mas gramaticalmente válida.",
    },
    {
      exemplo:
        "O relatório diz: 'Aprovamos o projeto dos engenheiros com reservas.' ",
      explicacao:
        "Não fica claro se as reservas são dos engenheiros ou da aprovação. A ambiguidade pode gerar decisões equivocadas.",
    },
    {
      exemplo:
        "Placa: 'Proibido entrada de animais sem coleira.' ",
      explicacao:
        "A frase pode significar que apenas animais sem coleira são proibidos, ou que a entrada de animais sem coleira está proibida — são regras diferentes.",
    },
    {
      exemplo:
        "O gerente enviou uma proposta para o cliente com desconto de 20%.",
      explicacao:
        "Não está claro se o desconto é do gerente ao cliente ou se o cliente já tinha um desconto. A ambiguidade pode gerar conflito comercial.",
    },
    {
      exemplo:
        "Instruções do remédio: 'Tomar uma vez ao dia antes de dormir ou acordar.' ",
      explicacao:
        "A conjunção 'ou' torna ambíguo se é antes de dormir à noite ou antes de acordar de manhã — momentos opostos do dia.",
    },
  ],

  "Accent / Emphasis": [
    {
      exemplo:
        "Manchete: 'Polícia não encontrou provas de corrupção no ministério.' — omitindo: '...nas últimas 48h.'",
      explicacao:
        "Remover o limite temporal muda a afirmação de temporária para absoluta, distorcendo completamente o significado.",
    },
    {
      exemplo:
        "'Não DISSE que ela roubou' implica que alguém disse. 'Não disse que ELA roubou' implica que outra pessoa roubou.",
      explicacao:
        "A mesma frase com ênfase em palavras diferentes produz acusações completamente distintas.",
    },
    {
      exemplo:
        "Estudo diz: 'O remédio pode reduzir dor em alguns pacientes.' — divulgado como: 'Remédio reduz dor!'",
      explicacao:
        "Omitir 'pode' e 'alguns pacientes' transforma resultado incerto e parcial em afirmação categórica.",
    },
    {
      exemplo:
        "Citação: 'Esse plano tem pontos interessantes, mas precisa de revisão profunda.' — divulgado como: 'Especialista diz que plano tem pontos interessantes!'",
      explicacao:
        "Enfatizar só a parte positiva e omitir a ressalva muda completamente o teor da avaliação.",
    },
    {
      exemplo:
        "Avaliação: 'O candidato às vezes demonstra liderança.' — resumida como: 'Candidato demonstra liderança.'",
      explicacao:
        "Suprimir 'às vezes' transforma uma qualidade inconsistente em atributo permanente.",
    },
  ],

  Reification: [
    {
      exemplo:
        "A economia quer que cortemos gastos sociais agora.",
      explicacao:
        "'A economia' é um conjunto de relações e dados. Não tem vontades próprias. Quem quer cortar gastos são pessoas com determinadas posições políticas.",
    },
    {
      exemplo:
        "A natureza humana nos impede de viver em paz permanente.",
      explicacao:
        "'Natureza humana' é um conceito abstrato, não uma força que bloqueia comportamentos. Seres humanos constroem pazes duradouras o tempo todo.",
    },
    {
      exemplo:
        "O mercado decidiu que esse produto não tem valor.",
      explicacao:
        "Mercados são interações de milhões de decisões individuais influenciadas por estrutura, acesso e poder. O 'mercado' não decide como um agente consciente.",
    },
    {
      exemplo:
        "A história nos ensina que impérios sempre colapsam.",
      explicacao:
        "'A história' não ensina nada autonomamente. São historiadores com interpretações diferentes que estudam padrões — e o debate sobre eles é rico e variado.",
    },
    {
      exemplo:
        "A ciência ainda não entende o amor.",
      explicacao:
        "Ciência é um método e um conjunto de práticas humanas, não uma entidade que 'entende' ou 'não entende' como uma pessoa.",
    },
  ],

  Euphemism: [
    {
      exemplo:
        "Não houve invasão — foi uma operação especial de pacificação territorial.",
      explicacao:
        "Renomear uma invasão militar com linguagem burocrática não altera a natureza do ato nem as consequências para as populações afetadas.",
    },
    {
      exemplo:
        "Não cortamos equipe — fizemos uma reestruturação de capital humano.",
      explicacao:
        "Eufemismo corporativo obscurece que dezenas de pessoas perderam seus empregos e meios de vida.",
    },
    {
      exemplo:
        "Não foi tortura — foi interrogatório aprimorado com pressão psicológica controlada.",
      explicacao:
        "Mudar o rótulo não muda o sofrimento causado nem a violação de direitos humanos envolvida.",
    },
    {
      exemplo:
        "Não bombardeamos civis — houve danos colaterais em área de conflito.",
      explicacao:
        "'Danos colaterais' suaviza linguisticamente mortes de não-combatentes, reduzindo percepção moral do ocorrido.",
    },
    {
      exemplo:
        "Nossa empresa não usou trabalho infantil — empregamos jovens aprendizes em regime informal.",
      explicacao:
        "A redefinição eufemística não muda que crianças trabalharam fora das condições legais e protetivas estabelecidas.",
    },
  ],

  // ── FORMAL ────────────────────────────────────────────────

  "Affirming the Consequent": [
    {
      exemplo:
        "Se o suspeito é culpado, suas digitais estarão na cena do crime. As digitais dele estão lá. Logo ele é culpado.",
      explicacao:
        "Digitais podem estar lá por visitas anteriores ou contaminação. A presença delas não prova culpa — apenas é consistente com ela.",
    },
    {
      exemplo:
        "Se o paciente tem gripe, vai ter febre. Ele tem febre. Logo tem gripe.",
      explicacao:
        "Febre é sintoma de muitas condições: infecção bacteriana, Covid, dengue etc. A gripe não é a única causa.",
    },
    {
      exemplo:
        "Se o projeto foi mal gerenciado, vai atrasar. O projeto atrasou. Logo foi mal gerenciado.",
      explicacao:
        "Projetos atrasam por imprevistos, fornecedores, mudanças de escopo. Atraso não implica necessariamente má gestão.",
    },
    {
      exemplo:
        "Se ela for inocente, vai querer cooperar com a investigação. Ela está cooperando. Logo é inocente.",
      explicacao:
        "Pessoas culpadas também cooperam estrategicamente. A cooperação não garante inocência.",
    },
    {
      exemplo:
        "Se a empresa está crescendo, vai contratar mais. Estão contratando. Logo a empresa está crescendo.",
      explicacao:
        "Contratações podem ocorrer por rotatividade, reestruturação ou expansão pontual sem crescimento geral.",
    },
  ],

  "Denying the Antecedent": [
    {
      exemplo:
        "Se chover, o jogo será cancelado. Não choveu. Logo o jogo não será cancelado.",
      explicacao:
        "O jogo pode ser cancelado por outros motivos: problema no gramado, ausência de jogadores, questões de segurança.",
    },
    {
      exemplo:
        "Se você praticar exercício regularmente, terá boa saúde. Você não pratica exercício. Logo não terá boa saúde.",
      explicacao:
        "Boa saúde pode resultar de boa alimentação, genética favorável, sono adequado, mesmo sem exercício.",
    },
    {
      exemplo:
        "Se o réu mentiu, o detector de mentiras vai apontar. Ele não mentiu. Logo o detector não vai apontar.",
      explicacao:
        "Detectores de mentira são imprecisos e podem gerar falsos positivos por ansiedade, independente de mentira.",
    },
    {
      exemplo:
        "Se você investiu na sua formação, vai conseguir emprego bom. Você não investiu. Logo não vai conseguir.",
      explicacao:
        "Pessoas sem formação formal conseguem empregos bons por experiência, habilidades práticas ou empreendedorismo.",
    },
    {
      exemplo:
        "Se tomar o remédio no horário, vai melhorar mais rápido. Não tomou no horário. Logo não vai melhorar rápido.",
      explicacao:
        "O organismo pode responder bem mesmo com atraso na dose, dependendo da condição e do medicamento.",
    },
  ],

  "Undistributed Middle": [
    {
      exemplo:
        "Todos os líderes são decididos. Ela é decidida. Logo ela é líder.",
      explicacao:
        "'Decidido' é o termo médio, mas não está distribuído a todos — muitas pessoas decididas não são líderes.",
    },
    {
      exemplo:
        "Todos os fraudes prometem retorno rápido. Esse investimento promete retorno rápido. Logo é fraude.",
      explicacao:
        "Retorno rápido não é exclusivo de fraudes. Alguns investimentos legítimos também têm esse perfil.",
    },
    {
      exemplo:
        "Todos os gênios são excêntricos. Ele é excêntrico. Logo é um gênio.",
      explicacao:
        "Excentricidade não é exclusiva de gênios. A maioria dos excêntricos não tem habilidade excepcional.",
    },
    {
      exemplo:
        "Ativistas famosos usam redes sociais. Ela usa redes sociais. Logo é ativista famosa.",
      explicacao:
        "Usar redes sociais é característica de bilhões de pessoas, não exclusiva de ativistas famosos.",
    },
    {
      exemplo:
        "Empresas em crise demitem em massa. Essa empresa demitiu em massa. Logo está em crise.",
      explicacao:
        "Demissões em massa podem acontecer por reestruturação estratégica, automação ou fusão, não só por crise.",
    },
  ],

  "Illicit Major / Minor": [
    {
      exemplo:
        "Todos os políticos mentem. Nenhum jornalista é político. Logo nenhum jornalista mente.",
      explicacao:
        "O termo 'mentirosos' foi usado apenas para políticos, mas a conclusão o estende a todos os casos — uso ilícito do termo maior.",
    },
    {
      exemplo:
        "Todos os vírus causam doenças. Nenhum fungo é vírus. Logo nenhum fungo causa doenças.",
      explicacao:
        "'Causar doenças' foi atribuído só a vírus na premissa; a conclusão generaliza indevidamente para todos os organismos.",
    },
    {
      exemplo:
        "Todos os crimes violentos são puníveis. Nenhuma crítica é crime violento. Logo nenhuma crítica é punível.",
      explicacao:
        "'Punível' foi restrito a crimes violentos, mas existem crimes não-violentos puníveis. A conclusão extrapola indevidamente.",
    },
    {
      exemplo:
        "Todo ouro é valioso. Nenhuma pedra é ouro. Logo nenhuma pedra é valiosa.",
      explicacao:
        "Valor não foi distribuído a todo ouro de forma exclusiva. Pedras como diamantes e esmeraldas também são valiosas.",
    },
    {
      exemplo:
        "Todos os heróis são corajosos. Nenhum covarde é herói. Logo nenhum covarde é corajoso.",
      explicacao:
        "Coragem foi atribuída apenas a heróis na premissa, mas alguém pode ter atos corajosos sem ser classificado como herói.",
    },
  ],

  "Existential Fallacy": [
    {
      exemplo:
        "Todo unicórnio tem chifre de ouro. Portanto existe pelo menos um unicórnio com chifre de ouro.",
      explicacao:
        "Uma proposição universal sobre uma categoria não prova que membros dessa categoria existem de fato.",
    },
    {
      exemplo:
        "Toda bruxa que faz o ritual corretamente conjura espíritos. Logo existe alguma bruxa que conjura espíritos.",
      explicacao:
        "A regra condicional existe dentro de um sistema de crenças que não foi verificado empiricamente.",
    },
    {
      exemplo:
        "Todo ser perfeito existe necessariamente, pois existência é uma perfeição. Logo Deus existe.",
      explicacao:
        "Definir existência como propriedade lógica não prova existência real. É o argumento ontológico clássico com essa falha.",
    },
    {
      exemplo:
        "Todo soldado perfeito nunca hesita em combate. Logo há pelo menos um soldado que nunca hesita.",
      explicacao:
        "A categoria 'soldado perfeito' pode ser um ideal vazio. A proposição universal não implica instância real.",
    },
    {
      exemplo:
        "Toda consciência pura transcende o corpo. Logo consciências puras existem.",
      explicacao:
        "Definir uma categoria e atribuir-lhe propriedades não demonstra que membros dessa categoria existam.",
    },
  ],

  // ── COGNITIVA ─────────────────────────────────────────────

  "Sunk Cost Fallacy": [
    {
      exemplo:
        "Já investi R$ 50 mil nesse negócio que não decola. Não posso parar agora.",
      explicacao:
        "Os R$ 50 mil já foram independentemente da decisão futura. Continuar só para 'não perder' pode gerar perdas ainda maiores.",
    },
    {
      exemplo:
        "Passei três horas nessa fila. Não vou sair agora depois de tudo isso.",
      explicacao:
        "O tempo já gasto não volta. A decisão de ficar deve depender do benefício esperado, não do tempo perdido.",
    },
    {
      exemplo:
        "Estudei medicina por quatro anos, mas percebi que odeio. Vou terminar mesmo assim.",
      explicacao:
        "Os quatro anos já passaram. Continuar por mais seis em uma carreira que traz sofrimento agrava o problema.",
    },
    {
      exemplo:
        "Já assisti 40 episódios dessa série chata. Preciso terminar para não ter sido à toa.",
      explicacao:
        "Os episódios já assistidos não voltam. Parar agora poupa tempo que pode ser usado em algo que valha.",
    },
    {
      exemplo:
        "Já pagamos a consultoria cara para implementar esse sistema. Temos que usá-lo mesmo sendo inferior ao anterior.",
      explicacao:
        "O custo da consultoria é irrecuperável. A decisão de manter o sistema deve se basear em eficiência futura, não no que já foi pago.",
    },
  ],

  "Confirmation Bias": [
    {
      exemplo:
        "Acredito que suplementos de vitamina D curam depressão. Salvo artigos que confirmam e ignoro os que contradizem.",
      explicacao:
        "Seleção de evidências para confirmar crença pré-existente impede avaliação científica real do efeito.",
    },
    {
      exemplo:
        "Meu gerente me odeia. Quando ele corrige meu trabalho, confirmo isso. Quando elogia, acho que é para parecer justo.",
      explicacao:
        "Qualquer comportamento é reinterpretado para confirmar a crença, tornando-a impossível de refutar.",
    },
    {
      exemplo:
        "Acho que essa bairro é perigoso. Toda notícia ruim dali eu lembro; as boas eu nem processo.",
      explicacao:
        "A percepção seletiva de informações confirma o estereótipo sem representar a realidade statisticamente.",
    },
    {
      exemplo:
        "Esse político é desonesto. Cada declaração dele eu interpreto como mentira, mesmo quando é verificável.",
      explicacao:
        "A conclusão prévia filtra toda nova informação, impedindo avaliação justa e imparcial.",
    },
    {
      exemplo:
        "Acredito que exercício aeróbico é superior para perda de peso. Leio só estudos que apoiam isso.",
      explicacao:
        "A literatura científica é mais complexa e contraditória. Filtrar apenas o que confirma cria distorção.",
    },
  ],

  "Wishful Thinking": [
    {
      exemplo:
        "Tenho certeza que meu empreendimento vai dar certo — trabalhei muito e mereço.",
      explicacao:
        "Merecimento subjetivo e esforço não garantem sucesso em mercados competitivos. A realidade é indiferente ao desejo.",
    },
    {
      exemplo:
        "Sei que vou passar no concurso desta vez. Sinto que está na hora.",
      explicacao:
        "Intuição de que 'é a hora' não substitui análise do preparo real em relação às exigências da prova.",
    },
    {
      exemplo:
        "Esse relacionamento vai melhorar — as pessoas mudam quando amam de verdade.",
      explicacao:
        "Desejo de que o parceiro mude não é evidência de que isso vai acontecer. Mudança real exige decisão e esforço próprios.",
    },
    {
      exemplo:
        "Quase certeza que minha doença vai regredir naturalmente — não consigo imaginar o contrário.",
      explicacao:
        "A dificuldade de imaginar um resultado ruim não diminui sua probabilidade clínica real.",
    },
    {
      exemplo:
        "O mercado vai se recuperar logo. Sempre recupera. Não preciso vender agora.",
      explicacao:
        "Expectativa otimista baseada em desejo não é análise de risco. Mercados têm ciclos longos e imprevisíveis.",
    },
  ],

  "Magical Thinking": [
    {
      exemplo:
        "Coloquei cristais de quartzo no escritório e as vendas subiram. Os cristais atraíram prosperidade.",
      explicacao:
        "Cristais não têm mecanismo demonstrado de influência em resultados comerciais. A correlação temporal não é causalidade.",
    },
    {
      exemplo:
        "Pensei no meu ex e ele me ligou. O universo estava nos conectando.",
      explicacao:
        "Lembramos das coincidências notáveis e esquecemos as centenas de vezes em que pensamos em alguém e nada aconteceu.",
    },
    {
      exemplo:
        "Rezo antes de cada prova e tiro notas boas. A reza muda meu desempenho.",
      explicacao:
        "Reza pode reduzir ansiedade e melhorar concentração — efeito psicológico real. Mas não altera o conteúdo das questões por mecanismo sobrenatural.",
    },
    {
      exemplo:
        "Sempre uso essa caneta vermelha sortuda nos contratos importantes. Todos foram bem-sucedidos.",
      explicacao:
        "Contratos bem-sucedidos têm causas negociais e legais. A caneta não tem poder causal sobre os resultados.",
    },
    {
      exemplo:
        "Se eu visualizar o gol com intensidade suficiente antes do jogo, vou marcar.",
      explicacao:
        "Visualização pode ajudar preparação psicológica, mas não substitui técnica e condição física nem garante resultado.",
    },
  ],

  "Dunning-Kruger Effect": [
    {
      exemplo:
        "Li um livro sobre neurociência. Agora entendo melhor o cérebro do que a maioria dos neurocientistas.",
      explicacao:
        "Um livro de divulgação dá visão superficial. Neurocientistas passam décadas estudando subdisciplinas específicas em profundidade.",
    },
    {
      exemplo:
        "Assisti um curso online de 10 horas sobre investimentos e já sei mais do que meu gerente de banco.",
      explicacao:
        "Gerentes bancários têm formação técnica, regulatória e experiência prática muito além de qualquer curso introdutório.",
    },
    {
      exemplo:
        "Escutei muito samba e sei que aquele músico profissional está tocando errado.",
      explicacao:
        "Familiaridade auditiva com um gênero é diferente de domínio técnico instrumental. A percepção superficial produz julgamento excessivamente confiante.",
    },
    {
      exemplo:
        "Fiz minha própria pesquisa sobre vacinas online e encontrei mais verdades do que os epidemiologistas.",
      explicacao:
        "Epidemiologistas combinam metodologia estatística, revisão por pares e dados de populações inteiras. Pesquisa informal não equivale a isso.",
    },
    {
      exemplo:
        "Nunca estudei direito mas li a Constituição e entendo mais da lei do que os advogados.",
      explicacao:
        "A Constituição é ponto de partida, não todo o ordenamento. Jurisprudência, doutrina e prática somam décadas de aprendizado técnico.",
    },
  ],

  "In-group Bias": [
    {
      exemplo:
        "Os erros do nosso time foram por azar; os do adversário, por incompetência.",
      explicacao:
        "O mesmo resultado é interpretado de forma mais favorável quando o grupo próprio está envolvido, sem critério objetivo.",
    },
    {
      exemplo:
        "Quando alguém do meu partido mente, foi um deslize. Quando alguém do partido oposto mente, é sinal de caráter.",
      explicacao:
        "O mesmo comportamento recebe julgamento moral diferente dependendo da filiação grupal do agente.",
    },
    {
      exemplo:
        "Os estudantes da minha faculdade são mais críticos e inteligentes do que os de outras.",
      explicacao:
        "Sem dados comparativos objetivos, essa avaliação reflete lealdade institucional, não análise real.",
    },
    {
      exemplo:
        "Produtos da nossa região são sempre mais autênticos e de melhor qualidade.",
      explicacao:
        "Origem geográfica não é garantia de qualidade. A preferência reflete identidade cultural, não avaliação imparcial.",
    },
    {
      exemplo:
        "Quando um imigrante comete crime, é sobre imigração. Quando um nativo comete o mesmo crime, é caso individual.",
      explicacao:
        "O grupo de origem é usado seletivamente como fator explicativo apenas quando o outro grupo está envolvido.",
    },
  ],

  "Bandwagon Fallacy": [
    {
      exemplo:
        "Todos os meus amigos estão fazendo dieta sem glúten. Deve ser mesmo muito saudável.",
      explicacao:
        "Popularidade entre amigos não é evidência clínica. Dietas sem glúten têm indicação específica para celíacos.",
    },
    {
      exemplo:
        "Esse livro de autoajuda é o mais vendido do país. Logo tem as melhores dicas para minha vida.",
      explicacao:
        "Vendas refletem marketing e apelo emocional, não necessariamente qualidade ou utilidade do conteúdo.",
    },
    {
      exemplo:
        "Dez milhões de pessoas usam esse aplicativo de meditação. Então funciona mesmo.",
      explicacao:
        "Número de usuários não prova eficácia clínica. Aplicativos populares podem oferecer conforto placebo.",
    },
    {
      exemplo:
        "Toda a vizinhança está votando nesse candidato. Ele deve ser o melhor.",
      explicacao:
        "Preferência local pode refletir redes de influência, mídia regional ou identidade cultural, não mérito objetivo do candidato.",
    },
    {
      exemplo:
        "Essa criptomoeda está sendo comprada por todo mundo. Está na hora de entrar.",
      explicacao:
        "Popularidade de um ativo pode sinalizar bolha especulativa, não solidez do investimento.",
    },
  ],

  // ── META ──────────────────────────────────────────────────

  "Fallacy Fallacy": [
    {
      exemplo:
        "Ela usou apelo emocional para defender que maus-tratos a animais são errados. Logo maus-tratos a animais não são necessariamente errados.",
      explicacao:
        "O argumento pode ter sido mal estruturado, mas a conclusão pode ainda ser correta com base em outros fundamentos.",
    },
    {
      exemplo:
        "Ele argumentou com falácia do espantalho que vacinas são seguras. Logo vacinas podem ser perigosas.",
      explicacao:
        "A qualidade do argumento do defensor não afeta a verdade da proposição. Vacinas têm segurança demonstrada independentemente.",
    },
    {
      exemplo:
        "O promotor usou apelo ao medo para convencer o júri. Logo o réu é inocente.",
      explicacao:
        "O uso de retórica inadequada pelo promotor não prova inocência. A culpa é questão separada de evidências.",
    },
    {
      exemplo:
        "Esse ativista climático viajou de avião. Portanto a crise climática não é urgente.",
      explicacao:
        "Inconsistência pessoal do defensor não invalida o conjunto de evidências científicas sobre mudanças climáticas.",
    },
    {
      exemplo:
        "O filósofo usou um argumento circular para defender a existência da consciência. Logo a consciência não existe.",
      explicacao:
        "Um argumento ruim não prova o oposto. A existência da consciência é tema que requer investigação própria.",
    },
  ],

  "Argument from Ignorance (strong)": [
    {
      exemplo:
        "Ninguém jamais provou que essa substância não causa câncer. Logo ela causa câncer.",
      explicacao:
        "Ausência de prova de inocência não é prova de dano. O ônus da prova de causalidade cabe a quem afirma o prejuízo.",
    },
    {
      exemplo:
        "Nenhum estudo controlado provou que essa terapia alternativa não funciona. Logo funciona.",
      explicacao:
        "A ausência de estudo refutador pode indicar que nunca foi testada rigorosamente, não que é eficaz.",
    },
    {
      exemplo:
        "Ninguém conseguiu provar com certeza que fantasmas não existem. Logo provavelmente existem.",
      explicacao:
        "Não conseguir provar inexistência não é evidência de existência. O padrão de prova não inverte assim.",
    },
    {
      exemplo:
        "Não encontramos nenhuma civilização extraterrestre ainda. Logo com absoluta certeza não existe vida inteligente no universo.",
      explicacao:
        "Ausência de detecção em uma fração ínfima do universo não prova inexistência universal.",
    },
    {
      exemplo:
        "Ninguém jamais refutou completamente a astrologia. Logo ela tem alguma validade científica.",
      explicacao:
        "A carga da prova recai sobre quem afirma o poder preditivo da astrologia. Não ser refutada completamente não a torna válida.",
    },
  ],

  "Middle Ground Fallacy": [
    {
      exemplo:
        "Uns dizem que a Terra tem 4,5 bilhões de anos; outros dizem 6 mil. A verdade deve estar no meio.",
      explicacao:
        "Não há evidência para nenhum meio-termo. Datação radiométrica aponta consistentemente para 4,5 bilhões de anos.",
    },
    {
      exemplo:
        "Médicos recomendam zero álcool durante a gravidez; redes sociais dizem que uma taça é inofensiva. A verdade é que um pouco está ok.",
      explicacao:
        "Não existe dose segura estabelecida de álcool na gravidez. O consenso médico é abstinência total.",
    },
    {
      exemplo:
        "Um lado diz que a Terra é redonda, o outro diz que é plana. Provavelmente tem algo dos dois.",
      explicacao:
        "Evidência científica é esmagadoramente a favor da esfericidade. Não há base para conceder qualquer parte ao outro lado.",
    },
    {
      exemplo:
        "Alguns dizem que fumar é péssimo para a saúde; a indústria diz que não é tão ruim assim. A verdade está no meio.",
      explicacao:
        "Décadas de estudos independentes confirmam grave dano à saúde. A posição da indústria não merece ser ponderada como equivalente.",
    },
    {
      exemplo:
        "Ambientalistas querem desmatamento zero; madeireiros querem liberdade total. O justo é meio a meio.",
      explicacao:
        "A solução adequada depende de ciência florestal, sustentabilidade e dados ecológicos, não de média aritmética de posições extremas.",
    },
  ],
};
