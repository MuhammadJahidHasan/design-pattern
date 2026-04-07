interface ICoffee {
    getCost(): number;
}

class BasicCoffee implements ICoffee {
    getCost(): number {
        return 350
    }

}

class CoffeeDecorator implements ICoffee {
    constructor(protected readonly coffeeDecorator: ICoffee) {}

    getCost(): number {
        return this.coffeeDecorator.getCost();
    }

}

class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffeeDecorator.getCost() + 100;
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffeeDecorator.getCost() + 100;
    }
}

const main = () => {
    let basicCoffee = new BasicCoffee();
    basicCoffee = new MilkDecorator(basicCoffee);
    basicCoffee = new SugarDecorator(basicCoffee);
    console.log({basicCoffee: basicCoffee.getCost()});

}

main();

