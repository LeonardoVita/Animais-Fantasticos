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


/* Abstract CarShop "class" */
const CarShop = function(){};
CarShop.prototype = {
  sellCar: function (type, features) {
    const car = this.manufactureCar(type, features);

    // make-believe function

    return car;
  },
  decorateCar: function (car, features) {
    /*
      Decorate the car with features using the same
      technique laid out in CarFactory on my previous
      post:
      /javascript/javascript-design-patterns-factory/
    */
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
  },
  manufactureCar: function (type, features) {
    throw new Error("manufactureCar must be implemented by a subclass");
  }
};


/* Subclass CarShop and create factory method */
const JoeCarShop = function() {};
JoeCarShop.prototype = new CarShop();
JoeCarShop.prototype.manufactureCar = function (type, features) {
  let car;

  // Create a different car depending on what type the user specified
  switch(type) {
    case 'sedan':
      // car = new JoeSedanCar();
      console.log("car = new JoeSedanCar()")
      break;
    case 'hatchback':
      // car = new JoeHatchbackCar();
      console.log("car = new JoeHatchbackCar()")
      break;
    case 'coupe':
    default:
      // car = new JoeCoupeCar();
      console.log("car = new JoeCoupeCar()")

  }

  // Decorate the car with the specified features
  return this.decorateCar(car, features);
};

/* Another CarShop and with factory method */
const ZimCarShop = function() {};
ZimCarShop.prototype = new CarShop();
ZimCarShop.prototype.manufactureCar = function (type, features) {
  let car;
  // Create a different car depending on what type the user specified
  // These are all Zim brand
  switch(type) {
    case 'sedan':
      // car = new ZimSedanCar();
      console.log("car = new ZimSedanCar()")
      break;
    case 'hatchback':
      // car = new ZimHatchbackCar();
      console.log("car = new ZimHatchbackCar(")
      break;
    case 'coupe':
    default:
      // car = new ZimCoupeCar();
      console.log("car = new ZimCoupeCar()")
  }

  // Decorate the car with the specified features
  return this.decorateCar(car, features);
};


// Use Joe's Shop
var shop = new JoeCarShop();
var car = shop.sellCar("sedan", ["powerlocks"]);

// How about Zim's Shop? Same thing
shop = new ZimCarShop();
car = shop.sellCar("sedan", ["powerlocks"]);

// The shop determines which type of Car we get,
// even if we give the same parameters