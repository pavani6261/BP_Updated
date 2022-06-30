export class CalculateLoan{
    BalanceAmount!:number;
    EMI!:number; 
    RateOfInterest;
    LoanDuration;
    LoanAmount;

    constructor(RateOfInterest:number,LoanDuration:number,LoanAmount:number){
        this.RateOfInterest=RateOfInterest;
        this.LoanAmount=LoanAmount;
        this.LoanDuration=LoanDuration;
    }
}