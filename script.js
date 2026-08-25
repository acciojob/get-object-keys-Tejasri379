const user = {
    name: "Tejasri",
    role: "student",
    phoneNumber: 9550577277,
    summary : function(){
        return "Tejasri is a student at AccioJob"
    }
}
function getKeys(obj){
    let array = []
for(let key in obj){
    console.log(key)
    array.push(key)
}return array
}
console.log(getKeys(user))
//your JS code here. If required.
