// const BasicS = prompt("Enter BasicS ");

//calculate individuals net salary
//calculate payee NHIF deductions,NSSF deductions,Gross salary,Net salary

//Input = Basic salary 
//input = Bfits  

let BasicS = "";
let Bfits ="";

// //output = tax 
// function tax(Incomesalary){
//     let taxed = 0;
//     let grosstax = 0;
//     let rate =0;
    
//     if(Incomesalary > 0 && Incomesalary <= 24000){
//         grosstax= (Incomesalary*0.10)
//         taxed = Incomesalary - grosstax;
//     }else if(Incomesalary >= 24001 && Incomesalary <=32333){
//         rate = (Incomesalary - 24000)*0.25;
//         grosstax = 2400 + rate
//         taxed = Incomesalary - grosstax;
//     }else if (Incomesalary >= 32334 && Incomesalary <=500000){
//         rate =(Incomesalary- 32333)*0.30;
//         grosstax =2400 + 2083.25 +rate
//         taxed = Incomesalary - grosstax;
//     }else if (Incomesalary >= 500001 && Incomesalary <=800000){
//         rate=(Incomesalary- 500000)*0.325;
//         grosstax = 2400 + 2083.25 +140300.1 + rate
//     }else if (Incomesalary >800000 ){
//         rate=(Incomesalary- 800000)*0.35;
//         grosstax = 2400 + 2083.25 + 140300.1 + 97500 + rate
//         taxed = Incomesalary - grosstax;
//     }
//     return taxed;
//        console.log(tax(50000))
// } 




//output =NHIFDeductions


//output =NSSFDeductions






//output = Gross salary


//

//output = tax

//output = NHIFDeductions

//output = NSSFDeductions

//output = Gross salary

//output = Net Salary
/*

gross salary = 75000
nssf = (75000 * 0.06) = 4500
nhif = 1400 //(1400 * 0.15) = 210 *

75000 - (nssf + nhif)
let TaxIncome = 75000 - (nssf + nhif)5900 //69100
let payee = tax(TaxIncome).Paye
let net salary = tax(TaxIncome).netsalary

NSSFDeductions = 4500
NHIFDeduction s = 1400
payee (i.e. Tax) = 51186.65 // tax.Paye
gross salary = 75000
net salary = 17913.35 // tax.netsalary
*/

function Krataxratax(BasicS, Bfits){
    let nssf = 0;
    let nhif = 0;

    function benefitsfunction(BasicS, Bfits = 0){
        let  NHIFDeducts = 0
     
         if (BasicS > 0  && BasicS <= 5999){
           NHIFDeducts  = 150
           
         }else if (BasicS >= 6000 && BasicS <= 7999){
           NHIFDeducts =300
     
         }else if(BasicS >= 8000 && BasicS <= 11999){
           NHIFDeducts =400
     
         }else if(BasicS >= 12000 && BasicS <= 14999){
           NHIFDeducts =500
         }
         else if(BasicS >= 15000 && BasicS <= 19999){
           NHIFDeducts =600
     
         }
         else if(BasicS >= 20000 && BasicS <= 24999){
           NHIFDeducts =750
     
         }
         else if(BasicS >= 25000 && BasicS <= 29999){
           NHIFDeducts =850
     
         }
         else if(BasicS >= 30000 && BasicS <= 34999){
           NHIFDeducts =900
     
         }
         else if(BasicS >= 35000 && BasicS <= 39999){
           NHIFDeducts =950
     
         }else if(BasicS >= 40000 && BasicS <= 44999){
           NHIFDeducts =1000
     
         }
         else if(BasicS >= 50000 && BasicS <= 59999){
           NHIFDeducts =1200
     
         }
         else if(BasicS >= 60000 && BasicS <= 69999){
           NHIFDeducts =1300
     
         }
         else if(BasicS >= 70000 && BasicS <= 79999){
           NHIFDeducts =1400
     
         }
         else if(BasicS >= 80000 && BasicS <= 89999){
           NHIFDeducts =1500
     
         }
         else if(BasicS >= 90000 && BasicS <= 99999){
           NHIFDeducts =1600
     
         }
         else if (BasicS >= 100000){
           NHIFDeducts =1700
         }
     
         // nssf = (benefit > 0 ) ? benefit : BasicS * 0.06;
     
         if(Bfits > 0){
             nssf = Bfits;
         }else{
             nssf = BasicS * 0.06;
         }
     
         nhif = NHIFDeducts;
         TaxIncome = BasicS - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 TaxIncome,
             }
    }    

    function tax(TaxIncome){
    let Paye = 0;
    let grossTax = 0;
    let rated = 0;
    let Relief = 2400;

    if(TaxIncome > 0 && TaxIncome <= 24000){
        grossTax = (TaxIncome*0.10);
    }else if (TaxIncome >= 24001 && TaxIncome <= 32333){
        rated = (TaxIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    }else if (TaxIncome >= 32334 && TaxIncome <= 500000){
        rated = (TaxIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (TaxIncome >= 500001 && TaxIncome <= 800000){
        rated = (TaxIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(TaxIncome > 800000){
        rated = (TaxIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    Paye =  ~~(grossTax - Relief);
    netsalary = (TaxIncome - Paye);
    return { Paye, netsalary }
    }
   
    let myTaxableIncome  = benefitsfunction(BasicS,Bfits);
    let taxed = tax(myTaxableIncome.TaxIncome);

    return {
        NSSFDeductions:  myTaxableIncome.nssf,
        NHIFDeductions:  myTaxableIncome.nhif,
        payee:  taxed.Paye,
        grosssalary:  BasicS,
        netsalary:  taxed.netsalary
    }
    document.getElementById("returns").innerText = BasicS ;
}


console.log(Krataxratax(45890, 4000))

