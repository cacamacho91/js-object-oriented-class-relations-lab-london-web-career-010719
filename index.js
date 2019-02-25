// initialize store with key of items and users that each point to an empty array
let store = {drivers: [], passengers: [], trips: []}

// Driver Class
let driverId = 0
class Driver {
    constructor(name){
        this.id = ++driverId
        this.name = name
        store.drivers.push(this) //adds new driver to store
    }
    trips(){
        return store.trips.filter(trip => trip.driverId === this.id)
    }
    passengers() {
        return store.passengers.filter(passenger => this.trips().some(trip => trip.passengerId === passenger.id))
    }
}

// Passenger Class
let passengerId = 0
class Passenger {
    constructor(name){
        this.id = ++passengerId
        this.name = name
        store.passengers.push(this)
    }
    trips() {
        return store.trips.filter(trip => trip.passengerId === this.id)
    }
    drivers(){
        return store.drivers.filter(driver => this.trips().some(trip => trip.driverId === driver.id))
    }
}

//Trip Class
let tripId = 0
class Trip {
    constructor(driver, passenger){
        this.id = ++tripId
        this.driverId = driver.id
        this.passengerId = passenger.id
        store.trips.push(this)
    }   
    //functions
    passenger() { 
        return store.passengers.find(passenger => passenger.id === this.passengerId)
    }
    driver() {
        return store.drivers.find(driver => driver.id === this.driverId)
    }
}