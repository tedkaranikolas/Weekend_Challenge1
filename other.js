var empArray = [];
var totalSalary = 0;

// function addEmp takes input from form fields and  creates the newEmp object
function addEmp() {
   var firstName =document.getElementById("firstName").value;
   var lastName =document.getElementById("lastName").value;
   var empId =document.getElementById("empId").value;
   var jobTitle =document.getElementById('jobTitle').value;
   var annSalary =document.getElementById('annSalary').value;
console.log("I'm in the addEmp" + firstName + " " + lastName + " " + empId + " " + jobTitle + " " + annSalary + ": ");
//make new employee object
   var employee = {
     'firstName':firstName,
     'lastName': lastName,
     'empId': empId,
     'jobTitle': jobTitle,
     'annSalary':annSalary

};
empArray.push(employee);
console.log( "hey" + employee);
addEmp();


}
function addItUp(totalSalary){
   var salary = addEmp.annSalary;
   totalSalary += salary;
   return totalSalary;
 }

addItUp();

console.log(totalSalary);

console.log("I'm in the newEmp array" + firstName + lastName + empId + jobTitle + annSalary);


var element = document.getElementById("salaryTotal");
element.innerHTML = "Total: " + totalSalary;

//for (var i = 0; i < empArray.length; i++) {
   //console.log("Hi Mom" + addEmp(empArray)[i]);
