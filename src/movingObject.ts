//import pixi
import * as PIXI from 'pixi.js'

export class movingObject extends PIXI.Sprite {
    private speed:number

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        //give texture to PIXI.Sprite
        super(texture)
        
        //set the x, y and speedvalues
        this.x = x
        this.y = y
        this.speed = (Math.random() * 1) + 0.5
        
        //add this object to the game
        game.stage.addChild(this)
    }
    
    //this function gets ans returns speed
    getSpeed () {
        return this.speed;
    }

}
