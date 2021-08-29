
var player = {
    left: 450,
    top: 620,
}

var enemies = [
    {left: 350, top: 250},
    {left: 420, top: 250},
    {left: 100, top: 250},
    {left: 170, top: 250}
]

var missiles = []

function enemiesSpan() {
    var min = 0
    var max = 865
    return Math.floor(Math.random() * (max - min)) + min;
  }

function drawPlayer() {
    console.log()
    content = "<div class='player' style='left:"+ player.left +"px; top:"+ player.top +"px'></div>"
    document.getElementById("players").innerHTML = content
}

function drawEnemies() {
    content = ""
    for(var idx=0; idx<enemies.length; idx++) {
        content += "<div class='enemy' style='left:"+ enemies[idx].left +"px; top:"+ enemies[idx].top +"px'></div>"
    }
    document.getElementById("enemies").innerHTML = content
}

function drawMissiles () {
    content = ""
    for(var idx=0; idx<missiles.length; idx++) {
        content += "<div class='missile' style='left:"+ missiles[idx].left +"px; top:"+ missiles[idx].top +"px'></div>"
    }
    document.getElementById("missiles").innerHTML = content  
}

function removeEnemies() {
    console.log(enemies)
}

function limit() {
    if(player.left <= 0) {
        player.left = 10
        return false
    } else if (player.left >= 830) {
        player.left = 820
        return false
    } else if (player.top <= 370) {
        player.top = 380
        return false
    } else if (player.top >= 620) {
        player.top = 610
        return false
    }
    return true
}

function moveEnemies () {
    for(var idx = 0; idx < enemies.length; idx++) {
        console.log(enemies[idx])
        if(enemies[idx].top > 685) {
            enemies[idx].top = 100
            enemies[idx].left = enemiesSpan() 
        }
        enemies[idx].top = enemies[idx].top + 15
    }
}

function moveMissiles () {
    for(var idx = 0; idx < missiles.length; idx++) {
        missiles[idx].top = missiles[idx].top - 20
    }
}
document.onkeydown = function (e) {
    if(e.keyCode == 37 && limit()) { // LEFT
        player.left = player.left - 20
    }
    if (e.keyCode == 39 && limit()) { // RIGHT
        player.left = player.left + 20
    }
    if (e.keyCode == 40 && limit()) { // DOWN
        player.top = player.top + 20
    }
    if (e.keyCode == 38 && limit()) { // UP
        player.top = player.top - 20
    }
    if(e.keyCode == 32) { // fire
        missiles.push({left: player.left + 34, top: player.top - 10})
        drawMissiles ()
    }
    drawPlayer()
}


function gameLoop(){
    drawPlayer()
    drawMissiles()
    moveMissiles()
    drawEnemies()
    moveEnemies()
    setTimeout(gameLoop, 100)
}

gameLoop()