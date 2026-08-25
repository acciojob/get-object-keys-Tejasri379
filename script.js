const student = {
    name: "Tejasri"
    }
}
function getKeys(obj){
    let array = []
for(let key in student){
    console.log(key)
    array.push(key)
}return array
}
console.log(getKeys(student))
//your JS code here. If required.
