var marks = [80, 77, 88, 95, 68];
var total = 0;
for (var i in marks) {
    total += marks[i];
}
var avg = total / marks.length;
console.log("Average is: " + avg);
var grade;
if (avg < 60) {
    grade = "F";
} else if (avg < 70) {
    grade = "D";
} else if (avg < 80) {
    grade = "C";
} else if (avg  < 90) {
    grade = "B";
} else if (avg < 100) {
    grade = "A";
}
console.log("Grade is: " + grade);