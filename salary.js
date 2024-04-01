const grossSalary = 600000
// Function to calculate tax rate
const taxRates = (grossSalary) => {
    if (grossSalary <= 24000){
        tax = grossSalary * 0.1 }
    else if (grossSalary <= 32333) { 
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25) }
    else if (grossSalary <= 500000) { 
        tax = (24000 * 0.1) + (32333 * 0.25) + ((grossSalary - 32333) * 0.3) }
    else if (grossSalary <= 800000) { 
        tax = (24000 * 0.1) + (32333 * 0.25) + (500000 * 0.3) + ((grossSalary - 500000) * 0.325) }
    else{
        (24000 * 0.1) + (32333 * 0.25) + (500000 * 0.3) + (800000 * 0.325)+ ((grossSalary - 800000) * 0.35)}
    return tax;
}
// Calculate nhifDeductions
const nhifDeductions = (grossSalary) => {
    if (grossSalary <= 5999){
        return 150; }
    else if (grossSalary <= 7999){
        return 300; }
    else if (grossSalary <= 11999){
        return 400; }
    else if (grossSalary <= 14999){
        return 500; }
    else if (grossSalary <= 19999){
        return 600; }
    else if (grossSalary <= 24999){
        return  750; }
    else if (grossSalary <= 29999){
        return  850; }
    else if (grossSalary <= 34999){
        return  900; }
    else if (grossSalary <= 39999){
        return  950; }
    else if (grossSalary <= 49999){
        return  1000; }
    else if (grossSalary <= 59999){
        return  1200; }
    else if (grossSalary <= 69999){
        return 1300; }
    else if (grossSalary <= 79999){
        return 1400; }
    else if (grossSalary <= 89999){
        return  1500; }
    else if (grossSalary <= 99999){
        return  1600; }
    else{
        return 1700; }
    };
// Calculate nssf deductions
const nssfDeductions = (grossSalary) => {
    const tier1UpperLimit = 7000;
    const tier1Rate = 0.06;
    const tier2UpperLimit = 36000;
    const tier2Rate = 0.06;

let nssfRate = grossSalary * 0.06;
    if (grossSalary <= tier1UpperLimit){
        nssfRate = grossSalary * tier1Rate;
    }
    else{
        nssfRate = tier1UpperLimit * tier1Rate;
    }
    if (grossSalary > tier2UpperLimit){
        nssfRate = grossSalary * tier2Rate;
    }
    return nssfRate;
}

//Calculate Net Salary
const netSalary = grossSalary - taxRates - nhifDeductions - nssfDeductions;

    console.log(grossSalary);
    console.log(taxRates(grossSalary));
    console.log(nhifDeductions(grossSalary));
    console.log(nssfDeductions(grossSalary));