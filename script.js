let student = {
  name:"gurpreet",
  // age:"23",
  // height:"5,7",
  // weight:"68",
  getKeys() {
    let arr =[]
    for(let key in student)
    arr.push(key)
    return arr
  }
};
student.getKeys();