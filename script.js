let student = {
  name:"gurpreet",
  getKeys(){
    let arr =[]
    for(let key in this){
      arr.push(key)
}
console.log(arr)
}
    
};

student.getKeys()
