interface IPaymentService {
    pay(amoutInTk: number): number
}

class StripePaymentSevice {
    makePayment(amountInDollars: number) {
        console.log(`Payment via stripe, paid amount- ${amountInDollars} dollars`);
    }
}

class StripePaymentAdapter implements IPaymentService {
    
    pay(amoutInTk: number): number {
        const stripePaymentService = new StripePaymentSevice();
        const amountInDollars = Math.round(amoutInTk/120);
        stripePaymentService.makePayment(amountInDollars);
        return amountInDollars;
    }

}

class Client {
    constructor(private readonly paymentServie: IPaymentService) {}
     
    payment(amount: number) {
        this.paymentServie.pay(amount);
    }
}


const main = () => {
    const stripePaymentAdapter = new StripePaymentAdapter();
    const client = new Client(stripePaymentAdapter);
    client.payment(240);
}
main();
