// Enemies our player must avoid
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 200);
  };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 600) {
      this.x = -10;
    }
  };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is our player (hero!)
var Player = function() {
  this.sprite = 'images/char-cat-girl.png';
  this.x = 200;
  this.y = 380;
};

// Update the player's position to the start position if player goes off screen
Player.prototype.update = function(dt) {
  if (this.x < -50) {
    this.x = 200;
  };
  if (this.x > 480) {
    this.x = 200;
  };
  if (this.y < -10) {
    this.y = 380;
  };
  if (this.y > 450) {
    this.y = 380;
  }
};

// Draw the player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Function to move player on screen
Player.prototype.handleInput = function(key) {
    switch (key) {
        case "right":
            this.x += 25;
            break;
        case "left":
            this.x -= 25;
            break;
        case "up":
            this.y -= 25;
            break;
        case "down":
            this.y += 25;
            break;
    }
};

// Function to check whether player & bug collide
function checkCollisions () {
allEnemies.forEach(function(enemy) {
         if(enemy.x < player.x + 60 &&
            enemy.x + 60 > player.x &&
            enemy.y < player.y + 60 &&
            enemy.y + 60 > player.y) {
              newGame();
            }
        });};

// Function to reset player to start position in case of collision
var newGame = function() {
  window.alert("try again!");
  player.x = 200;
  player.y = 380;
};

// Instantiating objects
var firstEnemy = new Enemy(-80,220);
var secondEnemy = new Enemy(10,140);
var thirdEnemy = new Enemy(-10,50);
var allEnemies = [firstEnemy, secondEnemy, thirdEnemy];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
