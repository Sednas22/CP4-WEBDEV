# CP4-WEBDEV – EcoTrend E-commerce

Projeto desenvolvido por Cainã Sandes Batista, RM: 568571. <br>
Apresentado ao curso de Engenharia de Software - disciplina de Web Development. <hr>

<h3>Nome do Projeto:</h3> 
<p>PlástiEco: E-commerce de Produtos Sustentáveis</p>

<h3>Descrição do Caso:</h3> 
<p>
O projeto consiste no desenvolvimento de um e-commerce focado na comercialização de produtos sustentáveis e ecológicos, incentivando um estilo de vida mais consciente e responsável com o meio ambiente.

</p>

<h3>Estrutura do projeto:</h3> <p>

<ul>
  <li>CP4-FED (folder)</li>
  <ul>
    <b><li>index.html</b> - Página inicial do e-commerce, contendo o cabeçalho com navegação, banner em destaque e seções de produtos organizadas por categorias.</li>
    <li>README.md</li>
    <li>src</li>

<ul>
<li>assets</li>
<ul>
<li>img</li>
<ul>
<li>Imagens utilizadas para representar os produtos, banners e elementos visuais da loja.</li>
</ul>

<li>mp3</li>
<ul>
<li>Arquivos de áudio utilizados como elementos complementares da interface.</li>
</ul>
</ul>

<li>css</li>
<ul>
<b><li>style.css</b> - Arquivo responsável pela estilização do site, incluindo personalização do Bootstrap, layout em grid e ajustes de responsividade.</li>
</ul>

<li>js</li>
<ul>
<b><li>script.js</b> - Arquivo responsável pelas funcionalidades do site, incluindo funções, get's e alterações síncronas e assíncronas de estrutura e layout.</li>
<b><li>produtos.json</b> - Armazenamento de produtos e suas inforamções.</li>
</ul>

<li>pages</li>
<ul>
<li><b>categorias.html</b> - Página que exibe os produtos organizados em formato de grid, detalhes do produto, filtro de produtos e produtos em carrinho.</li>
<li><b>contato.html</b> - Página contendo formulário de contato para comunicação com a loja.</li>
<li><b>termos.html</b> - Página com informações e termos de uso do site.</li>
</ul>

</ul>
</ul>
</ul>

<h3>Objetivo:</h3> 
<p>
A proposta é incrementar ao projeto funcionalidade que permitam automatizar o grid de produtos e manipular uso do carrinho, como adicionar, remover, aumentar e diminuir produtos; abrir e fechar modais/sidebar; Filtrar produtos; Atualizar e persistir dados dos produtos localmente.

</p>

<h3>Desenvolvimento:</h3> 
<p>
O projeto foi desenvolvido como atividade avaliativa da disciplina de webdev, tendo como objetivo aplicar conceitos de manipulação DOM, storage e JSON utilizando HTML, CSS, JS, Modals, Sidebar, Grid Layout e Bootstrap.
<ul>
<li>Utilização de elementos semânticos como <code>header</code>, <code>main</code>, <code>aside</code>, <code>section</code> e <code>footer</code> para organização da interface.</li>
<li>Uso de <code>CSS Grid</code>, <code>@media</code> e <code>Bootstrap Grid</code> para organização dos produtos, estilização geral e adaptação a diferentes resoluções de tela.</li>
<li>Utilização do <code>Bootstrap</code> e do componente <code>Carousel</code> para construção do banner com transição de slides.</li>
<li>Consumo de dados externos através de <code>fetch()</code> para leitura do arquivo <code>produtos.json</code>, permitindo a geração dinâmica dos produtos na interface.</li>
<li>Manipulação do DOM com <code>JavaScript</code> para criação dinâmica de cards de produtos, atualização de conteúdo e interação com o usuário.</li>
<li>Implementação de filtros de produtos por categoria e faixa de preço utilizando <code>Array.filter()</code>, tornando a listagem dinâmica conforme a interação do usuário.</li>
<li>Desenvolvimento de modal de detalhes do produto utilizando <code>Bootstrap Modal</code>, alimentado dinamicamente com dados do JSON.</li>
<li>Implementação de carrinho de compras com funcionalidades de adicionar produtos, controle de quantidade e cálculo automático de valores.</li>
<li>Utilização de <code>localStorage</code> para persistência dos dados do carrinho, garantindo que os itens permaneçam salvos mesmo após recarregar a página.</li>
<li>Uso de eventos (<code>addEventListener</code>) para controle de interações como cliques, inputs e submissão de formulários.</li>
<li>Aplicação de <code>Promises</code> para simulação de envio assíncrono no formulário de contato.</li>
<li>Implementação de sidebar dinâmica para exibição do carrinho, controlada via manipulação de classes no CSS.</li>
</ul>
</p>

<h3>Publicação:</h3> 
<p>
🔗 Link GitHub pages: https://sednas22.github.io/PlastiEco/<br>
🔗 Link do repositório: https://github.com/Sednas22/Plastieco
</p>
