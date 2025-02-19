import { Dog, Cat } from "./abstraction";

const dog = new Dog('Leo', 10, 'Goldendoodle');

console.log(dog);

dog.bark();
dog.eat(1);
dog.play();
dog.sleep();

console.log(dog.energy);

const cat = new Cat('Charles', 10, false);

console.log(cat);

console.log(cat.declawed);
cat.eat(2);
cat.meow();
cat.play();
cat.sleep();

console.log(cat.energy);


