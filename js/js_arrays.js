//javascript document to demonstrate JS loops ,single and  multi-dimensional arrays , their methods and properties 

//looping variable
let n, a;

let arrayContent = "";

let studentNames = new Array ("Justin","Alexandrer", "pascal","Zakaria", "mathew");



for (n = 0; n < studentNames.length; n++)
    arrayContent += `student ${n + 1}. ${studentNames [n]} <br/> `

arrayContent += `<p> the original number of students in the class is:
${studentNames.lenght}</p>`;

//admit new students to the class 
studentNames.push("george","youraselem","levi","kevin");


arrayContent += `<p> the names of the new students in class are:</p>`

for (; n < studentNames.length;n++){
     arrayContent += `student ${n + 1}. ${studentNames [n]} <br/> `
}
arrayContent += `<p>The names of all the students in class before sorting are :</p>`
for(let name in studentNames){
    arrayContent += `student ${parseInt(name) + 1}:
    ${studentNames[name]} <br/>`;}

    //sort the studentNames in lexigraphical order
    studentNames.sort();
    //Display the sorted names of the students in class
    arrayContent += `<p> The names of all the students in class after sortin are: </p>`;

    //TO DO: code to display the sorted names


    //sort the naems in reverse order
    studentNames.reverse();
    arrayContent += `<p>The names of the all the students inclass in reverse are:</p>`;
    for(let name in studentNames)
        arrayContent += `student ${parseInt(name) + 1}: ${studentNames[name]} <br/>`;


    //Two dimensional array 
    //heading for the staff section
    arrayContent +=  `<h3 class='section-heading'>
    ADSE2509 staff salary Report</h3>`;

    //Decrale and initialise a 2-D array to hold staff salary details
    let studSalary = new arrayContent(8);
    studSalary[0] = ["james","001", 30000,10000,50000];
    studSalary[1] = ["mercy","002",720000,150000];
    studSalary[2] = new Array("mohemad","003",50000,40000)
    studSalary[3] =["devid","004",40000,5000, 20000] 
    
    //ad the staff details to a table
    arrayContent += `<table border="2px" class="data-table">`;
    arrayContent += `<tr><th></th></tr>`;
    arrayContent += '</table>';

//display the contents of the arrayContent variable

