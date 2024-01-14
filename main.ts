radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.clearScreen()
        led.plot(2, 2)
        stop()
    }
    if (receivedNumber == 1) {
        basic.clearScreen()
        led.plot(0, 2)
        Vooruit()
    }
    if (receivedNumber == 2) {
        basic.clearScreen()
        led.plot(4, 2)
        Achteruit()
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
        led.plot(2, 0)
    }
    if (receivedNumber == 4) {
        basic.clearScreen()
        led.plot(2, 4)
    }
})
function stop () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
}
function Vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, Speed)
}
function Achteruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, Speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, Speed)
}
let Speed = 0
radio.setGroup(1)
Speed = 300
