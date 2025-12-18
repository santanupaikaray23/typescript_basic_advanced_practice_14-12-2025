//Typescript supports 3 data modifiers, public, private and protected

// public
// ---------
// By default, all the members of a class in typescript are public.
// All members can be accessed from anywhere

class Student {
    public studentId: string;
    studentName: string

    getStudentDetails(){
        return this.studentId+ ' : ' +this.studentName;
    }
}

let student = new Student("STU123", "Join Galt");
console.log(student)
student.studentId="STU123"
student.studentName="Santanu Paikaray"
// student.getStudentDetails()
console.log(student.studentId)
console.log(student.studentName)
console.log(student.getStudentDetails())