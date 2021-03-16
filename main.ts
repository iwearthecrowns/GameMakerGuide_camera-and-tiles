scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3 
    3 1 3 3 1 3 3 1 3 1 1 3 3 3 1 3 
    3 1 3 3 1 3 3 1 3 3 1 3 3 3 1 3 
    3 1 3 3 1 1 1 3 3 3 1 3 3 3 1 3 
    3 1 3 3 1 3 3 3 3 3 1 3 3 3 1 3 
    3 1 3 3 1 3 3 3 3 1 1 1 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`tile3`)
