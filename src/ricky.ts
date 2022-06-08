import * as PIXI from 'pixi.js'
import { movingObject } from "./movingObject"

export class Ricky extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        super(x, y, texture, game)
        this.anchor.set(0.5);
    }

    update(delta: number) {
        if (this.angle < 3600) {
            this.angle +=  delta
        }
    }

}