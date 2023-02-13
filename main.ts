input.onButtonPressed(Button.A, function () {
    drive = 1
})
input.onButtonPressed(Button.B, function () {
    drive = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let sensordiff = 0
let leftsensor = 0
let rightsensor = 0
let drive = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    rightsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    leftsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    sensordiff = Math.abs(leftsensor - rightsensor)
    if (sensordiff > 10) {
        if (rightsensor > leftsensor) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
            if (1 == drive) {
                Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
            }
        } else {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
            if (1 == drive) {
                Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
                Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 30)
            }
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
        if (1 == drive) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
        } else {
            Kitronik_Move_Motor.stop()
        }
    }
})
