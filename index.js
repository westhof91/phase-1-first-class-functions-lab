const drivers = ['charles', 'jake','paul', 'chris'];

const returnFirstTwoDrivers = function(x){
    return [x[0], x[1]]
}

const returnLastTwoDrivers = function(x){
    return [x[2], x[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mulitplyValue) {
    return function(value) {
        return mulitplyValue * value
    }

}

const fareDoubler = createFareMultiplier (2) 
    
const fareTripler = createFareMultiplier (3)

const selectDifferentDrivers = function (drivers, x) {
    return x(drivers)

}
    