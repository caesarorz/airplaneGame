
var player = {
    left: 450,
    top: 620,
}

var enemies = [
    {left: 350, top: 200},
    {left: 420, top: 200},
    {left: 100, top: 250},
    {left: 170, top: 250}
]

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

drawPlayer()
drawEnemies()

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


document.onkeydown = function (e) {

    // console.log(player)
    if(e.keyCode == 37 && limit()) { // LEFT
        player.left = player.left - 20

    }
    else if (e.keyCode == 39 && limit()) { // RIGHT
        player.left = player.left + 20

    }
    else if (e.keyCode == 40 && limit()) { // DOWN
        player.top = player.top + 20

    }
    else if (e.keyCode == 38 && limit()) { // UP
        player.top = player.top - 20
    }
    drawPlayer()
}