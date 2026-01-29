//Example: 1 without director

class Computer {
    private name;
    private cpu;
    private ram;

    constructor(builder: ComputerBuilder) {
        this.name = builder.name;
        this.cpu = builder.cpu;
        this.ram = builder.ram;
    }

    getComputer() {
        return `${this.name} is the ${this.cpu}, cpu ${this.ram}`;
    }

}

class ComputerBuilder {
    public name;
    public cpu?: string;
    public ram?: string;

    constructor(name: string) {
        this.name = name;
    }

    addCpu(cpu: string) {
        this.cpu = cpu;
        return this;
    }

    addRam(ram: string) {
        this.ram = ram;
        return this;
    }

    build() {
        return new Computer(this);
    }
}

const main = () => {

    const myComputer = new ComputerBuilder('Gamming pc').addCpu('16 core').addRam('32 gb ram').build();
    console.log(myComputer.getComputer());

}

main();

//Example: 2 with director

class UserBuilder {
    private name
    private userType?: string
    private admistrationType?: boolean;
    private age?: number;

    constructor(name: string) {
        this.name = name;
    }

    setType(userType: string) {
        this.userType = userType;
    }

    isAdmin(admistrationType: boolean) {
        this.admistrationType = admistrationType
    }

    setAge(age: number) {
        this.age = age;
    }

    getUser() {
        return `${this.name} is the ${this.userType} user, admistration role is ${this.admistrationType} and age ${this.age}`;
    }
}

interface Builder {
    setUserType(): any;
    setAdmin(): any;
    setAge(): any;
    build(): UserBuilder;
}

class GuestUser implements Builder {
    private readonly userBuilder
    constructor() {
        this.userBuilder = new UserBuilder('Jahid')
    }
    setUserType() {
        this.userBuilder.setType('Guest');
    }
    setAdmin() {
        this.userBuilder.isAdmin(false);
    }
    setAge() {
        this.userBuilder.setAge(20);
    }

    build() {
        return this.userBuilder;
    }

}

class NormalUser implements Builder {
    private readonly userBuilder
    constructor() {
        this.userBuilder = new UserBuilder('Hasan')
    }
    setUserType() {
        this.userBuilder.setType('Normal');
    }
    setAdmin() {
        this.userBuilder.isAdmin(false);
    }
    setAge() {
        this.userBuilder.setAge(25);
    }

    build() {
        return this.userBuilder;
    }

}

class UserDirector {
    construct(builder: Builder) {
        builder.setAdmin();
        builder.setUserType();
        builder.setAge();
    }
}

const index = () => {

    const guestUser = new GuestUser()
    const userDirector = new UserDirector();
    userDirector.construct(guestUser);
    const user = guestUser.build().getUser();
    console.log(user);

}

index();