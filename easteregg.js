            var onetimeuse = true;
            var escape = false;
        function start(){
        
            if(onetimeuse){
        var canvas, canvasContext;
        
        var gamePause = false;
        var turnOn= true;
        
        if(turnOn){
            canvas = document.getElementById('gameCanvas');
            canvasContext = canvas.getContext('2d');
            
            
            
            
            
            
            document.addEventListener('keydown', keyPressed);
            document.addEventListener('keyup', keyReleased);
            
            setInterval(mainloop, 1000/50);
            console.log("playerName");
            turnOn = false;
        }
            var playerName = '';
            while (playerName == null || playerName == ""){
                    
                
                playerName = prompt("What is your name?", "Player");   
                
                if (playerName === ""){
                    playerName = "player";
                } else if (playerName === null){
                    playerName = "player";
                } else if (playerName == playerName){
                    playerName = playerName.toLowerCase();
                }
            }
            
            while (difficulty != 'easy' && difficulty != 'medium' && difficulty != 'hard'){
            var difficulty = '';
                
            difficulty = prompt( playerName + ", what difficulty do you want? (Easy, Medium, Hard)", "easy");
                
            
                if (difficulty === ""){
                    difficulty = "easy";
                } else if (difficulty === null){
                    difficulty = "hard";
                } else if (difficulty == difficulty){
        
                    difficulty = difficulty.toLowerCase();
                }
             
            }
        
        var gameStop = true;
        
        function mainloop(){// mainloop where the game runs the instructions
            restartTimer()
            console.log("working")
            
            if (restartKeyPressed == true){
               onetimer == true;
            }
            
            // this starts the game over again
            if (restart < 0){
                moveBullet();
                moveBullet();
                Invincability = 0;
                onetimer = true;
                gameStop = true;
                gamePause = false;
                scoreScreen
                pauseChanger = 1;
                restart = 30;
                score = 0;
                scoreScreen = false;
                
            }
            
            pauseGame()
            // this pauses the game
            if (gamePause == false){
                // this ends the game untill restarted
                if (gameStop == false){
                    // this sets up the game in the begining eg. positioning
                    if(onetimer == true){
                        gameStartSet()
                        playerXpos = playerStartPos[0];
                        playerYpos = (playerStartPos[1] - playerSize / 2);
                        difficultySetup()
                        for(i = 0; i < maxBullets; i++){// controlls the amount of shots
                            makeBullets();
                        }
                        onetimer = false;
                        E()
                    }
                    colorRect(0,0,canvas.width,canvas.height,'#D2FEFF');
                    imgLoad(backgroundImg,0,0,canvas.width,canvas.height);//the background 
                    imgLoad(playerColour,playerXpos,playerYpos,playerSize,playerSize)//draws the player
                    imgLoad(imgRope,ropePos[0],ropePos[1],ropeSize[0],ropeSize[1]);//the image for the rope
                    playerMove();
                    playerBoundries()
                    drawBullet();
                    drawMegaphone();
                    moveBullet();
                    BPCollision();
                    drawPlayer();
                    addScore();
                    gamePauseBackground = 0;
                    gameEndBackground = 0;
                    gameMenuBackground = 0;
                    // this continuestly draws the players current score and lives
                    drawText("Lives: "+ lives,10,20,"20px arial" , "black")
                    drawText("Score: "+ score,canvas.width - 120,20,"20px arial" , "black")
                    
                }else if (scoreScreen == true) {// only activates if the player has lost health therefore giving you the game over screen
                    if(gameEndBackground == 0){
                        colorRect(0,0,canvas.width,canvas.height,'rgba(0,0,0,0.8)')// draws background
                        drawText("!You Died!", canvas.width / 2 - 100, canvas.height/4 ,"30px arial", "white");
                        drawText("Your score was " + score, canvas.width / 3 - 50, canvas.height/2 ,"30px arial", "white");
                        drawText("Hold R to restart", canvas.width / 4 + 40, canvas.height/2 + 40,"30px arial", "white");
                        gameEndBackground += 1;// makes the endscreen only draw once otherwise it makes the words blocky
                    }
                    
                } else {//shows you the starting screen
                    if (gameMenuBackground == 0){
                        difficultySetup()
                        colorRect(0,0,canvas.width,canvas.height,'white');
                        drawMenuscreen()
                        gameMenuBackground += 1;// makes the menuscreen only draw once otherwise it makes the words blocky
                    } 
                    startGame();
                }// end of gamestop if
        
            }else {// activates when the game is paused
                if(gamePauseBackground == 0 && gameStop == false){
                    
                    drawPausescreen()
                    gamePauseBackground += 1;// makes the pausescreen only draw once evry pause otherwise it makes the words blocky
                }
            }// end of gamepause if
        }// end of mainloop func
        var gamePauseBackground = 0;
        var gameEndBackground = 0;
        var gameMenuBackground = 0;
        
        var scoreScreen = false;
        
        var restart = 30;
        
        //playerdata
        var playerXpos = 35;
        var playerYpos = 350;
        var playerSize = 50;
        var playerYspeed = 10;
        var playerXspeed = 10;
        var playerColor = '#39ff14';
        
        var playerStartPos = [40,250];//(x,y)
        var onetimer = true;
        //megaphone data
        var megaphoneXpos = 600;
        var megaphoneYpos = [100,250,400];
        var megaphoneSize = 70;
        // all the key codes
        const UP_KEY = 87;
        const DOWN_KEY = 83;
        const LEFT_KEY = 65;
        const RIGHT_KEY = 68;
        const RESTART_KEY = 82;
        const UP_ARROW_KEY = 38;
        const DOWN_ARROW_KEY = 40;
        const LEFT_ARROW_KEY = 37;
        const RIGHT_ARROW_KEY = 39;
        const ENTER_KEY = 13;
        const PAUSE_KEY = 80;
        var upKeyPressed = false;
        var downKeyPressed = false;
        var leftKeyPressed = false;
        var rightKeyPressed = false;
        var pauseKeyPressed = false;
        var restartKeyPressed = false;
        var enterKeyPressed = false;
        //pause menu configuration
        var singlePress = true;
        var pauseChanger = 1;
        //game stats
        var Invincability = 0;
        var lives = 1;
        var score = 0;
        var scoreIntervals = 4;
        var maxBullets = 0;
        
        var img = new Image();   // Create new img element
        var singleLoadImg = true;
        //background img
        var backgroundImg = new Image();   // Create new img element
        backgroundImg.src = "img/blue.jpg"
        //player img
        
        var bloonImg = new Image();
        bloonImg.src = "img/squareballoon2.png"
        
        var bloonImg2 = new Image();
        bloonImg2.src = "img/squareballoon3.png"
        
        var bloonImg3 = new Image();
        bloonImg3.src = "img/squareballoon4.png"
        //bullet img
        var bulletImg = new Image();
        bulletImg.src = "img/ball.png"
        
        var megaphoneImg = new Image();
        megaphoneImg.src = "img/megaphone3.png"
        //rope img
        var imgRope = new Image();
        imgRope.src = "img/rope2.png"
        var ropeSize = [20,0];//(width,length)
        var ropePos = [200,0];//(x,y)
        
        var playerColour = bloonImg;
        
        
        //easter egg 
        function E(){
            if (playerName == "steininger"){// this can only be activated with the right name
                for(i = 0; i < 10; i++){
                    makeBullets();
                }
            }
        }// end of easter egg
        
        
        function drawPausescreen(){// draws the pause screen
                    colorRect(0,0,canvas.width,canvas.height,'rgba(0,0,0,0.6)')// draws background
                    // draws the text on the pause screen
                    drawText("Game is Paused",canvas.width/2 - 160,canvas.height/6,"40px arial","white")
                    drawText("Game Controls:",canvas.width/2 - 120,canvas.height/6 + 50,"30px arial","white")
                    drawText("Arrowkeys or WASD to move",canvas.width/2 - 140,canvas.height/6 + 90,"20px arial","white")
                    drawText("Hold R to restart",canvas.width/2 - 87,canvas.height/6 + 140,"20px arial","white")

            
                    // redraws score and lives in white for better visuals
                    drawText("Lives: "+ lives,10,20,"20px arial" , "white")
                    drawText("Score: "+ score,canvas.width - 120,20,"20px arial" , "white")
            
        }// end of drawPauseScreen
        function drawMenuscreen(){//draws the menue screen
                    colorRect(0,0,canvas.width,canvas.height,'rgba(0,0,0,0.6)')// draws background
                    // draws the text on the menu screen
                    drawText("Difficulty: " + difficulty,canvas.width/2 - 145,canvas.height/6,"40px arial","white")
                    drawText("Game Controls:",canvas.width/2 - 120,canvas.height/6 + 50,"30px arial","white")
                    drawText("Arrowkeys or WASD to move",canvas.width/2 - 140,canvas.height/6 + 90,"20px arial","white")
                    drawText("Press P to Pause",canvas.width/2 - 92,canvas.height/6 + 115,"20px arial","white")
                    drawText("Hold R to restart",canvas.width/2 - 87,canvas.height/6 + 140,"20px arial","white")
                    drawText("Press enter to start",canvas.width/2 - 120,canvas.height/6 + 195,"25px arial","white")
                    drawText("Reload the page to change difficulty",canvas.width/2 - 210,canvas.height/6 + 250,"25px arial","white")
            
                    drawText("Lives: "+ lives,10,20,"20px arial" , "white")
        }// end of drawMenuScreen func
        // changes the difficulty of the game
        function  difficultySetup(){
            if (difficulty == 'hard'){
                lives = 2;
                maxBullets = 4;
            } 
            if (difficulty == 'medium'){
                lives = 4;
                maxBullets = 3;
            } 
            if (difficulty == 'easy'){
                lives = 6;
                maxBullets = 2;
            }
            
            
        }// end of difficultySetup func
        function pauseGame(){// a function to toggle between pause screen
            
            if (pauseKeyPressed == true && singlePress == true && gameStop == false){
                singlePress = false;
                pauseChanger += 1;

            }
            //this toggles the pause screen
            if ( pauseChanger == 1){
                gamePause = false;
            }
            if (pauseChanger == 2){
                gamePause = true
            }
            if (pauseChanger >= 3){
                pauseChanger = 1;
            }
        }// end of puaseGame func
        
        function addScore(){
            //adds the score with time intervals
            if (scoreIntervals !=8){
                scoreIntervals -= 1;
                }
            if (scoreIntervals <= 0){
                scoreIntervals = 4;
            }
            // this adds more score if the player isent in slowmotion
            if (score != -10 && Invincability <=0 && scoreIntervals == 4){
                score += 4*maxBullets;  
            } else {
                score += 1*maxBullets;
            }
        
        }//end of addScore func
        function gameStartSet(){// sets up all the variables at the start of the game
            megaphoneYpos[0] = ((canvas.height / 3) - (megaphoneSize / 2))- canvas.height/ 8;
            megaphoneYpos[1] = (((canvas.height / 3) - (megaphoneSize / 2))*2) - canvas.height/ 8;
            megaphoneYpos[2] = (((canvas.height / 3) - (megaphoneSize / 2))*3) - canvas.height/ 8;
            megaphoneXpos = canvas.width - (canvas.width/10);
            
            ropePos[0] = canvas.width /3.5;
            ropeSize[1] = canvas.height;
            
        }// end of gamestartset func
        
        
        //invincability timer
        function drawPlayer(){
            if (Invincability >= 0){// countdown
                Invincability -= 1;
            }
            //colours showing the stages of ivincability
            if (Invincability <=0){
                playerColour = bloonImg;
            }
            if (Invincability < 51 && Invincability > 40){
                playerColour = bloonImg3;
            } else if(Invincability < 41 && Invincability > 30){
                playerColour = bloonImg2;
            }
            if (Invincability < 31 && Invincability > 20){
                playerColour = bloonImg3;
            }  else if (Invincability < 21 && Invincability > 10){
                playerColour = bloonImg2;
            }
            else if (Invincability < 11 && Invincability > 0){
                playerColour = bloonImg3;
            }
        }// end of drawPlayer func
        
        // function to draw the megaphone images 
        function drawMegaphone(){
            imgLoad(megaphoneImg,megaphoneXpos,megaphoneYpos[0],megaphoneSize,megaphoneSize);
            imgLoad(megaphoneImg,megaphoneXpos,megaphoneYpos[1],megaphoneSize,megaphoneSize);
            imgLoad(megaphoneImg,megaphoneXpos,megaphoneYpos[2],megaphoneSize,megaphoneSize);
        }// end of drawMegaphones
        
        function playerMove(){// this moves the player if the correct keys are pressed
            if (upKeyPressed == true && playerYpos > 0){
                playerYpos -= playerYspeed;
            }
            
            if (downKeyPressed == true && playerYpos < canvas.height - playerSize){
                playerYpos += playerYspeed;
            }
            if (leftKeyPressed == true && playerXpos > 0){
                playerXpos -= playerXspeed;
            }
            
            if (rightKeyPressed == true && playerXpos < ropePos[0] - playerSize + 3){
                playerXpos += playerXspeed;
            }

            
        }// end of playerMove func
        // invincability action
        function BPCollision(){
            bullets.forEach(function(bullet,i){
                // detects if the bullet is touching the player
                if (bullet.bulletXpos < playerXpos + playerSize && bullet.bulletXpos + bullet.BULLET_SIZE > playerXpos && bullet.bulletYpos < playerYpos + playerSize && bullet.bulletYpos + bullet.BULLET_SIZE > playerYpos && Invincability <= 0){
                    Invincability = 150;
                    playerColour = bloonImg3;
                    lives -= 1;
                    scoreScreen = true;
                    }
                // this ends the game if the players lives are 0
                if (lives <= 0){
                    gameStop = true;
                }
                
            });
            
        }// end of collisions
        
        function startGame(){// the function to start the game with the enter key
            if (enterKeyPressed == true){
                gameStop = false;
            }
        }// end of startGame func
        
        function playerBoundries(){// this keeps the player from going out of the canvis
            if (playerXpos + playerSize > ropePos[0] +5){
                playerXpos = ropePos[0] +5 - playerSize;
            }
            if(playerXpos < 0 ){
                playerXpos = 0;
            }
            if(playerYpos < 0){
               playerYpos = 0;
            }
            if(playerYpos > canvas.height - playerSize){
                playerYpos = canvas.height - playerSize;
            }
        }// end of playerBoundries func
        
        function restartTimer(){// this counts down for how long you have to hold the restart key
            if (restartKeyPressed == true){
                restart -= 1;
            }
        }//end of restartTimer
        
        // all the keypressed events
        function keyPressed(evt){
            if(evt.keyCode == PAUSE_KEY){
                pauseKeyPressed = true;
            }
            
            if(evt.keyCode == UP_KEY || evt.keyCode == UP_ARROW_KEY){
                upKeyPressed = true;
            }
            if(evt.keyCode == RESTART_KEY){
                restartKeyPressed = true;
            }
            if(evt.keyCode == ENTER_KEY){
                enterKeyPressed = true;
            }
            if(evt.keyCode == DOWN_KEY || evt.keyCode == DOWN_ARROW_KEY){
                downKeyPressed = true;
            }
            if(evt.keyCode == LEFT_KEY || evt.keyCode == LEFT_ARROW_KEY){
                leftKeyPressed = true;
            }
            if(evt.keyCode == RIGHT_KEY || evt.keyCode == RIGHT_ARROW_KEY){
                rightKeyPressed = true;
            }
        }// end of keyPressed func
        // all the key released events
        function keyReleased(evt){
            if(evt.keyCode == PAUSE_KEY){
                pauseKeyPressed = false;
                singlePress = true;// this makes it so you cant hold the pause key and quickly change between paused and unpaused
            }
            if(evt.keyCode == RESTART_KEY){
                restartKeyPressed = false;
                restart = 30;// makes it so the restart timer resets once you let go of the R key
            }
            if(evt.keyCode == ENTER_KEY){
                enterKeyPressed = false;
            }
            
            if(evt.keyCode == UP_KEY || evt.keyCode == UP_ARROW_KEY){
                upKeyPressed = false;
            }
            if(evt.keyCode == DOWN_KEY || evt.keyCode == DOWN_ARROW_KEY){
                downKeyPressed = false;
            } 
            if(evt.keyCode == LEFT_KEY || evt.keyCode == LEFT_ARROW_KEY){
                leftKeyPressed = false;
            }
            if(evt.keyCode == RIGHT_KEY || evt.keyCode == RIGHT_ARROW_KEY){
                rightKeyPressed = false;
            }
            
        }// end of keyReleased func
        
        function newIMG(){// function to load imgs
            if(singleLoadImg == true){
                new Image();
                singleLoadImg = false;
            }
        }// end of neIMG func
            
        function imgLoad(src,x,y,w,h){// function to set up how it gets the data
            canvasContext.drawImage(src,x,y,w,h);
        }// end of imgLoad func
        
        function colorRect(x,y,w,h,c){// function used to draw simple blocks with colour
            canvasContext.fillStyle = c;
            canvasContext.fillRect(x,y,w,h)
        }// end of colorRect func
        
        function drawText(msg,x,y,f,c){// function used to draw text on the canvas
            
            canvasContext.font = f;
            canvasContext.fillStyle = c;
            canvasContext.fillText(msg, x, y)// ('text' var, xpos, ypos)
            
        }// end of  drawText func
        
        var bullets = [];// array to store the data of new bullets
        
       function makeBullets(){//function to crate new bullets
           // variables to create new bullets
            var yspeedChanger = 0;
            var xspeedChanger = 0;
            var bulletPos = Math.floor(Math.random()*3) + 1;// gives it one of three random positions
            var POSorNEG = Math.floor(Math.random()*2)+1;
            const BULLET_SIZE = 15;
            var bulletXpos = megaphoneXpos + 10;
            var bulletYpos = 0;
           // determins where the positions are from one of the three outcomes of bulletpos
            if(bulletPos == 1){
               bulletYpos = megaphoneYpos[0] +25;
            } else if (bulletPos == 2){
                bulletYpos = megaphoneYpos[1] +25;     
            } else {
                bulletYpos = megaphoneYpos[2] +25; 
            }
            
            var bulletXspeed = Math.floor(Math.random()*(15 - 5) + 5);
            var bulletYspeed = Math.floor(Math.random()*(15 - 5) + 5);
            
            var bullet = {
                bulletXpos: bulletXpos,
                BULLET_SIZE: BULLET_SIZE,
                bulletYpos: bulletYpos,
                bulletYspeed: bulletYspeed,
                bulletXspeed: bulletXspeed,
                POSorNEG: POSorNEG,
                yspeedChanger:yspeedChanger,
                xspeedChanger:xspeedChanger
            }
            
            bullets.push(bullet);// pushes all the data created into an array as a new bullet
        }// end of makeBullets func
        
        
        
        function drawBullet(){
            bullets.forEach(function(bullet,i){// dose it for each bullet
                imgLoad(bulletImg,bullet.bulletXpos,bullet.bulletYpos,bullet.BULLET_SIZE,bullet.BULLET_SIZE)
                
            });
        }//end of drawbullet func
        
        function moveBullet(){
            bullets.forEach(function(bullet,i){// dose it for each bullet
                
                if (restart < 0){// clears current bullets if the player restarted
                    delete bullets[i];
                }
                // this if determins what happens when the bullet reaches the edge of the screen
                if(bullet.bulletXpos <= 0 - bullet.BULLET_SIZE){
                   bullet.bulletXpos = megaphoneXpos;// teleports the bullet back to the megaphones
                    // gives it a random Yspeed and Xspeed
                    var bulletXspeed2 = Math.floor(Math.random()*(15 - 5) + 5);
                    var bulletYspeed2 = Math.floor(Math.random()*(15 - 5) + 5);
                    bullet.bulletXspeed = bulletXspeed2;
                    bullet.bulletYspeed = bulletYspeed2;
                    
                    // this determins on which megaphone it will teleport too
                    var bulletPos = Math.floor(Math.random()*3) + 1;
                    var bulletPos = Math.floor(Math.random()*3) + 1;
                     if(bulletPos == 1){
                       bullet.bulletYpos = megaphoneYpos[0] +25;
                    } else if (bulletPos == 2){
                        bullet.bulletYpos = megaphoneYpos[1] +25;     
                    } else {
                        bullet.bulletYpos = megaphoneYpos[2] +25; 
                    }
                    
                    
                    
                    // this gives it a random chance to travle up or down
                    var POSorNEG = Math.floor(Math.random()*2)+1;
                    if(POSorNEG == 1){
                        bullet.bulletYspeed *= 1;
                        bullet.yspeedChanger *= 1
                    }else {
                        bullet.bulletYspeed *= -1;
                        bullet.yspeedChanger *= -1
                        
                    }
                }// end of if(bullet.bulletXpos <= 0 - bullet.BULLET_SIZE)
                
                
                if(bullet.bulletYpos < 0 && bullet.bulletYspeed < 0){// if bullet hits the top edge it will bounce
                    bullet.bulletYspeed *= -1;
                    bullet.yspeedChanger *= -1;
                }
                if(bullet.bulletYpos > canvas.height - bullet.BULLET_SIZE && bullet.bulletYspeed > 0){// if bullet hits the bottom edge it will bounce
                    bullet.bulletYspeed *= -1;
                    bullet.yspeedChanger *= -1;
                }
                
                //this is the bullet movement with slomotion when the player is invincabil
                if(bullet.bulletXpos > 0 - bullet.BULLET_SIZE && Invincability > 0){
                    bullet.bulletXpos -= (bullet.bulletXspeed  + bullet.xspeedChanger / 500)/4;
                    bullet.bulletYpos += (bullet.bulletYspeed + bullet.yspeedChanger/500)/4; 
                    if (bullet.xspeedChanger > -2000 && bullet.xspeedChanger < 2000){
                bullet.xspeedChanger += (1*maxBullets)/1.4;// changes the bullet speedchanger over time
                        // this if tag means that if the bullet is going down then it will go fater down and if its going up that it will go faster up. otherwise the bullet would just cancel itself out
                        if (bullet.yspeedChanger >= 0){
                            bullet.yspeedChanger += (1*maxBullets)/1.4;
                        
                        }else {
                            bullet.yspeedChanger -= (1*maxBullets)/1.4;
                        }
                    }
                    
                } else {// this is the bullet movement without slomotion
                    bullet.bulletXpos -= bullet.bulletXspeed + bullet.xspeedChanger / 500;
                    bullet.bulletYpos += bullet.bulletYspeed + bullet.yspeedChanger/500;
                    if (bullet.xspeedChanger > -2000 && bullet.xspeedChanger < 2000){
                bullet.xspeedChanger += (1*maxBullets)/1.4;// changes the bullet speedchanger over time
                        // this if tag means that if the bullet is going down then it will go fater down and if its going up that it will go faster up. otherwise the bullet would just cancel itself out
                        if (bullet.yspeedChanger >= 0){
                            bullet.yspeedChanger += (1*maxBullets)/1.4 ;
                        
                        }else {
                            bullet.yspeedChanger -= (1*maxBullets)/1.4;
                        }
                    }
                }
            });
        }
        onetimeuse = false;
            }
            if (escape){
                document.getElementById("secret-button").style.width = "10px";
                document.getElementById("gameCanvas").style.display = "none";
                document.getElementById("gameCanvas").style.zIndex = "-2";
                escape = false;
                
            }else{
                document.getElementById("secret-button").style.width = "100px";
                document.getElementById("gameCanvas").style.display = "block";
                document.getElementById("gameCanvas").style.zIndex = "12";
                escape = true;
            }
            
        }
    
