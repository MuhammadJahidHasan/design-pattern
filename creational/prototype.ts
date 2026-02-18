interface IShape {
    clone(): Promise<IShape>
    draw(): void
}

class Circle implements IShape {
    constructor(private color: string) {
        this.color = color;
    }

    async clone(): Promise<IShape> {
        return await new Circle(this.color);
    }

    draw(): void {
        console.log(`Draw the ${this.color} circle`);
    }

}

class ShapeClient {
    constructor(private readonly shapePrototype: IShape) {
        this.shapePrototype = shapePrototype;
    }

    async createClone() {
        return this.shapePrototype.clone()
    }
    
}

const main = async() => {
   const circleProto = new Circle('green');
   const shapeClient = new ShapeClient(circleProto);
   const secondCircle = await shapeClient.createClone();
   secondCircle.draw();
}

main();