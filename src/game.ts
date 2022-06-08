import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import rickyImage from ".
/images/ricky.png"
import { Fish } from './fish'
import { Bubble } from './bubble'
import { Ricky } from './ricky'


import backgroundTrack from "url:./music/backgroundaudio.mp3"  

window.addEventListener('resize', resizeHandler)

function resizeHandler() {
    height = window.innerHeight
    width = window.innerWidth 
    game.pixi.view.height = height
    game.pixi.view.width = height
}

let height = window.innerHeight
let width = window.innerWidth
let howManyFish = 1
let howManyBubbles = 1

export class Game {

    pixi: PIXI.Application
    fishes: Fish[] = [];
    bubbles: Bubble[] = [];
    ricky: Ricky[] = [];

    constructor() {
        this.pixi = new PIXI.Application({ resizeTo:window })
        document.body.appendChild(this.pixi.view)
        let viewWidth = (this.pixi.renderer.width / this.pixi.renderer.resolution);

        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("waterTexture", waterImage)
            .add('bubbleTexture', bubbleImage)
            .add('rickyTexture', rickyImage)
            .add("bgMusic", backgroundTrack)
        this.pixi.loader.load(() => this.doneLoading(viewWidth))
        this.pixi.ticker.add((delta) => this.update())
    }

    doneLoading(viewWidth:number) {
        let bgMusic = this.pixi.loader.resources["bgMusic"].data!
        bgMusic.play()

        let water = new PIXI.Sprite(this.pixi.loader.resources["waterTexture"].texture!)
        water.scale.x = 512 / viewWidth;
        water.scale.y = water.scale.x;
        this.pixi.stage.addChild(water)
        for (let i = 1; i <= howManyFish; i++) {
            this.fishes.push(new Fish((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["fishTexture"].texture!, game.pixi))
        }
        for (let i = 1; i <= howManyBubbles; i++) {
            this.bubbles.push(new Bubble((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["bubbleTexture"].texture!, game.pixi))
        }
        this.ricky.push(new Ricky((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["rickyTexture"].texture!, game.pixi))
    }

    update() {
        for (let fishje of this.fishes) {
            fishje.update(fishje.getSpeed(), height, width)
        }
        for (let bubbeltje of this.bubbles) {
            bubbeltje.update(bubbeltje.getSpeed(), height, width)
        }
        for (let rickytje of this.ricky) {
            rickytje.update(rickytje.getSpeed())
        }
    }
}

let game = new Game()