// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (drivers, letter) => {
    return drivers.filter(driver => driver.startsWith(letter))
  }

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
}