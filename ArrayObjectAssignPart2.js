function findOddEven()
{
    var orgArray = [1,2,3,4,5,6,7,8,9,10,12,14]
        
    var oddArray=[];
    var evenArray=[];
    var flag = 0;
    orgArray.reduce(findOddNumber);
    document.getElementById("OddNumbers").innerHTML = "Odd " + oddArray + "<br/> Even " + evenArray;
    function findOddNumber(value1, value2)
    {
        if (value1 %2 != 0 && flag==0)  
        {
            oddArray.push(value1);
            flag=1;
        } 
        if (value1 %2 == 0 && flag==0) 
         { 

            evenArray.push(value1);
            flag =1;
         }

         if (value2 %2 != 0)  
         {
             oddArray.push(value2);
           
         } else { 
 
             evenArray.push(value2);
           
          }
    }

}

function SortArray()
{
    var Fruits = ["Apple","Grapes", "Mango","Banana","Pineapple","goava","apple"];
    document.getElementById("SortFruits").innerHTML = Fruits.sort();

}

function AscArray()
{
    var Numbers = [1,2,4,5,11,12,22,23,31];
    document.getElementById("AscOrder").innerHTML = "Asending :" +  Numbers.sort(function(a,b) {return a-b }) + "<br/> Descending :" + Numbers.sort(function(a,b) {return b-a });


}

function evenUsingFilter()
{
    var orgArray = [1,2,4,5,11,12,22,23,31];
    document.getElementById("Even").innerHTML = orgArray.filter(FindEven);

    function FindEven(value)
    {
        if (value % 2 == 0) {
            return value;
        }
    }
}

function GreaterThan50()
{
    var orgArray = [1,2,4,5,11,12,22,23,31];
    document.getElementById("GreaterValue").innerHTML = orgArray.includes(50);

}

function TodaysDate()
{
   // document.getElementById("DateToday").innerHTML = new Date(year,month,day);
   var TodayDate = new Date()
   var dd = TodayDate.getDate()
   var mm = TodayDate.getMonth() + 1
   var yyyy = TodayDate.getFullYear()

    if (dd < 10)
    {
        dd = "0" + dd;
    } 

    if (mm < 10)
    {
        mm = "0" + mm;
    }

    TodayDate = mm + "/" + dd + "/" + yyyy; 
    document.getElementById("DateToday").innerHTML = TodayDate;

}

function findMax()
{

    document.getElementById("MaxValues").innerHTML = Math.max(1,2,4,5,11,12,22,23,31);
}

function findMin()
{

    document.getElementById("MinValues").innerHTML = Math.min(1,2,4,5,11,12,22,23,31);
}

function getRandom()
{
    document.getElementById("RandomValue").innerHTML = getRndInteger(0,9);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}