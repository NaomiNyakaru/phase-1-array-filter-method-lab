// Code your solution here

function findMatching(drivers,name){
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}
console.log(findMatching());

function fuzzyMatch(drivers,name){
    return drivers.filter(drivers => drivers.toLowerCase()[0] === name.toLowerCase()[0])
}
console.log(fuzzyMatch());

function matchName(drivers,name){
    return drivers.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase());

}
console.log(matchName());