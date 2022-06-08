import * as PIXI from 'pixi.js'
import { movingObject } from "./movingObject"

export class Bubble extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        super(x, y, texture, game)
        this.tint = Math.random() * 0xFFFFFF;
    }

    update(delta: number, height: number, width: number ) {
        if (this.y < -200) {
            this.y = height + (Math.random() * height)
        }
        if (this.x < -100) {
            this.x = width + (Math.random() * width)
        }
        if (this.x > width + 100) {
            this.x = width - (Math.random() * width)
        }
        this.y -= delta * 1.2
        this.x += Math.sin(this.y * 0.02) * delta
    }

}