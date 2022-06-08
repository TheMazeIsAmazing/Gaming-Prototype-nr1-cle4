import * as PIXI from 'pixi.js'
import { movingObject } from "./movingObject"

export class Fish extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        super(x, y, texture, game)
    }

    update(delta: number, height: number, width: number ) {
        if (this.x < -200) {
            this.x = width + (Math.random() * width)
        }
        if (this.y < -100) {
            this.y = height + (Math.random() * height)
        }
        if (this.y > height + 100) {
            this.y = height - (Math.random() * height)
        }
        this.x -= delta * 1.2
        this.y += Math.sin(this.x * 0.02) * delta
    }
}