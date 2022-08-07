input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    String2 = 0
})
let String2 = 0
String2 = 1
basic.forever(function () {
    if (String2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showString("Hello!")
        String2 = 1
    }
})
