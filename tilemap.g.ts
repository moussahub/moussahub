// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202030000000400000000000000000000000000000005000000000000000000000000000000050000000000000000000000000000000500000000070800000407080000000001020202020006000005000600040800000000000000060000050006000506000004070708000600000102030001030000010202030006000000000000000000000000000000060000000000000000000000040707000600040707070707070800000500000006000102020202020203000005000002030000000000000000000000050000000000000000000000000000000500000707070707070708000000000005000000000000000000060000000000050000`, img`
2 2 2 2 2 2 2 2 . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
2 2 . . 2 2 2 . . . . 2 2 2 2 2 
. 2 . . 2 . 2 . 2 2 . . . . . . 
. 2 . . 2 . 2 . 2 2 . . 2 2 2 2 
. 2 . . 2 2 2 . 2 2 . . 2 2 2 2 
. 2 . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . 2 2 2 
. 2 . 2 2 2 2 2 2 2 2 . . 2 . . 
. 2 . 2 2 2 2 2 2 2 2 . . 2 . . 
2 2 . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
2 2 2 2 2 2 2 2 . . . . . 2 . . 
. . . . . . . 2 . . . . . 2 . . 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
