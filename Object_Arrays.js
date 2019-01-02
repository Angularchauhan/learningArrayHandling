function showObject()
{
    var Student =  {
        firstName : "Krishna",
        lastName : "Chauhan",
        Department : "Automation"

        //document.getElementById("showObject1").innerHTML =  "Full Name = " + this.firstName + "<br/> " + "Last Name = " + this.lastName + "<br/>" + "Department = " + this.Department;
        //"Full Name = " + Student.firstName + " " + "Last Name = " + Student.lastName + " " + "Department = " + Student.Department;


    }
    document.getElementById("showObject1").innerHTML =  "Full Name = " + Student.firstName + "<br/> " + "Last Name = " + Student.lastName + "<br/>" + "Department = " + Student.Department;
   
}

function calculateSalary()
{
    var Employee =  {
        employeeName : "Pooja",
        employeeID : 4934,
        employeeBasicSalary : 7000
       }
    var BasicSalary12 = (Employee.employeeBasicSalary * 12)/100
    var TDS = (Employee.employeeBasicSalary * 2)/100
    
    var TotalSalary = Employee.employeeBasicSalary + BasicSalary12  - TDS 
    document.getElementById("TotalSalary").innerHTML = TotalSalary
   
}

/* 3. Create Array, and how many ways we can create Array give an example. 
We can create an array with two ways. 1) Using array literal 2) Using "new" keyword
*/

//Using array literal
var studentNames = ["Krishna", "Pooja", "Abhijit","Ankush","Priti"];

//Using "new" keyword
var studentName = new Array("Krishna", "Pooja", "Abhijit","Ankush","Priti");


/*4. Create Array of object(Object should be id property ) and loop through Array and
find all ids. Use For Each loop */

function findingIdsInArray()
{
    //var employeeArray = [];
    
    var emp1 = {

        employeeName: "krishna",
        id: 456,
        salary: 7000
    };
    //employeeArray.push(emp1);

    var  emp2 = {

        employeeName: "krishna",
        id: 234
    };

    //employeeArray.push(emp2);
    var employeeArray = [emp1,emp2];

   employeeArray.forEach(FoundId);
 
  function FoundId(value,index,Array)
  {
    var Ids= [],i;
    i=0;
    Ids[i] = value.id;
    i++;
    var strval;
    strval = strval + value.id;
    //document.getElementById("FindingId").innerHTML = strval;
    //document.getElementById("FindingId").innerHTML = strval;
    console.log(Ids);
  }; 
};

function findingIdsInArrayMap()
{
    //var employeeArray = [];
    
    var emp1 = {

        employeeName: "krishna",
        id: 456,
        salary: 7000
    };
    //employeeArray.push(emp1);

    var  emp2 = {

        employeeName: "krishna",
        id: 234
    };

    //employeeArray.push(emp2);
    var employeeArray = [emp1,emp2];

   employeeArray.map(FoundId);
 
  function FoundId(value,index,Array)
  {
    var Ids= [],i;
    i=0;
    Ids[i] = value.id;
    i++;
    var strval;
    strval = strval + value.id;
    //document.getElementById("FindingId").innerHTML = strval;
    //document.getElementById("FindingId").innerHTML = strval;
    console.log(Ids);
  }; 
};



function FindElementInArray()
{

    var PrgLanguage = ["C#","Javascript","Angular","HTML"];
    var elementToFind = "Angular";
    var FoundElement = PrgLanguage.find(FoundString);
    console.log(FoundElement);
    document.getElementById("FoundElement").innerHTML = FoundElement;
    function FoundString(value,index,Array)
    {
        if (value === "Angular"){ return  value;};
    }; 

};

function addingElementToArray()
{
    var PrgLanguage1 = ["C#","Javascript","Angular","HTML"];
    var PrgLanguage2 = ["Typescript" ,"AmaZon Web Service","SAP"];
    PrgLanguage1.push(PrgLanguage2);
    document.getElementById("mergedArrays").innerHTML = PrgLanguage1;
    console.log(PrgLanguage1);
    
};

function removeElementToArray()
{
    var PrgLanguage1 = ["C#","Javascript","Angular","HTML"];
    PrgLanguage1.pop("HTML");
    document.getElementById("RemovedArray").innerHTML = PrgLanguage1;
    console.log(PrgLanguage1);
    
};

function removeElementToArraySplice()
{
    var PrgLanguage1 = ["C#","Javascript","Angular","HTML"];
    PrgLanguage1.splice(1,1);
    document.getElementById("RemovedArraySplice").innerHTML = PrgLanguage1;
    console.log(PrgLanguage1);
    
};

function getElementToArray()
{
    var PrgLanguage1 = ["C#","Javascript","Angular","HTML"];
    var n = PrgLanguage1.forEach(myFunction);
    function myFunction(value,index) {
        if(value==="Javascript"){ console.log(value)}
        if(value==="Angular"){ console.log(value)}
      }
    
    console.log(PrgLanguage1);
    
};


