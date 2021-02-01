
class Car{
  constructor(){
    console.log('Constructor: construindo carcaça, adicionado partes importantes');
  }
  start(){
    console.log('O motor começa a fazer barulho!');
  }
  drive(){
    console.log('Pronto para partir!');  
  }
  getPrice(){
    return 11000.00;
  }
}

class CarDecorator{
  constructor(car){
    this.car = car
  }
  start(){
    this.car.start();
  }
  drive(){
    this.car.drive();  
  }
  getPrice(){
    this.car.getPrice();
  }
}


class PowerLocksDecorator extends CarDecorator {  
  constructor(car){
    super(car);
    console.log("adicionado super trancas")
  }
  
  getPrice(){
    return 110000.00;  
  }
  drive(){
    // You can either do this
    this.car.drive();
    // or you can call the parent's drive function:
    // CarDecorator.prototype.drive.call(this);
    console.log('A porta fecha automaticamente!');
  }
}

class PowerWindowsDecorator extends CarDecorator{
  constructor(car){
    super(car);
    console.log("Constructor: adicionados super janelas!")
  }
}

class ACDecorator extends CarDecorator {
  constructor(car){
    super(car);
    console.log("Constructor: adicionado unidade A/C")
  }
  start(){
    this.car.start();
    console.log('Começa a fluir um bom ar.');
  }
}



console.log("---Car---");
const car = new Car();
car.drive();

console.log("---powerLocks---");
const powerLocksDecorator = new PowerLocksDecorator(car);
powerLocksDecorator.drive();

console.log("---powerWindows---");
const powerWindowsDecorator = new PowerWindowsDecorator(car);

console.log("---A/C---");
const aCDecorator = new ACDecorator(car);
aCDecorator.start();

