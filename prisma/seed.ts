import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title:
        "Marvel avança com Doutor Estranho 3 e quer a volta do diretor do 1º filme",
      content:
        "Assim como Loki e Homem-Aranha: Sem Volta Para Casa, Doutor Estranho 2 foi outra produção da Marvel que explora o multiverso, que vem se tornando sinônimo de surpresas e participações especiais.  E na cena pós-créditos do filme fomos apresentados a Clea, personagem da atriz Charlize Theron. Ela fala com o Strange sobre uma incursão causada pelo mago, levando a crer que as consequências de sua viagem pelo multiverso serão explorados em um 3º filme.  O que não poderíamos imaginar é que Doutor Estranho 3 já estivesse em desenvolvimento ativo pela Marvel. Fontes como o Greatphase o BSL afirmaram que o estúdio está avançando rapidamente com o próximo filme por uma questão: ele precisa estrear antes de Vingadores: Dinastia Kang.",
      slug: "marvel-avanca-com-doutor-estranho-3-e-quer-a-volta-do-diretor-do-1o-filme",
      image_url:
        "https://legadodamarvel.com.br/wp-content/uploads/2023/01/Marvel-avanca-com-Doutor-Estranho-3-e-quer-a-volta-do-diretor-do-1o-filme-legadodamarvel.webp",
    },
  });
  await prisma.post.create({
    data: {
      title:
        "Homem-Aranha 4: Ator publica foto indicando que será o vilão do filme",
      content:
        "Homem-Aranha 4 ainda espera pelo sinal verde de Tom Holland, e anteriormente Tom Rothman, o Presidente da Sony, revelou que também espera que a Zendaya e o diretor Jon Watts retornem para a continuação.  E agora quem também parece estar indicando um retorno é o ator Jacob Batalon, que interpreta o Ned na franquia. Nos stories do seu Instagram, o ator publicou uma foto segurando um boneco do Duende Macabro:",
      slug: "homem-aranha-4-ator-publica-foto-indicando-que-sera-o-vilao-do-filme",
      image_url:
        "https://legadodamarvel.com.br/wp-content/uploads/2023/01/Homem-Aranha-4-Ator-publica-foto-indicando-que-sera-o-vilao-do-filme-legadodamarvel.webp",
    },
  });
  await prisma.post.create({
    data: {
      title: "Marvel libera trailer final de Homem-Formiga 3 – Assista",
      content:
        "Falta pouco para a estreia de Homem-Formiga 3 nos cinemas brasileiros, dando início à aguardada Fase 5 do MCU no dia 16 de fevereiro. Com tanto pouco tempo faltando, teremos o trailer FINAL do filme divulgado AMANHÃ de noite.  Enquanto isso, um detalhe curioso caiu na internet. Já que uma imagem de dias atrás (06/01) revelou Paul Rudd nos sets em Los Angeles, para filmagens adicionais do filme.",
      slug: "marvel-libera-trailer-final-de-homem-formiga-3-assista",
      image_url:
        "https://legadodamarvel.com.br/wp-content/uploads/2023/01/legadodamarvel-homem-formiga-3-e-a-vespa-quantumania-750x394.webp",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
