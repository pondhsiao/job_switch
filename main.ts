input.onGesture(Gesture.Shake, function () {
    String2 = 0
})
let String2 = 0
String2 = 1
basic.forever(function () {
    if (String2) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showString("Hello!")
        basic.showNumber(0)
        pins.servoSetPulse(AnalogPin.P14, 1500)
        basic.showNumber(1)
        pins.servoSetPulse(AnalogPin.P16, 1000)
        basic.showNumber(2)
        pins.servoSetPulse(AnalogPin.P12, 500)
        basic.showNumber(3)
        pins.servoSetPulse(AnalogPin.P13, 1500)
        basic.showNumber(4)
        String2 = 1
    }
})
