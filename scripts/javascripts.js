//you will need to create an application that records employees along with their salary. We also want to add the salaries up so we know how much we’re spending each month.
//First have an input form that collects: The Employee's First and Last name The Employee's ID Number The Employee's Job Title The Employee's Salary (Yearly)
//The form should have a submit button that clears out the form and your logic should store that information.
// Then, that information should be appended to the DOM so the user of the application can see the information they just entered.
//Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.
//console.log("wassup?");
var newEmployeeList = [];
var totalSalary = 0;
var monthlySalary = 0;//var totalSalary = 0;
var tempSalary = 0;

var createNewEmployee = function(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var companyID = document.getElementById('companyID').value;
  var jobTitle = document.getElementById('jobTitle').value;
  var empSalary = parseInt(document.getElementById('empSalary').value);
  document.getElementById("myForm").reset();
  //var empName = document.getElementById('firstName ' + 'lastName');

  var newEmployee = {
    'firstName' : firstName,
    'lastName' : lastName,
    'companyID' : companyID,
    'jobTitle' : jobTitle,
    'empSalary': empSalary
  };
tempSalary = empSalary;
console.log(tempSalary);

newEmployeeList.push(newEmployee);
console.log(newEmployeeList.length);
console.log(newEmployeeList);
listEmp();
upDateSalary();
};

//var empArray = [];
//var totalSalary = parseInt(empSalary);
var upDateSalary = function (){
  //var numSalary = empSalary;
  //console.log(tempSalary);
  totalSalary = tempSalary + totalSalary;
  monthlySalary = (totalSalary / 12);
console.log(monthlySalary);
};

//Displays to the DOM
var listEmp = function(){
  document.getElementById("output").innerHTML = "";
  for( var i = 0; i< newEmployeeList.length; i++ ){
    var empDisplay ="First Name: " + newEmployeeList[i].firstName + ";  Last Name: " + newEmployeeList[i].lastName + ";  CompanyID: " + newEmployeeList[i].companyID + ";  Job Title: " + newEmployeeList[i].jobTitle + "; Employee Salary: " + newEmployeeList[i].empSalary;
    document.getElementById("output").innerHTML += '<p>' + empDisplay + '</p>';
  }
};

//for( var i = 0; i <= newEmployeeList.length; i++ ){

//}
