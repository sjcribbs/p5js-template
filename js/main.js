let catPic

function preload(){
    catPic = loadImage('../images/unicorn-cat.png')
}

function setup(){
    createCanvas( innerWidth, innerHeight )

    let catX = width/2 - catPic.width/2
    let catY = height/2 - catPic.height/2
    image( catPic, catX, catY )
}

function draw(){

    if(mouseIsPressed){
        let r = random(255)
        let g = 255
        let b = random(255)
        fill( r, g, b )
        for (let i = 0; i < 10; i++) {
            let s = i*10
            let y = mouseY + i*s/2
            ellipse( mouseX, y, s )
        }

    }

}
