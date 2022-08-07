input.onButtonPressed(Button.A, function () {
    String2 = 0
})
input.onGesture(Gesture.Shake, function () {
	
})
let String2 = 0
String2 = 1
basic.forever(function () {
    if (String2) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showString("Hi!")
        pins.digitalWritePin(DigitalPin.P1, 1)
        String2 = 1
    }
})
