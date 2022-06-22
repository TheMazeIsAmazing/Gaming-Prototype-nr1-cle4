//import pixi
import * as PIXI from 'pixi.js'

//import classes
import { movingObject } from "./movingObject"

export class Fish extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        //give desired items to the movingObject class
        super(x, y, texture, game)
    }

    update(delta: number, height: number, width: number ) {
        //checks if the bubble has left the screen horizontally. If that's the case place it at the right
        if (this.x < -200) {
            this.x = width + (Math.random() * width)
        }
        
        //checks if the bubble has left the screen vertically. If that's the case place it at at a random y interval
        if (this.y < -100) {
            this.y = height + (Math.random() * height)
        }
        if (this.y > height + 100) {
            this.y = height - (Math.random() * height)
        }
                
        //this code makes the fish move both sideways and up and down
        this.x -= delta * 1.2
        this.y += Math.sin(this.x * 0.02) * delta
    }
}
