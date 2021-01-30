
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
// window.addEventListener('keydown', fontSizeMax)

// // OBJECTS 

// // Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nomeParam, idadeParam) {
//   this.nome = nomeParam
//   this.idade = idadeParam
//   this.andar = (passos) => {
//     console.log(this.nome + ' andou ' + passos + ' passos')
//   }
// }

// const leo = new Pessoa('Leonardo', 24)
// console.log(leo.nome, leo.andar(100))

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos

// const jogao = new Pessoa('Joao', 20)
// const maria = new Pessoa('Maria', 25)
// const Bruno = new Pessoa('Bruno', 15)


// // Crie uma Constructor Function (Dom) para manipulação
// // de listas de elementos do dom. Deve conter as seguintes
// // propriedades e métodos:
// //
// // elements, retorna NodeList com os elementos selecionados
// // addClass(classe), adiciona a classe a todos os elementos
// // removeClass(classe), remove a classe a todos os elementos

// function Dom(seletorParam) {
//   this.elements = document.querySelectorAll(seletorParam)

//   this.addClass = (classParam) => {

//     this.elements.forEach((item) => {
//       item.classList.add(classParam)
//     });

//   }

//   this.removeClass = (classParam) => {

//     this.elements.forEach((item) => {
//       item.classList.remove(classParam)
//     });

//   }

// }

// const animaisImg = new Dom('.animais li')
// console.log(animaisImg.elements)
// animaisImg.addClass('ativo')
// animaisImg.removeClass('ativo')

// // PROTOTIPE 

// // Crie uma função construtora de Pessoas
// // Deve conter nome, sobrenome e idade
// // Crie um método no protótipo que retorne
// // o nome completo da pessoa

// function Pessoas(nomeParam, sobrenomeParam, idadeParam) {
//   this.nome = nomeParam
//   this.sobrenome = sobrenomeParam
//   this.idade = idadeParam
// }

// Pessoas.prototype.fullName = function () {
//   return this.nome + ' ' + this.sobrenome
// }

// const andre = new Pessoas('andre', 'silva', 28)

// console.log(andre.fullName())




// // Liste os métodos acessados por 
// // dados criados com NodeList,
// // HTMLCollection, Document

// // Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

// // STRINGS 
// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 49',
//   },
// ];

// let valorTotal = 0;

// transacoes.forEach((item) => {
//   valorTotal += parseInt(item.valor.slice(3));
// });

// console.log(valorTotal)

// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// console.log(transportes.split(';'))

// // Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// console.log(html.replace(/[span>]+/g, 'a>'))

// // Retorne o último caracter da frase
// const frase = 'Melhor do ano!';

// console.log(frase.charAt(frase.length - 1))

// // Retorne o total de taxas
// const transacoes2 = [
//   'Taxa do Banco',
//   '   TAXA DO PÃO',
//   '  taxa do mercado',
//   'depósito Bancário',
//   'TARIFA especial'
// ];

// // MATH 

// // Retorne um número aleatório
// // entre 1050 e 2000

// console.log('Numero Random: ', Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// // Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9'
// const numArray = numeros.split(', ')
// const numeroMaximo = Math.max(...numArray); //SPREAD

// console.log('Numero Maximo: ', numeroMaximo)

// // Crie uma função para limpar os preços
// // e retornar os números com centavos arredondados
// // depois retorne a soma total
// const listaPrecos = [
//   'R$ 59,99', ' R$ 100,222',
//   'R$ 230  ', 'r$  200'
// ];

// let precoTotal = 0

// listaPrecos.forEach((preco, index) => {
//   let precoFinal = preco;

//   precoFinal = precoFinal.slice(3)
//   precoFinal = precoFinal.trim()
//   precoFinal = +precoFinal.replace(',', '.')
//   precoFinal = +precoFinal.toFixed(2)

//   console.log(`Preço ${index + 1}: `, precoFinal)
//   precoTotal += precoFinal

// });

// console.log('preço total: ', precoTotal)

// ARRAY 

// criando um array like, um array que não é array
// const obj = {
//   0: 'andre',
//   1: 'jaozinho',
//   3: 'nando moura',
//   length: 5
// }

// const objArray = Array.from(obj)

// console.log(objArray)

// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // Remova o primeiro valor de comidas e coloque em uma variável
// // Remova o último valor de comidas e coloque em uma variável
// // Adicione 'Arroz' ao final da array
// // Adicione 'Peixe' e 'Batata' ao início da array

// const ultimo = comidas.pop()
// const primeiro = comidas.shift()
// comidas.push('Arroz')
// comidas.unshift('Peixe','batata')


// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// // Arrume os estudantes em ordem alfabética
// // Inverta a ordem dos estudantes
// // Verifique se Joana faz parte dos estudantes
// // Verifique se Juliana faz parte dos estudantes
// estudantes.sort()
// estudantes.reverse()
// console.log(estudantes.includes('Joana'))
// console.log(estudantes.includes('Juliana'))

// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`
// // Substitua section por ul e div com li,
// // utilizando split e join

// const arraySplited = html.split('section>')
// const arrayUl = arraySplited.join('ul>')
// const arraySplited2 = arrayUl.split('div>')
// const arrayLi = arraySplited2.join('li>')

// console.log(arrayLi)

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável
// const carrosOriginal = carros.slice()
// carros.pop();
// console.log(carrosOriginal, carros)

// // ARRAY INTERAÇÕES

// // Selecione cada curso e retorne uma array
// // com objetos contendo o título, descricao,
// // aulas e horas de cada curso

// const cursos = document.querySelectorAll('.curso')
// const cursosArray = Array.from(cursos)



// const cursosObjs = cursosArray.map(curso => {
//   let h1 = curso.querySelector('h1').innerText
//   let p = curso.querySelector('p').innerText
//   let aula = curso.querySelector('.aulas').innerText
//   let hora = curso.querySelector('.horas').innerText

//   return { h1, p, aula, hora }
// });

// console.log(cursosObjs)

// // Retorne uma lista com os
// // números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];

// const maiores100 = numeros.filter(num => num > 100)
// console.log(maiores100)

// // Verifique se Baixo faz parte
// // da lista de instrumentos e retorne true
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// const temBaixo = instrumentos.includes('Baixo')

// console.log(temBaixo)


// // Retorne o valor total das compras
// const compras = [
//   {
//     item: 'Banana',
//     preco: 'R$ 4,99'
//   },
//   {
//     item: 'Ovo',
//     preco: 'R$ 2,99'
//   },
//   {
//     item: 'Carne',
//     preco: 'R$ 25,49'
//   },
//   {
//     item: 'Refrigerante',
//     preco: 'R$ 5,35'
//   },
//   {
//     item: 'Quejo',
//     preco: 'R$ 10,60'
//   },
//   {
//     item: 'Arroz',
//     preco: 'R$ 2,60'
//   }
// ]

// const comprasPrecos = compras.map((item) => +item.preco.replace('R$ ', '').replace(',', '.'))

// const totalPreco = comprasPrecos.reduce((acumulador, preco) => acumulador + preco)

// console.log(totalPreco) //49.42

// FUNCTIONS METHODS 

// function imc(peso, altura) {
//   return peso / (altura * altura)
// }

// const imc180 = imc.bind(null, 1.80)

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

// const p = document.querySelectorAll('p')

// let x = 0;

// const soma = Array.prototype.reduce.call(p, function (acc, item) {
//   return acc += item.innerText.length
// }, 0)

// console.log('soma: ', soma)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

// const paragrafos = document.querySelectorAll('p');

// const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, item)=>{  
//   const innerText =  item.innerText;
//   return acc + innerText.trim().replaceAll(" ","").length
// },0)

// console.log(totalCaracteres)

