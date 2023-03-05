<p>O projeto usa alguns princípios do SOLID, mas não todos. Acho que se eu fosse estruturar o projeto para tal, ia dar muito trabalho, mas do jeito que fiz, acho que ficou bem organizado</p>

## Funcionalidade extras

<ul>
  <li>Página de detalhes de um personagem</li>
  <li>Página de detalhes de um post</li>
  <li>Blog</li>
  <li>Usando Prisma para armazenar os posts num banco de dados</li>
  <li>Consumindo os posts do banco com Next Api Router</li>
  <li>Validação do Form de Newsletter com ReactHookForm</li>
</ul>

## Como baixar e rodar o projeto

<p>
 Crie um arquivo na raiz do projeto chamado .env.local, e cole as seguintes variáveis</p>

`NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY=your key` <br />
`NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY=your private key` <br />
`NEXT_PUBLIC_MARVEL_API_URL=https://gateway.marvel.com/v1/public`

<p>
 Crie um arquivo na raiz do projeto chamado .env, e cole as seguintes variáveis</p>

`DATABASE_URL="file:./dev.db"`

### Com o projeto clonado, abra o terminal e rode o comandos

<code>yarn setup (vai rodar a seed e instalar as dependências)</code> <br />
e depois <br />
<code>yarn dev</code>
