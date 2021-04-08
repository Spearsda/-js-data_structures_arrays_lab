// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];


const destructivelyAppendDriver = function (name) {
    return drivers.push(name)
}

const destructivelyPrependDriver = function (name) {
    return drivers.unshift(name)
}


const destructivelyRemoveLastDriver = function (name) {
    return drivers.pop(name)
}

const destructivelyRemoveFirstDriver = function (name) {
    return drivers.shift(name)
}

const appendDriver = function (name) {
    return [...drivers, name]
}


const prependDriver = function (name) {
    return [name, ...drivers]
}


const  removeLastDriver = function () {
    const newDrivers = [...drivers];
    newDrivers.slice(-1);
    return newDrivers

}

const removeLastDriver =  function (name) {
    return drivers.slice(0, drivers.length - 1);
  }