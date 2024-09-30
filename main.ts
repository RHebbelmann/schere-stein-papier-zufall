let Zufallszahl = 0
input.onGesture(Gesture.Shake, function () {
    Zufallszahl = randint(1, 3)
    if (Zufallszahl == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufallszahl == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
