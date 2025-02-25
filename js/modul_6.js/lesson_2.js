/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class Car{
    static description = "I'm only for school drive";
    static counter = 0;

    #model;
    #brand;
    constructor(brand, model, price) {
         this.#brand = brand;
         this.#model = model;
        this.price = price;
        
        Car.setCountOfInstanses();
    }
      static setCountOfInstanses() {
          Car.counter += 1;
    }
    get brand() {
        return this.#brand;
    }
    
    withoutGetBrand() {
        return this.#brand;
    }
    
    set brand(updatedBrandName) { 
        this.#brand = updatedBrandName;
        if (updatedBrandName.toLowerCase() === this.#brand.toLowerCase()) {
            this.#brand = updatedBrandName;
        }
    }
    
    
    print() {
     return `You've been created the car ${this.#brand} ${this.#model} and you can get it for ${this.price}`;   
    }
    makeDiscount(discount) {
        const normalizeDiscount = Number.parseInt(discount) / 100;
        this.price = this.price * (1 - normalizeDiscount);
    }
  
}



const instanceAudi = new Car("Audi", "A5", 30_000);
console.log(Car.description);
console.log("🚀 ~ instanceAudi.withoutGetBrand():", instanceAudi.withoutGetBrand())
console.log("🚀 ~ instanceAudi.brand:", instanceAudi.brand);
instanceAudi.brand = "Zaz";

console.log(instanceAudi.brand = "AUDI");
const instanceNissan = new Car("Nissan", "GT-R", 40_000);
const instanceCadillac = new Car("Cadillac", "ATS", 10_000);
const printedAudi = instanceAudi.print();
const printedNissan = instanceNissan.print();
const printedCadillac = instanceCadillac.print();
console.log(printedAudi);
// console.log(printedNissan);
// console.log(printedCadillac);
instanceAudi.makeDiscount("10%")
const res1 = instanceAudi.print();
console.log("🚀 ~ res1:", res1);
console.log(Car.counter);


// Недопустимий код!
// !instanceAudi.brand = "Zaz"


class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  age;
  isMarried;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.isMarried = params.isMarried;
    this.#email = params.email;
  }
}

class User1 {
  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User1.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User1({
  email: "mango@mail.com",
  role: "superuser",
});
// console.log(mango);

/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

