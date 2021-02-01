//  CONTRUCTOR
// function Car(marca,preco) {
//   this.marca = marca   
//   this.preco = preco   
// }

// const honda = new Car('honda',12000);

// const civic = new Car('civic',13000);

// function Pessoa(nome, idade){
//   this.nome = nome;
//   this.idade= idade;

//   this.andar = function(metros) {
//     console.log(this.nome + " andou " + metros + " metros ");
//   }
// }

// const carlos = new Pessoa("carlos", 20);
// console.log(carlos);
// carlos.andar(102);

// Prototype

// function Pessoa(nome,idade){
//   this.nome = nome;
//   this.idade = idade;  
// }

// Pessoa.prototype.andar = function() {
//   console.log(this);   
// }

// // const andre =  new Pessoa("andré",22)
//  listaAnimais = ['cachorro','gato','cavalo'];

// // o dado não é Array é um Nodelist (array like)
// const listaAll = document.querySelectorAll('li');

// //transforma em Array
// const listaAllArray = Array.prototype.slice.call(listaAll);
// const

// function Pessoa(nome, sobrenome, idade){
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }

// // Pessoa.prototype = {  
// //   getFullName: function(){
// //     return this.nome + " " + this.sobrenome
// //   }
// // }

// Pessoa.prototype.getFullName = function(){
//   return this.nome + " " + this.sobrenome
// }
  

// const andre = new Pessoa('andre','milanez',22)

// CONSTRUTOR  

  function Car(marca,preco,color){
    this.marca=marca;
    this.preco=preco;
    this.kilometragem = 0;
    this.color=color;    

    this.andar = function(metros){
      this.kilometragem += metros/1000;
      console.log("o "+ this.marca +" andou " + metros + " metros")    
    } 

  }

  function PowerCar(marca,preco,color){
    this.marca=marca;
    this.preco=preco;
    this.kilometragem = 0;
    this.color=color;

    this.isBroken = false;
    this.isNitro = false

    this.nitro = function(){
      this.isNitro = !this.isNitro;

      this.isNitro === true ? console.log("Nitro ativado!!") : console.log("Nitro desativado");
    }

    this.brake = function(){
      this.isBroken = true;
      console.log(this.marca + " quebrou!")
    }
  }

// OBJETO

  const honda = new Car("honda",12000,"azul");
  honda.andar(1500);
  console.log(honda)

  const mcLaren = new PowerCar("mcLaren", 30000, "prateado");   
  console.log(mcLaren);

// PROTOTYPE

  Car.prototype.isNew = function(){
    return this.kilometragem === 0 ? true : false
  }
  Car.prototype.changeColor = function(newColor){
    this.color = newColor;
    console.log(this.marca + " mudou para a cor " + this.color);
  }

// CALL 
  honda.andar.call(mcLaren,1000);
  honda.andar(1000);
  Car.prototype.changeColor.call(mcLaren,"vermelho");
// CLASS

class Mecanico {
  constructor(name,price){
    this.name=name;
    this.price=price;    
  }

  consertar(car){
    car.isBroken = false
    console.log(car.marca + " foi consertado!")
  }
}

const carlinhos = new Mecanico("carlos",2000)
const joaozinho = new Mecanico("João",1999)

mcLaren.brake();

carlinhos.consertar(mcLaren);


