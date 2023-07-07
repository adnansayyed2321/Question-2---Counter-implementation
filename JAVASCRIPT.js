function calculateCurrentRegistraion() {
    let statrOfRegistrationTime = new Date("08/23/2022 12:00:00 AM");
    let currentRegistrationTime = new Date()

    let differance = currentRegistrationTime.getTime() - statrOfRegistrationTime.getTime()
    let differenceInSec = differance / 1000
    let finalValue = 100 + Math.floor(differenceInSec * 6)

    return finalValue
}

function updateRegistraion() {
    let registraionCount = document.getElementById("registraion");
    registraionCount.textContent = calculateCurrentRegistraion();
}

updateRegistraion()

setInterval(updateRegistraion, 1000);