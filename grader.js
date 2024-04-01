// This uses if-else to determine the grade

function calculateGrade(){
    // Prompt user to input student marks
    let marks = prompt("Enter Your Marks")
    // Determine grade based on entered marks
    if (marks < 40) {
        console.log("Grade is E");
    }
    else if (marks >= 40 && marks <= 49) {
        console.log("Grade is D")
    }
    else if (marks >= 50 && marks <= 59) {
        console.log("Grade is C")
    }
    else if (marks >= 60 && marks <= 79) {
        console.log("Grade is B")
    }
    else if (marks > 79 && marks < 100) {
        console.log("Grade is A")
    }
    else {
        console.log("Invalid Entry")
    }
    }