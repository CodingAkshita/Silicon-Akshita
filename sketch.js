var waitImg, bgimg, popimg
var playbutton, homebutton, aboutbutton;
var beetroot, brinjal, burger, carrot, corn, forest, fries, ham, icecream, cream1, scoop, pumpkin, redfruit
var stickice, veggieburg, dizzy, jump, bottle, leaf
var gameState = "wait"
var food
var ground
var score = 0
var timer = 15
var junkGroup, foodGroup
var airbg
var knife, knifeImage
var beetroot, brinjal, carrot, corn, pumpkin, leaf, redfruit
var beetrootimg, brinjalimg, carrotimg, cornimg, pumpkinimg, leafimg, redfruitimg

var bacti1, bacti2, bacti3, bacti4, bacti5, bacti6
var score2 = 0
var enemyGroup, goodGroup
var gameOver, resetbutton

function preload() {
  waitImg = loadImage("nine.png")
  playbgimg = loadImage("2Ct5.gif")
  logoimg = loadImage("logo.png")
  yumimg = loadImage("yummygif.gif")
  bgimg = loadImage("background.png")
  popimg = loadImage("popup.png")
  beetrootimg = loadImage("beetRoot.png")
  brinjalimg = loadImage("Brinjal.png")
  burgerimg = loadImage("Burger.png")
  carrotimg = loadImage("Carrot.png")
  cornimg = loadImage("Corn.png")
  forestimg = loadImage("Forest.jpg")
  friesimg = loadImage("frenchFries.png")
  hamimg = loadImage("hamBurger.png")
  icecreamimg = loadImage("iceCream.png")
  cream1img = loadImage("icecream1.png")
  scoopimg = loadImage("icecreamScoop.png")
  pumpkinimg = loadImage("Pumpkin.png")
  redfruitimg = loadImage("redFruit.png")
  stickiceimg = loadImage("stickIce.png")
  veggieburgimg = loadImage("veggieBurger.png")
  die = loadAnimation("die1.png", "die2.png", "die3.png", "die4.png", "die5.png", "die6.png");
  run = loadAnimation("run1.png", "run2.png", "run3.png", "run4.png", "run5.png", "run6.png", "run7.png")
  walk = loadAnimation("walk1.png", "walk2.png", "walk3.png", "walk4.png", "walk5.png", "walk6.png", "walk7.png")
  dizzyimg = loadImage("dizzy1.png")
  attack = loadAnimation("attack1.png", "attack2.png", "attack3.png", "attack4.png", "attack5.png")
  jumpimg = loadImage("jump1.png")
  bottleimg = loadImage("bottle.png")
  leafimg = loadImage("leaf.png")
  font = loadFont("/fonts/Corinthia-Bold.ttf")


  knifeImage = loadImage("knife.png")
  beetrootimg = loadImage("beetRoot.png")
  brinjalimg = loadImage("Brinjal.png")
  carrotimg = loadImage("Carrot.png")
  cornimg = loadImage("Corn.png")
  pumpkinimg = loadImage("Pumpkin.png")
  redfruitimg = loadImage("redFruit.png")
  leafimg = loadImage("leaf.png")
  airbg = loadImage("airbg.jpeg")
  bacti1 = loadImage("bacti1.png")
  bacti2 = loadImage("bacti2.png")
  bacti3 = loadImage("bacti3.png")
  bacti4 = loadImage("bacti4.png")
  bacti5 = loadImage("bacti5.png")
  bacti6 = loadImage("bacti6.png")
  gameOver = loadImage("gameOver.gif")
  resetImage = loadImage("reset.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont(font)


  logo = createSprite(windowWidth / 2, windowHeight / 2)
  logo.addImage(logoimg)
  logo.scale = 1.4
  logo.visible = false

  yum = createSprite(windowWidth / 2, windowHeight / 2)
  yum.addImage(yumimg)
  yum.visible = false
  //used dom library to create image buttons   p5.dom.min.js

  home = createImg("homeButton.png")
  home.position(80, 80)
  home.size(100, 100)

  playbutton = createImg("playButton.png");
  playbutton.position(80, 180);
  playbutton.size(100, 100)

  about = createImg("aboutButton.png");
  about.position(80, 280)
  about.size(100, 100)

  resetbutton = createImg("reset.png")
  resetbutton.position(80, 380)
  resetbutton.size(100, 100)
  resetbutton.hide()

  popbox = createSprite(windowWidth / 2, windowHeight / 2)
  popbox.addImage(popimg)
  popbox.visible = false
  popbox.scale = 1.25

  player = createSprite(100, windowHeight - 100)
  player.addAnimation("walking", walk)
  player.addAnimation("die", die)
  player.visible = false
  player.scale = 2

  knife = createSprite(40, 200, 30, 30)
  knife.addImage(knifeImage)
  //knife.scale = 0.7
  knife.visible = false

  player.debug = false
  player.setCollider("circle", 0, 0, player.width / 2)

  goodGroup = new Group()
  enemyGroup = new Group()

  ground = createSprite(windowWidth / 2, windowHeight - 20, windowWidth, 20);
  ground.visible = false

  junkGroup = new Group()
  foodGroup = new Group()

}


function draw() {
  player.collide(ground)
  if (home.mousePressed(() => {
    gameState = "wait"
  }))

    if (gameState === "wait") {
      background(bgimg)
      popbox.visible = false
      player.visible = false
      logo.visible = true
      playbutton.show()
      resetbutton.hide()
      home.show()
      about.show()
      yum.visible = false
    }

  if (about.mousePressed(() => {
    gameState = "about"
  }))

    if (gameState === "about") {
      popbox.visible = true
      player.visible = false
      logo.visible = false
      play.show()
      yum.visible = false


    }

  if (playbutton.mousePressed(() => {
    gameState = "Level 1"
  }))

    if (gameState === "Level 1") {
      popbox.visible = false
      logo.visible = false
      playbutton.hide()
      home.hide()
      about.hide()
      resetbutton.hide()
      background(playbgimg)
      player.changeAnimation("walking", walk)
      player.visible = true
      //yum.visible = false

      spawnhealthyfood()
      spawnjunkfood()
      for (var i = 0; i < foodGroup.length; i++) {
        if (player.isTouching(foodGroup.get(i)) && gameState === "Level 1") {
          foodGroup.get(i).destroy();
          score = score + 1;

          for (i = 0; i < 50; i++) {
            yum.visible = true
          }

        }


      }

      for (var i = 0; i < junkGroup.length; i++) {
        if (player.isTouching(junkGroup.get(i))) {
          junkGroup.get(i).destroy();
          gameState = "Pause"
          score = score - 2;
          yum.visible = false

        }
      }

      if (score <=-6) {
        gameState = "end"
        foodGroup.destroyEach()
        player.destroy()
        junkGroup.destroyEach()
        yum.visible=false
      }

      if (score >= 8) {
        gameState = "Level 2"
        knife.visible = true
        player.destroy()
        yum.visible = false
      }


      if (keyDown("UP_ARROW") && player.y >= windowHeight - 200) {
        player.velocityY = -19
      }
      player.velocityY += 0.8
    }

  if (gameState === "Pause") {
    background(playbgimg)
    foodGroup.destroyEach()
    popbox.visible = false
    logo.visible = false
    playbutton.hide()
    home.hide()
    about.hide()
    // player.Pause()
    //resetbutton.show()
    // playbgimg.Pause()

    textSize(50)
    fill(0)
    stroke(5)
    text("OH NO!", windowWidth /2.3, windowHeight / 3)
    text("It's taking time to digest", windowWidth / 2.6, windowHeight / 2)
    text("Digestion Time Left : " + timer, 100, 100)

    if (World.frameCount % 10 === 0) {
      timer = timer - 1;
    }

    if (timer === 0) {
      gameState = "Level 1";
      timer = 15;
    }
  }



  /*if (gameState === "reset"){
    player.changeAnimation("walking",walk)
    gameState = "Level 1"
  }*/


  if (gameState === "Level 2") {
    background(airbg)
    player.visible = false
    foodGroup.destroyEach()
    junkGroup.destroyEach()
    knife.visible = true
    spawnBacti()
    spawnFood()
    knife.x = mouseX
    knife.y = mouseY

    for (i = 0; i < goodGroup.length; i++)
      if (goodGroup.get(i).isTouching(knife)) {
        goodGroup.get(i).destroy()
        score2 = score2 + 1
      }
      else {
        for (a = 0; a < enemyGroup.length; a++) {
          if (enemyGroup.get(a).isTouching(knife)) {
            enemyGroup.get(a).destroy()
            gameState = "end"

          }
        }
      }

  }

  if (gameState === "end") {
    resetbutton.show()
    background(gameOver)
    goodGroup.destroyEach();
    enemyGroup.destroyEach();
   
    knife.destroy()
    enemyGroup.setVelocityXEach(0);
    goodGroup.setVelocityXEach(0);

    if (resetbutton.mousePressed(() => {
      // resetgame()
    }))

      //  foodGroup.destroyEach()
      //junkGroup.destroyEach()

      goodGroup.destroyEach()
    enemyGroup.destroyEach()
    knife.destroy()
    player.visible = false

  }

  drawSprites()


if(gameState==="Level 1" || gameState==="Level 2" || gameState==="Pause"){
  textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text(gameState, windowWidth/2-50, 57);
}

  if (gameState === "Level 2" ) {
    textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text("Score : " + score2, windowWidth - 200, 70);
  }



  if (gameState === "about") {
    textSize(40)
    stroke("green")
    strokeWeight(2)
    fill("red")
    text("Nice to meet you!", (windowWidth / 2 - (popbox.x / 5)), 120)
  }


  if (gameState === "Level 1" || gameState === "Pause") {
    textSize(50)
    fill("black")
    stroke("white")
    strokeWeight(5)
    text("Score : " + score, windowWidth - 200, 70)
  }
}



function resetgame() {

  gameState = "wait"
  score = 0
  timer = 0

}

function spawnhealthyfood() {

  if (frameCount % 200 === 0) {

    food = createSprite(windowWidth, windowHeight - 250)
    food.y = Math.round(random(windowHeight - 250, 90))
    food.velocityX = -3
    food.scale = 0.4
    var rand1 = Math.round(random(1, 7))
    player.depth = food.depth + 1
    food.debug = false
    food.setCollider("circle", 0, 0, 50)

    switch (rand1) {

      case 1: food.addImage(beetrootimg);
        break;
      case 2: food.addImage(brinjalimg);
        break;
      case 3: food.addImage(carrotimg);
        break;
      case 4: food.addImage(cornimg);
        break;
      case 5: food.addImage(pumpkinimg);
        break;
      case 6: food.addImage(redfruitimg);
        break;
      case 7: food.addImage(leafimg);
        break;

      default: break;
    }
    foodGroup.add(food)

  }
}

function spawnjunkfood() {

  if (frameCount % 180 === 0) {

    junk = createSprite(windowWidth, windowHeight - 250)
    junk.y = Math.round(random(windowHeight - 250, 90))
    junk.velocityX = -3
    junk.scale = 0.65
    var rand = Math.round(random(1, 9))
    player.depth = junk.depth + 1
    junk.debug = false
    junk.setCollider("circle", 0, 0, 40)

    switch (rand) {

      case 1: junk.addImage(burgerimg);
        break;
      case 2: junk.addImage(friesimg);
        break;
      case 3: junk.addImage(hamimg);
        break;
      case 4: junk.addImage(icecreamimg);
        break;
      case 5: junk.addImage(cream1img);
        break;
      case 6: junk.addImage(scoopimg);
        break;
      case 7: junk.addImage(stickiceimg);
        break;
      case 8: junk.addImage(veggieburgimg);
        break;
      case 9: junk.addImage(bottleimg);
        break;

      default: break;
    }
    junkGroup.add(junk)
  }
}

function spawnBacti() {

  if (frameCount % 180 === 0) {

    bacti = createSprite(windowWidth, windowHeight - 250)
    bacti.y = Math.round(random(windowHeight - 250, 90))
    bacti.velocityX = -17
    bacti.scale = 0.8
    bacti.setLifetime = 50
    var rand2 = Math.round(random(1, 6))
    knife.depth = bacti.depth + 1

    switch (rand2) {

      case 1: bacti.addImage(bacti1);
        break;
      case 2: bacti.addImage(bacti2);
        break;
      case 3: bacti.addImage(bacti3);
        break;
      case 4: bacti.addImage(bacti4);
        break;
      case 5: bacti.addImage(bacti5);
        break;
      case 6: bacti.addImage(bacti6);
        break;


      default: break;
    }
    enemyGroup.add(bacti)
  }
}

function spawnFood() {

  if (frameCount % 100 === 0) {

    food1 = createSprite(windowWidth, windowHeight - 250)
    food1.y = Math.round(random(windowHeight - 250, 90))
    food1.velocityX = -10
    food1.scale = 0.35
    //time = distance/speed
    food1.setLifetime = (windowWidth / food1.velocityX)
    var rand1 = Math.round(random(1, 7))
    knife.depth = food1.depth + 1

    switch (rand1) {

      case 1: food1.addImage(beetrootimg);
        break;
      case 2: food1.addImage(brinjalimg);
        break;
      case 3: food1.addImage(carrotimg);
        break;
      case 4: food1.addImage(cornimg);
        break;
      case 5: food1.addImage(pumpkinimg);
        break;
      case 6: food1.addImage(redfruitimg);
        break;
      case 7: food1.addImage(leafimg);
        break;

      default: break;
    }
    goodGroup.add(food1)
  }
}
