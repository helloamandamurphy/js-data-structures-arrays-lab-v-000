// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  newDrivers = [name, ...drivers]
  return newDrivers
}

function removeDriver(name) {
  newDrivers = [name, ...drivers]
  return newDrivers
}

function prependDriver(name) {
  newDrivers = [name, ...drivers]
  return newDrivers
}