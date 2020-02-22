
// // SELECIONANDO ELEMENTOS 
// // Retorne no console todas as imagens do site
// const queryImg = document.querySelectorAll('img')
// console.log("Imagens com querySelectorAll")
// console.log(queryImg)

// const getEleImg = document.getElementsByTagName('img')
// console.log('Imagens com getElementByTagName')
// console.log(getEleImg)
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const eleImage = document.querySelectorAll('[src^="img/imagem"]')
// console.log('Imagens que começam com a palavra imagem')
// console.log(eleImage)
// // Selecione todos os links internos (onde o href começa com #)

// // Selecione o primeiro h2 dentro de .animais-descricao
// const firstH2 = document.querySelector(".animais-descricao h2")
// console.log(firstH2)
// // Selecione o último p do site
// const lastP = document.querySelectorAll("p")
// console.log(lastP[lastP.length - 1])


// // ForEach e Arrow-Function 

// // Mostre no console cada parágrado do site  
// //Mostre o texto dos parágrafos no console
// const paragrafos = document.querySelectorAll('p'); 

// // function 
// paragrafos.forEach(function(item){
//   return console.log(item.innerText);
// });
// //arrow function
// paragrafos.forEach((item) => {
//   return console.log(item.innerText);
// });
// //arrow function reduzida
// paragrafos.forEach((item) => console.log(item.innerText));

// // foreach com html collection
// const paragrafosEle = document.getElementsByTagName('p');
// const paragrafosArray = Array.from(paragrafosEle);

// paragrafosArray.forEach((item) => console.log(item.innerText));

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => console.log(i++));

// //Classes e Atributos

// // Adicione a classe ativo a todos os itens do menu
// const itemsDoMenu = document.querySelectorAll('.menu li')

// itemsDoMenu.forEach((item, index) => {
//   item.classList.add('ativo')
//   return console.log(`adcionado ativo ao item: ${index + 1}`)
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// itemsDoMenu.forEach((item, index) => {
//   if (index != 0) {
//     item.classList.remove('ativo')
//     return console.log(`removido ativo do item: ${index + 1}`)
//   }
// })

// // Verifique se as imagens possuem o atributo alt

// const imgs = document.querySelectorAll('img')

// imgs.forEach((item, index, array) => {
//   if (!item.hasAttribute('alt')) {
//     console.log(array[index], "não tem o atributo alt")
//   }
// })

// // Modifique o href do link externo no menu

// const itemsDoMenuA = document.querySelectorAll('.menu a')

// itemsDoMenuA.forEach((item) => {
//   item.setAttribute('href', './index.html')
// });

// //Dumens~oes e Distâncias

// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const img = document.querySelector('img')
// console.log(img.offsetTop)

// const imgRect = document.querySelector('img').getBoundingClientRect()

// console.log(imgRect.top)
// // Retorne a soma da largura de todas as imagens
// const allImgs = document.querySelectorAll('img')
// let larguraTotal = 0;
// allImgs.forEach((item) => {
//   console.log(larguraTotal + ' + ' + item.offsetWidth)
//   larguraTotal += item.offsetWidth
// });
// console.log(larguraTotal)

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll('a')

// links.forEach((item) => {
//   let rect = item.getBoundingClientRect()
//   if (rect.width < 48 || rect.height < 48) {
//     console.log(item, "é menor que 48px/48px",
//       'width: ', rect.width,
//       'height: ', rect.height
//     )
//   } else {
//     console.log(item, 'passou no teste')
//   }
// });
// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const menu = document.querySelector('.menu')

// if (window.innerWidth < 720) {
//   menu.classList.add('menu-mobile')
// }

// // EVENTOS 

// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links

// const links = document.querySelectorAll('a[href^="#"]')

// function fClick(event) {
//   event.preventDefault()

//   links.forEach((item) => {
//     item.classList.remove('ativo')
//   })

//   event.target.classList.add('ativo')
// }


// links.forEach((item) => {
//   item.addEventListener('click', fClick)
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const eleList = document.body.getElementsByTagName("*")
// const eleListArray = Array.from(eleList)

// function howIs(event) {
//   console.log(event.currentTarget)
//   event.target.remove()
// }

// eleListArray.forEach((item) => {
//   item.addEventListener('click', howIs)
// });

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento


// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function fontSizeMax(event) {
//   if (event.key == 't') {
//     document.querySelector('body').classList.toggle('t')
//   }
// }
// window.addEventListener('keydown', fontSizeMax)rrrrrrr