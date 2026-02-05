/* //javaScript document to demonstrate JS custom/user-defined objects and 
//built-in JS objects 
//Helper array to build the HTML content 


//create a Student object using object literal


const singleStudent = {

    surname: "Abraham",
    otherNames: "James Akhar",
    Age:25,
    gender: "male"
    course:"ADSE"
    fullname(){
        return '{this.surname} $ {this.otherNames}';
    }
};
//create a section heading and  add it to the contentParts array
contentParts.push('<h3 class="section-heading">"Student Details</h3>');
contentParts.push(
    <p>
    student's Name: ${singleStudent.fullname} <br/>
    student's Age: ${singleStudent.age} old.<br/>
    student's Gender: ${singleStudent.gender} <br/>
    student's Course: ${singleStudent.course} <br/>

    </p>
);

//employee object using object literal
const employee = {
    frstname: "Abdigail",
    lastname: "Mueni",
    gender: "female",
    phoneNumber: "078988949890",
    email: "a.muemi@edulink.ac.ke"
    age:25,
    salary:2570000,
    fullDetails(){
        return ` 
        Employee's Name: ${this.firsname}
        ${this.lastname}<br/> 
        Employee's Age: ${this.age} years old <br/> 
        Employee's Gender: ${this.gen} */
       // this is the jsobjects.js code    // JavaScript document to demonstrate JS custom/user-defined objects and built-in JS objects.
// Helper array to build the HTML content
const contentParts = [];
// KCreate a Student object using object literal syntax
const singleStudent = {
    surname: "Smith",
    otherNames: "John",
    age: 20,
    gender: "Male",
    courses: "ADSE",
    fullname() {
        return `${this.surname} ${this.otherNames}`;
    }
};
// Create a section heading and add it to the contentParts array
contentParts.push("<h3 class='section-heading'>Student Details</h3>");
contentParts.push(`
    <p>
        student`s Name: ${singleStudent.fullname()} <br/>
        student`s Age: ${singleStudent.age} <br/>
        student`s Gender: ${singleStudent.gender} <br/>
        student`s Course: ${singleStudent.courses} <br/>
    </p>
`);
//Employee object using object literal
const employee = {
    firstname: "Jane",
    lastname: "Doe",
    position: "Developer",
    gender: "Female",
    phoneNumber: "0789678543",
    email: "jane.doe@example.com",
    age: 28,
    salary: 60000,
    fullDetails() {
        return `Employees Names: ${this.firstname} ${this.lastname} <br/>
        Position: ${this.position} <br/>
        Gender: ${this.gender} <br/>
        Phone Number: ${this.phoneNumber} <br/>
        Email: ${this.email} <br/>
        Age: ${this.age} <br/>
        Salary: $${this.salary}`;
    }
};
// Create a section heading and add it to the contentParts array
contentParts.push("<h3 class='section-heading'>Employee Details</h3>");
contentParts.push(`<p>${employee.fullDetails()}</p>`);
// create a circle using the ES6 class syntax
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
// Declare and create(instantiate) 2 circle objects
const smallCircle = new Circle(7);
const largeCircle = new Circle(21);
// Add circle details to contentParts
contentParts.push("<h3 class='section-heading'>Circle Details</h3>");
contentParts.push(`<p>Circle 1 - Area: ${smallCircle.getArea()}, Circumference: ${smallCircle.getCircumference()}</p>`);
contentParts.push(`<p>Circle 2 - Area: ${largeCircle.getArea()}, Circumference: ${largeCircle.getCircumference()}</p>`);
// Render all the content to the DOM
document.getElementById("object-content").innerHTML = contentParts.join("");
// Date and time using built-in Date object and modern formatting
const now = new Date();
 
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currDay = dayNames[now.getDay()];
 
const formattedDate = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(now);
 
const currHour = String(now.getHours()).padStart(2, '0');
const currMin = String(now.getMinutes()).padStart(2, '0');
const currSec = String(now.getSeconds()).padStart(2, '0');
 
const formattedTime = `${currHour}:${currMin}:${currSec}`;
 
contentParts.push(`
  <p>Today is ${formattedDate} and the current time is ${formattedTime}.</p>
`);