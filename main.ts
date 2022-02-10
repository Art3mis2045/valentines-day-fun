scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("HAVE AN AWESOME DAY!!😍")
    game.over(true, effects.hearts)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let PinkDoggo = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(PinkDoggo)
scene.cameraFollowSprite(PinkDoggo)
game.splash("HAPPY VALENTINES DAY!!!")
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333d133333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333dd33333333333333333333d1133333333333333333333333333333333333333333333333333333333333333333333313333333333
    333333333333333333333333333333333333333333333333333333111133333333333333333333d333333333333333333333333333333333333333333333333333333333333333333333113333333333
    33333333333333333333333333333333333333333333333333333111d1131111333333333993333333333333333333333333333333333333333333333333333333333333333333333333113333333333
    333333333d133333333333333333333333333333333333333111d11bb11111d1133339d99993333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333d111d1d33333333333333333333333333333333311d111dbdd111bb1133339999993333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333331111111d333333333333333333333333333333311dbb1111111111bd111339999933333333333333333333333333333d1113111d333333333333333333333333333333333333333333333333
    333333331111111d333333333333333333333333333333311bb111111111111d1111d9999933333333333333333333333333333111111111333333333333333333333333333333333333333333333333
    33333333d1111113333333333333333333333333333333311d11111111111111dbb199999333333333333333333333333333333111111111333333333333333333333333333333333333333333333333
    33333333311111333333333333333333333333333333333111111111111111111db999399333333333333333333333333333333111111111333333333333333333333333333333333333333333333333
    33333333311113333333333333333333333333333333311111111111111111111d9913393333333333333333333333333333333311111113333333333333333333333333333333333333333333333333
    333333333311d333333333333333333333311113d133d1111111111111111111999113333333333333333333333333333333333331111113333333333333333333333333333333333333333333333333
    3333333333dd3333333333333333333333d11111111111b11111111111111119991111333333333333333333333333333333333333111133333333333333333333333333333333333333333333333333
    3333333333333333333333333333333d1111bbd11b1111b11111111111111d99911111133333333333333333333333333333333333311333333333333333333333333333333333333333333333333333
    333333333333333333333333333333111111dd11dbbd11d111111111111199911111bd1d3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333311bbd11111111bb11111111111911999111111bb113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333d1bbd1111111111d11111111111999991111111bd113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333d1dd111111111111dd111111111999d11111111b1133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333d1111111111111111111111111111d9911111111111d33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333331111111111111111111111111111119991111111111d33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333d1bbb1111111111111111111111111119d1111111db1133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333311bb1111111111111111111111111111111111111bbb1d3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333d11b1111111111111111111111111111111111111bb11d3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333331111111111111d11111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333331111111111111199111111111111111111111111111d333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333d1bb11111111111d991111111111111111111111db11d333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333311bb11111111111d99d111111111111111111111bbb11333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333331db11111111199999911111111111111111111dbbb1133333333333333333333ddd3333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333311d11111119999d1d911111111111111111111111113333333333333333333311111333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333311111119999d111111111111111111111111d111133333333333333d1111111bbd11111d3333333333333333333333333333333333333d13333333333333333333333
    33333333333333333333333333331111d999111111111111111111111111111bb11d3333333333333d11ddd11dbbbd11d111333333333333333333333333333333333333dd3333333333333333333333
    333333333333333333333333333311d999d1111111111111111111111111111bbb11333333333333311bbbbb12222b11bbd1d33333333333333333333333333333333333111333333333333333333333
    33333333333333333333333333331999911111111111111111111111111111dbd113333333333333d11bb222222222222bbd1d33333333333333333333333333333333333d3333333333333333333333
    333333333333333333333333d999999d1111111111111111111111111111111111d33333333333111113222222222222222b1111d3333333333333333333333333333333333333333333333333333333
    33333333333333333333339999999d11111111111111111111111111111111d1133333333333311dbd32222222222222222211d113333333333333333333333333333333333333333333333333333333
    333333333333333333333399b999d331dd1111111111111111111111111111bb11333333333331dbb22222222222222222222bbb113333333d11d3333333333333333333333333333333333333333333
    333333333333333333333333999933311bbd11111111111111111111111111bd113333333333d1bb2222222222222222222222bbd133333311111d33d11d333333333333333333333333333333333333
    333333333333333333333333999933311bbbd1d1111111111111111111111d1113333333333331d22222222222222222222222bbd1d11d311dbb11d11111333333333333333333333333333333333333
    3333333333333d13333333339399333d111111bbbd1bbbd1d111111111111111333333333333d11222222222222222222222222bd1111111dbbbbd11bbb1d33333333333333333333333333333333333
    333333333333d11333333333339d3333d111111bd11bbb11dbbd111111111b11333333393333112222222222222222222222222b111bbddd222222bbbbb1d33333333333333333333333333333333333
    333333333333d1333333333333333333333331111111d1111bb111b11111bb113333333993311b2222222222222222222222222b11bbb222222222222bd111d333333333333333333333333333333333
    33333333333333333333333333333333333333d1131111dd1111111bbbd1b11d3333333993311b2222222222222222222222222211b222222222222222e1111333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333dd331111dd11113333339999931db222222222222222222222222221d222222222222222222bb1d33333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333d111111d33333333999991db22222222222222222222222222222222222222222222222b1133333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333999999999b2222222222222222222222222222222222222222222222231d33333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333999d33999d222222222222222222222222222222222222222222222231dd3333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333331d999b2222222222222222222222222222222222222222222221111333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333d1dbb999222222299222222222222222222222222222222222222bd1d33333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333d1bb229999b2222b9b22222222222222222222222222222222222bb1133333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333311b222299999b2b9b222222222222222222222222222222222222b1133333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333d11d22222b999999b222222222222222222222222222222222222d1d33333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333d1122222222b999d22222222222222222222222222222222222b11333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333311b222222222229922222222222222222222222222222222222b1d333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333311b222222222229922222222222222222222222222222222222b11333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333311bb22222222229d22222222222222222222222222222222222bd1333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333d11d22222222222222222222222222222222992222222222222bd1333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333d111322222222222222222222222222222299222222222222bb11333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333d1b2222222222222222222222222222229b222222222222b11d333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333311b22222222222222222222222222222b9992222222222d11d3333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333311b22222222222222222222222222222d999992222222311d33333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333311bb2222222222222222222222222222b922999b22222b1d333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333d1db222222222222222222222222222229b22b999b22bb1d333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333311db2222222222222222222222222222b22222b9992bd1d3333333333333333dd333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333331112222222222222222222222222222222222229999113333399333333333111133333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333d1d2222222222222222222222222222222222223199993333999333333d1d111133333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333d1bb2222222222222222222222222222222222bd1dd99993d999933331111111133333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333d1bb22222222222222222222222222222222bbb1133339999999933331111111133333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333331dbb22222222222222222222222222222111111d33333999999933331111111d33333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333d11d22222222222222222222222222bbd11111d333333399999933333111111333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333d1112222222222222222222222d1ddd11333333333339999999d3333333111333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333d1122222222222222222222bb111111333333333339999999933333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333311b222222222222222223dbb1133333333333333339999999d33333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333d133333333331dbb222222222222222111111d33333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333311133333333331dbb2222222222222bb11ddd3333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333d1d333333333311bbb22222222231dd1133333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333311db22222222b11111d33333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333111322222bb113333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333d1322211111d3333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333331dbbd1d1d333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311dd1d333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333111d3333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333311d3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333331333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333311333333
    33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333d1333333
    3333333333333333333333333333333333333333333311333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333311333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
tiles.setTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.placeOnTile(PinkDoggo, value)
    tiles.setTileAt(value, assets.tile`myTile`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . 1 1 . . . . . 
        . . . 1 3 3 1 . 1 3 3 1 . . . . 
        . . 1 3 3 3 3 1 3 3 3 3 1 . . . 
        . 1 3 3 3 3 3 3 3 3 3 3 3 1 . . 
        . 1 3 3 3 3 3 3 3 3 3 3 3 1 . . 
        . . 1 3 3 3 3 3 3 3 3 3 1 . . . 
        . . . 1 3 3 3 3 3 3 3 1 . . . . 
        . . . . 1 3 3 3 3 3 1 . . . . . 
        . . . . . 1 3 3 3 1 . . . . . . 
        . . . . . . 1 3 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`myTile`)
}
