input.onButtonPressed(Button.A, function () {
    basic.showNumber(leftsensor)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(rightsensor)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(sensordiff)
})
let sensordiff = 0
let rightsensor = 0
let leftsensor = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
basic.forever(function () {
    rightsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    leftsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    sensordiff = Math.abs(leftsensor - rightsensor)
    if (sensordiff > 10) {
        if (rightsensor < leftsensor) {
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
