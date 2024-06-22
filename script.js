let student = {
  name:"gurpreet",
  age:"23",
  height:"5,7",
  weight:"68"
  
};

function getKeys() {
    let arr =[]
    for(let key in student){
    arr.push(key)
    
}
console.log(arr)
  
}

getKeys(student)