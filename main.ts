input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 43)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Kitronik_Move_Motor.stop()
})
let sensordiff = 0
let leftsensor = 0
let rightsensor = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    rightsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    leftsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    sensordiff = Math.abs(leftsensor) - Math.abs(rightsensor)
    if (true) {
        if (true) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
