//import pixi
import * as PIXI from 'pixi.js'

//import images & music
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import rickyImage from "./images/ricky.png"
import backgroundTrack from "url:./music/backgroundaudio.mp3" 

//import classes
import { Fish } from './fish'
import { Bubble } from './bubble'
import { Ricky } from './ricky'
 
//if window resizes, do function resizeHandler
window.addEventListener('resize', resizeHandler)

//this code changes the height and width to the current values
function resizeHandler() {
    height = window.innerHeight
    width = window.innerWidth 
    game.pixi.view.height = height
    game.pixi.view.width = height
}

//global variables
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

        //load all textures
        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("waterTexture", waterImage)
            .add('bubbleTexture', bubbleImage)
            .add('rickyTexture', rickyImage)
            .add("bgMusic", backgroundTrack)
        
        // after loader is done, load doneLoading function
        this.pixi.loader.load(() => this.doneLoading(viewWidth))
        
        // Add ticker to pixi and load update function
        this.pixi.ticker.add((delta) => this.update())
    }

    doneLoading(viewWidth:number) {
        //make sure the bg track is loaded before anything else because browser delay
        let bgMusic = this.pixi.loader.resources["bgMusic"].data!
        bgMusic.play()
        
        //load background image and add it to game
        let water = new PIXI.Sprite(this.pixi.loader.resources["waterTexture"].texture!)
        water.scale.x = 512 / viewWidth;
        water.scale.y = water.scale.x;
        this.pixi.stage.addChild(water)
        
        //this code adds the desired amount of fish and bubbles to the game
        for (let i = 1; i <= howManyFish; i++) {
            this.fishes.push(new Fish((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["fishTexture"].texture!, game.pixi))
        }
        for (let i = 1; i <= howManyBubbles; i++) {
            this.bubbles.push(new Bubble((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["bubbleTexture"].texture!, game.pixi))
        }
        
        //this code adds ricky to the game
        this.ricky.push(new Ricky((Math.random() * width), (Math.random() * height), this.pixi.loader.resources["rickyTexture"].texture!, game.pixi))
    }

    update() {
        //for each instance of fish/bubble/ricky within the assosiated array execute the update function
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
