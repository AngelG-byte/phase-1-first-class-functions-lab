// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (num1){
    return function  (num2){
        return num1 * num2
    }
}
   
  function fareDoubler(num){
    return num * 2
  }
  function fareTripler(a){
    return a * 3
  }
  function selectDifferentDrivers(drivers,a){
    return a(drivers)
}


