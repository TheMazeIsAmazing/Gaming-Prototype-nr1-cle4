//import pixi
import * as PIXI from 'pixi.js'

//import classes
import { movingObject } from "./movingObject"

export class Ricky extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        //give desired items to the movingObject class
        super(x, y, texture, game)
        this.anchor.set(0.5);
    }

    update(delta: number) {
        //this code makes Ricky rotate 10 times
        if (this.angle < 3600) {
            this.angle +=  delta
        }
    }

}
