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

export interface User {
    id: number;
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}


export class UserInfo {

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


