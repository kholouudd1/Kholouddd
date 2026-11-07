// =====================================
// 1. Student Class
// =====================================

class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average using reduce()
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate Student Grade
    calculateGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Calculate Final Result
    calculateResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// =====================================
// 2. Create Students Objects
// =====================================

let studentsList = [
    new Student(101, "Ahmed", [45, 40, 50], 80),
    new Student(102, "Mona", [50, 45, 49], 90),
    new Student(103, "Ali", [90, 85, 95], 95),
    new Student(104, "Sara", [70, 65, 75], 85)
];


// =====================================
// 3. Academic Report
// =====================================

console.log("===== Students Academic Report =====");

studentsList.forEach(student => {
    console.log("----------------------------");
    console.log("Student Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.calculateGrade());
    console.log("Final Result:", student.calculateResult());
});


// =====================================
// 4. Mercy Committee (Filter)
// =====================================

let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();

    return average >= 40 && average <= 49;
});


// =====================================
// 5. Add 5 Mercy Marks (Map)
// =====================================

let mercyStudents = strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});


// =====================================
// 6. Calculate New Averages (Reduce)
// =====================================

let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);


// =====================================
// 7. Calculate Mercy Average
// =====================================

let mercyAverage = 0;

if (mercyStudents.length > 0) {
    mercyAverage = totalNewAverages / mercyStudents.length;
}


// =====================================
// 8. Display Mercy Committee Results
// =====================================

console.log("===== Mercy Committee Students =====");

console.log(mercyStudents);

console.log("Total New Averages:", totalNewAverages);

console.log("Average After Mercy Marks:", mercyAverage);