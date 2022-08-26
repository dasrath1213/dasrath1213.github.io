var i = 0;
var r1;
var r2;
var r3;
var r4;
var scored = 0;
var chk = 0;
var width;
var win = 0;
var guess1;
var guess2;
var stop = 0;
var t = 60;
var m;
var hisc = 0;
var miss = 0;
var id;
var lv = 3;
var tlv = lv;
var tt = t;
var h1 = 0;
var h2 = 0;
var h3 = 0;
var level = "auto";
var r = 9;
var g = 99;
var b = 9;
function move() {

    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress");
        width = 0;

        id = setInterval(frame, t);
        function frame() {
            if (width >= 100) {
                lost();
                clearInterval(id);
                i = 0;
            } else {
                if (r >= 99) { r = 10; }
                if (g <= 10) { g = 99 }
                if (b >= 99) { b = 23 }
                r++; g--; b++;
                width += lv; t--;
                elem.style.width = width + "%";
                elem.style.backgroundColor = "#" + r + g + b;
            }
        }

    }
}
function correct() {
    if (miss) {
        move();
        if ((r1 == r3) && (r2 == r4)) {
            scored += Math.ceil(10 - width / 10);
            document.getElementById("counter").innerHTML = scored;
        } else {
            m = scored;
            lost();
        }
        change();
        width = 0;
    }
}
function wrong() {
    if (miss) {
        move();
        if ((r1 == r3) && (r2 == r4)) {
            m = scored;

            lost();
        } else {
            scored += Math.ceil(10 - width / 10);
            document.getElementById("counter").innerHTML = scored;

        }
        change();
        width = 0;
    }
}
function tapped() {
    miss = 1;
    document.getElementById("aa").innerHTML = "<marquee>Developed by Dashrath</marquee>";
    document.getElementById("myaud").play();
    document.getElementById("tap").style.display = "none";
    document.getElementById("game").style.display = "block";
    change();
}
function change() {
    win = Math.floor(Math.random() * 2);
    if (win) {
        guess1 = Math.ceil(Math.random() * 3);
        r1 = guess1;
        r3 = guess1;
        guess2 = Math.ceil(Math.random() * 5);
        r2 = guess2;
        r4 = guess2;
    }
    else {

        r1 = Math.ceil(Math.random() * 3);
        r2 = Math.ceil(Math.random() * 5);
        r3 = Math.ceil(Math.random() * 3);
        r4 = Math.ceil(Math.random() * 5);
    }
    var collect; var text1; var text3;
    collect = document.getElementById("game");
    text1 = document.getElementById("txt1");
    text3 = document.getElementById("txt3");
    switch (r1) {
        case 1: collect.style.height = "150px";
            collect.style.width = "150px";
            collect.style.borderRadius = "0px";
            collect.style.display = "block";
            break;
        case 2: collect.style.height = "160px";
            collect.style.width = "160px";
            collect.style.borderRadius = "50%";
            collect.style.display = "block";
            break;
        case 3: collect.style.height = "150px";
            collect.style.width = "200px";
            collect.style.borderRadius = "0px";
            collect.style.display = "block";
            break;
    }

    switch (r2) {
        case 1: collect.style.backgroundColor = "rgba(0,0,255,0.6)";
            collect.style.display = "block";
            break;
        case 2: collect.style.backgroundColor = "green";
            collect.style.display = "block";
            break;
        case 3: collect.style.backgroundColor = "yellow";
            collect.style.display = "block";
            break;
        case 4: collect.style.backgroundColor = "orange";
            collect.style.display = "block";
            break;
        case 5: collect.style.backgroundColor = "red";
            collect.style.display = "block";
            break;
    }
    switch (r3) {
        case 1: text1.innerHTML = "Square";
            break;
        case 2: text1.innerHTML = "Circle";
            break;
        case 3: text1.innerHTML = "Rectangle";
            break;
    }
    switch (r4) {
        case 1: text3.innerHTML = "Blue"; break;
        case 2: text3.innerHTML = "Green"; break;
        case 3: text3.innerHTML = "Yellow"; break;
        case 4: text3.innerHTML = "Orange"; break;
        case 5: text3.innerHTML = "Red"; break;
    }
}
function home() {
    showmenu();
}
function scrd() {
    document.getElementById("scr").innerHTML = scored;
}
function lost() {
    clearInterval(id);
    if (level == "easy" && h1 <= scored) {
        h1 = scored;
    }
    if (level == "hard" && h2 <= scored) {
        h2 = scored;
    }
    if (level == "auto" && h3 <= scored) {
        h3 = scored;
    }
    document.getElementById("progress").style.width = "0px";
    document.getElementById("myaud").pause();
    document.getElementById("crash").play();
    showlost();
}
function showoriginal() {
    document.getElementById("levelpage").style.display = "none";
    document.getElementById("highscore").style.display = "none";
    document.getElementById("lostpage").style.display = "none";
    document.getElementById("aboutpage").style.display = "none";
    document.getElementById("menupage").style.display = "none";
    document.getElementById("originalpage").style.display = "block";
}
function showhigh() {
    document.getElementById("levelpage").style.display = "none";
    document.getElementById("menupage").style.display = "none";
    document.getElementById("originalpage").style.display = "none";
    document.getElementById("lostpage").style.display = "none";
    document.getElementById("aboutpage").style.display = "none";
    document.getElementById("highscore").style.display = "block";
    document.getElementById("highsc").innerHTML = "Easy: " + h1 + "<br><br>Hard: " + h2 + "<br><br> Auto: " + h3;
}
function showlost() {

    document.getElementById("levelpage").style.display = "none";
    document.getElementById("highscore").style.display = "none";
    document.getElementById("aboutpage").style.display = "none";
    document.getElementById("menupage").style.display = "none";
    document.getElementById("originalpage").style.display = "none";
    document.getElementById("lostpage").style.display = "block";
}
function showmenu() {
    initialize();
    document.getElementById("levelpage").style.display = "none";
    document.getElementById("highscore").style.display = "none";
    document.getElementById("originalpage").style.display = "none";
    document.getElementById("lostpage").style.display = "none";
    document.getElementById("aboutpage").style.display = "none";
    document.getElementById("menupage").style.display = "block";
}
function showabout() {
    document.getElementById("levelpage").style.display = "none";
    document.getElementById("highscore").style.display = "none";
    document.getElementById("menupage").style.display = "none";
    document.getElementById("originalpage").style.display = "none";
    document.getElementById("lostpage").style.display = "none";
    document.getElementById("aboutpage").style.display = "block";
}
function showlevel() {
    document.getElementById("highscore").style.display = "none";
    document.getElementById("menupage").style.display = "none";
    document.getElementById("originalpage").style.display = "none";
    document.getElementById("lostpage").style.display = "none";
    document.getElementById("aboutpage").style.display = "none";
    document.getElementById("levelpage").style.display = "block";
}
function initialize() {
    i = 0;
    scored = 0;
    chk = 0;
    width = 0;
    win = 0;
    stop = 0;
    t = tt;
    miss = 0;
    lv = tlv;
    document.getElementById("tap").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("counter").innerHTML = scored;
    document.getElementById("scr").innerHTML = "";
}
function easy() {
    level = "easy";
    tlv = 2;
    tt = 100;
    showmenu();
}
function hard() {
    level = "hard";
    tlv = 4;
    tt = 50;
    showmenu();
}
function auto() {
    level = "auto";
    tlv = 3;
    tt = 60;
    showmenu();
}