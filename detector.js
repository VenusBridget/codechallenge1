function calculateDemerits(speed){
    const speedLimit = 70;
    const maxDemerits = 12;

//checks if speed is less than speed limit
if (speed <= speedLimit) {
   console.log("Ok")
}
// Driver is given 1 demerit point for every 5km/hr above 70km/hr
else if (
   points = Math.floor((speed - speedLimit) / 5)) {
   console.log("Point:", points)
}
// If demerit points exceed 12, it prints "License Suspended" 
else if (points > maxDemerits) {
   console.log("License Suspended")
}
}
// Example usage
calculateDemerits(80);
calculateDemerits(69);
calculateDemerits(130);