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

// FACTORY 
// One function to make a car with any combo of features
function makeCar(features) {
  let car = new Car();

  const featureList =  {
    powerwindows: false,
    powerLocks: false,
    ac: false
  }

  // If they specified some features then add them
  if (features && features.length) { 
    // iterate over all the features and add them

    for (i = 0; i < features.length; i++) {
      // mark the feature in the featureList as a feature
      // that will be included. This way we only get one of
      // each feature.
      featureList[features[i]] = true;      
    }

    // Now we add the features on in a specific order
    if (featureList.powerwindows) {
      car = new PowerWindowsDecorator(car);
    }
    if (featureList.powerlocks) {
      car = new PowerLocksDecorator(car);
    }
    if (featureList.ac) {
      car = new ACDecorator(car);
    }

  }
  return car;
}


// Call the factory method. Send in an array of strings
// representing the features you want your car to have
var myCar = makeCar(['powerwindows', 'ac','ac', 'powerwindows']);

// If you want a plain old car, just don't send in an array
var myCar = makeCar();