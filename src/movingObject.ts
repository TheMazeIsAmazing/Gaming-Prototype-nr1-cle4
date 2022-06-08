import * as PIXI from 'pixi.js'

export class movingObject extends PIXI.Sprite {
    private speed:number

    constructor(x: number, y: number, texture: PIXI.Texture, game : PIXI.Application) {
        super(texture)
        this.x = x
        this.y = y
        game.stage.addChild(this)
        this.speed = (Math.random() * 1) + 0.5
    }

    getSpeed () {
        return this.speed;
    }

}