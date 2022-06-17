input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        velocidade += -25
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pausa == 0) {
        pausa = 1
    } else {
        pausa = 0
    }
})
let pausa = 0
let sprite: game.LedSprite = null
let on = 1
let velocidade = 500
game.setLife(4)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (on == 1) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(velocidade)
    }
})
basic.forever(function () {
    if (pausa == 0) {
        game.pause()
        basic.clearScreen()
    } else {
        game.resume()
    }
})
