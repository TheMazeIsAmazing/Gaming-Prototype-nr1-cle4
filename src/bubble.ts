//import pixi
import * as PIXI from 'pixi.js'

//import classes
import { movingObject } from "./movingObject"

export class Bubble extends movingObject {

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        //give desired items to the movingObject class
        super(x, y, texture, game)
        
        //change color tint of texture
        this.tint = Math.random() * 0xFFFFFF;
    }

    update(delta: number, height: number, width: number ) {
        //checks if the bubble has left the screen vertically. If that's the case place it at the bottom
        if (this.y < -200) {
            this.y = height + (Math.random() * height)
        }
        
        //checks if the bubble has left the screen horizontally. If that's the case place it at at a random x interval
        if (this.x < -100) {
            this.x = width + (Math.random() * width)
        }
        if (this.x > width + 100) {
            this.x = width - (Math.random() * width)
        }
        
        //this code makes the bubble move both upwards and side to side
        this.y -= delta * 1.2
        this.x += Math.sin(this.y * 0.02) * delta
    }

}
