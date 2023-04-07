
// Write a function that accepts an array of strings and 
// console.logs each element using a for loop

function stringArrays(studentArray){
 for(let k=0; k<studentArray.length;k++){
    console.log(studentArray[k]);
}
}
let studentArray=["Maria","Mary","Becky","Miriam","Maurice"]
 stringArrays(studentArray)


//  Write a function that accepts an array of numbers and
//  uses the forEach() method to console.log each number multiplied by 2.

 let num=[5,3,8,6,2,8]
  num.forEach(
  function(value,index){
  num[index]=value *2;
 })
 console.log(num);

// Write a function that takes in an array of numbers and consoles the 
// first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values
function arraysNumbers(arrays){
let empty=[]
for(let r=0;r<length;r++){
    if(r<4){
        empty.push(arrayNumbers[r]*8);
    }
    else if(r>=arraysNumbers.length-2){
        empty.push(arrays[r]+5)
    }
    console.log(empty)
}

}
let arrayNumbers=[21,23,12,16,10,15]


// Write a function that takes in the following array and
//  use a while loop to iterate and break when the item is equal to the fourth index
 let y=[5,6,4,7,8,9]
  function number(y){
  let y=0;
      while(y<y.length){
        if(y===4){
          break;
          
        }
        y++;
    }
    
  }
  console.log(y);



// Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index
//  let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitsArray(fruits){
 for(let f=0;f<fruits.length;f++){
  if(f===2){
      continue;
  }
  console.log("item",fruits[f]);
}
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruitsArray(fruits)








