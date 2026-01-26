interface ICar {
    name: string;
    model: string;
    color: string;
    getCar(): any;
}

class Sedan implements ICar {
    name: string;
    model: string;
    color: string;

    constructor(name: string, model: string, color: string) {
        this.name = name;
        this.model = model;
        this.color = color;
    }

    getCar() {
        console.log(`This is sedan`); 
    }
}

class HatchBack implements ICar {
    name: string;
    model: string;
    color: string;

    constructor(name: string, model: string, color: string) {
        this.name = name;
        this.model = model;
        this.color = color;
    }

    getCar() {
        console.log(`This is hatchback`); 
    }

}

interface ICarFactory {
    createCar(): any;
}

class SedanCarFactory implements ICarFactory {
    createCar() {
        return new Sedan('Corolla', 'Axio', 'black');
    }
}

class HatchBackCarFactory implements ICarFactory {
    createCar() {
        return new HatchBack('Corolla', 'Aqua', 'black');
    }
}

class Client {
    private car;
    constructor(factory: ICarFactory) {
        this.car = factory.createCar();
    }
    getCar(): ICar {
        return this.car;
    }
}

const main = function () {

    const sedanFactory = new SedanCarFactory();
    const hatchBackFactory = new HatchBackCarFactory();

    const clientSedan = new Client(sedanFactory);
    const clientHatchBack = new Client(hatchBackFactory);

    const sedanCar = clientSedan.getCar();
    const hatchBack = clientHatchBack.getCar()

    sedanCar.getCar();
    hatchBack.getCar();


}

main();