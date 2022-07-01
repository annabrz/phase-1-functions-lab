// Code your solution in this file!
function distanceFromHqInBlocks(someValue){

let blocks= Math.abs (someValue-42)
return blocks
}


function distanceFromHqInFeet(someValue){

    let feet = distanceFromHqInBlocks(someValue) * 264
return Math.abs(feet)
}

function distanceTravelledInFeet(start,destination){
   let feet= (Math.abs(destination-start)) * 264
   if (feet>destination){
       return feet
   }
}

function calculatesFarePrice(start, destination){
   let feet = (Math.abs(destination-start)) * 264
   let fare
   if (feet<=400){
     fare = 0
   }
   else if (feet>400 && feet<2000){
     fare = .02 * (feet-400)
   }
   else if (feet>2000 && feet<2500){
       fare = 25

   }
   else if(feet>2500){
       fare = "cannot travel that far"
   }
return fare
}
