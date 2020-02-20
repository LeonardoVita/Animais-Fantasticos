// Retorne no console todas as imagens do site
const queryImg = document.querySelectorAll('img')
console.log("Imagens com querySelectorAll")
console.log(queryImg)

const getEleImg = document.getElementsByTagName('img')
console.log('Imagens com getElementByTagName')
console.log(getEleImg)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const eleImage = document.querySelectorAll('[src^="img/imagem"]')
console.log('Imagens que começam com a palavra imagem')
console.log(eleImage)
// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".animais-descricao h2")
console.log(firstH2)
// Selecione o último p do site
const lastP = document.querySelectorAll("p")
console.log(lastP[lastP.length - 1])