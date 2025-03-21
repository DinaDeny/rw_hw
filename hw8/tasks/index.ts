import { Dog, Cat } from './abstraction';
import {UserInfo, User} from './firsttask';

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

async function logUsers (): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await response.json();
        mutateUser(users[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function mutateUser(user: User): void {
    const userInfo = new UserInfo(user);
    console.log(userInfo.getAddress());
    console.log(userInfo.getCompany());
    console.log(userInfo.getUserName());
}

logUsers();


