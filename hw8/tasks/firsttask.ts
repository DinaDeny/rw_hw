interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}

interface Geo  {
    lat: string,
    lng: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface User {
    id: number;
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}


class UserInfo {

    public user: User;

    public constructor(user: User) {
        this.user = user;
    }

    public getAddress ():string {
        return `${this.user.address.zipcode}, ${this.user.address.city}, ${this.user.address.street}, ${this.user.address.suite}`;
    }

    public getCompany ():string {
        return `${this.user.company.name}`;
    }

    public getUserName ():string {
        return `${this.user.username}`;
    }
}


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
