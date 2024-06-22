let student = {
  name:"gurpreet",
  age:"23",
  city:"5,7",
  getKeys() {
    let arr =[]
    for(let key in student)
    arr.push(key)
    return arr
  }
};
student.getKeys();