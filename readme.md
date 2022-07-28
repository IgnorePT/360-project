# Projeto 360 - Equipa 4

<br>

## Descrição
---
<br>
Repositório do projeto da Equipa 4 do Projeto 360 - [Edit Porto](https://weareedit.io/).

<br/> 

**Cliente:** Porto Editora <br/>
**Projeto:** Pais & Alunos <br/>

<br/> 

## Relatório de desenvolvimento

O projeto foi desenvolvido sem recurso a nenhuma framework sendo que as principais linguagens utilizadas foram HTML, SCSS (mais tarde compilado para css), JS (Vanilla).

<br/>

### Estrutura de pastas do projeto

- **assets** - todos os recursos gráficos & multimédia
- **components** - componentes do website isolados
- **css** -  ficheiros SCSS e CSS do projeto
- **js** - scripts necessários ao projeto

<br />

### Páginas desenvolvidas
- [x] Landing Page (index.html)
- [x] Desafios (desafios.html)
- [x] Detalhe de artigos (article.html)
- [x] Jogo (game.html)
- [ ] Dashboard (dashboard.html) - incompleta

<br />

### Desenvolvimento

Tentamos reproduzir o máximo de páginas possíveis mas devido a querermos ter implementado um jogo jogável perdemos algum tempo útil para conseguir desenvolvermos todas as páginas desenhadas. Também não nos foi possível desenvolver a componente responsive das mesmas sendo que nos focamos na vertente mobile que seria o sitio onde possivelmente teríamos mais acessos a plataforma. 

<br />
Contudo conseguimos desenvolver algumas features interessantes como o jogo, que apesar da lógica não estar otimizada foi possível criar uma versão jogável de demonstração que pelo menos permite ter uma noção da dinâmica do mesmo.
 Outra feature que podemos destacar foi a criação de um sistema de partilhas do resultado utilizando as novas API's existentes no Navigator API, onde destacamos a utilização de uma biblioteca de conversão de HTML para imagem de forma a poder ser partilhada nas opções existentes no Navigator API (Social share, message share, etc). As bibliotecas que nos permitiram converter a DOM em imagem foram:
 
 - [DOM to Image](https://github.com/tsayen/dom-to-image) 
 - [FileSaver.js](https://github.com/eligrey/FileSaver.js)
 

 Tentamos criar animações simples utilizando bibliotecas como:
 
 - [Animate.JS](https://animejs.com/)
 - [GSAP](https://greensock.com/gsap)

 Contudo é um processo que demora o seu tempo e só foi aplicado em certos elementos (Tentamos fazer morph a svg's mas era um processo que requeria algum tempo).

<br />
O processo de desenvolvimento teve bastantes mudanças ao longo do desenvolvimento e por isso é que não nos foi possível concluir todos os elementos que pretendíamos, assim como organizar e uniformizar todas as nomenclaturas e classes em css e JS.
<br />
Mas dentro do tempo limitado que tivemos e dentro dos possível consideramos que é o desenvolvimento foi positivo, e é possível através do nosso desenvolvimento ter uma base para continuar o mesmo e ter uma ideia geral de todas as componentes existentes no projeto.

<br />
O website encontra-se disponível temporariamente no seguinte endereço:

- [https://paisealunos.foxcoding.net/](https://paisealunos.foxcoding.net/)

<br />

## Autores
---
- Nelson Fernandes
- Soraia D'Almeida
