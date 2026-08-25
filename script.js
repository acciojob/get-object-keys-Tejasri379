const name = {
    name: "Tejasri"
    }
}
function getKeys(name){
    let array = []
for(let key in name){
    console.log(key)
    array.push(key)
}return array
}
console.log(getKeys(name))
//your JS code here. If required.
