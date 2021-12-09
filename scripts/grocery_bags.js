var img_arr = [
    "2000itgirl.jpg",
    // "bahay.jpg",
    "ballclub.jpg",
    "bleecker.jpg",
    "directorX.jpg",
    "dwight.jpg",
    "fluugamemask.jpg",
    "grinding.jpg",
    "groovy.jpg",
    "helloparis.jpg",
    "icy.jpg",
    "kidstudio.jpg",
    "michaelscott.jpg",
    "nigo.jpg",
    "seanbrown.jpg",
    "wwe.jpg"
    // "LIFE-DESIGN-LOGO.jpg",
    // "bag_template.png"
];

// var test = document.getElementById("product-component-1631056444677");
var grocery_bags = document.getElementsByClassName("ball");
var shopify_componenets = document.body.getElementsByClassName("invisible-button");

var canvas = {

    element: document.getElementById("canvas-bags"),
    width: window.innerWidth,
    height: window.innerHeight,

    initialize: function () {

        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';

        document.body.appendChild(this.element);
    }
};

var Ball = {

    create: function (color, dx, dy) {

        var newBall = Object.create(this);

        newBall.dx = dx;
        newBall.dy = dy;
    
        newBall.width = 150;
        newBall.height = 150;

        newBall.element = document.createElement("img");

        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';

        newBall.element.className += ' ball';

        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        canvas.element.appendChild(newBall.element);

        return newBall;
    },

    moveTo: function (x, y) {

        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    },

    changeDirectionIfNecessary: function (x, y) {

        if (x < 0 || x > canvas.width - (this.width + 10)) {
            this.dx = -this.dx;
        }

        if (y < 0 || y > canvas.height - (this.height + 10)) {
            this.dy = -this.dy;
        }
    },

    draw: function (x, y) {

        this.moveTo(x, y);
        var ball = this;

        setTimeout(function () {

            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);

        }, 1000 / 40);
    }
};

canvas.initialize();

for (var i = 0; i < img_arr.length; i++) {

    var ball = Ball.create("transparent", Math.random() * 5, Math.random() * 5);
    ball.draw(Math.random() * 100, 100);
    ball.element.src = "./media/grocery_bags/" + img_arr[i];
    ball.element.setAttribute("id", img_arr[i]);
}

setInterval(function() {

    for (var x = 0; x < grocery_bags.length; x++) {

        shopify_componenets[x].style.left = grocery_bags[x].x - 65 + "px";
        shopify_componenets[x].style.top = grocery_bags[x].y + 10 + "px";
    }
}, 1);

var welife = document.getElementById("LIFE-DESIGN-LOGO.jpg");

var looper;
var degrees = 0;

function rotateAnimation(el,speed) {

	var elem = document.getElementById(el);

	if (navigator.userAgent.match("Chrome")) {

		elem.style.WebkitTransform = "rotate(-"+degrees+"deg)";

	} else if (navigator.userAgent.match("Firefox")) {

		elem.style.MozTransform = "rotate(-"+degrees+"deg)";

	} else if(navigator.userAgent.match("MSIE")){

		elem.style.msTransform = "rotate(-"+degrees+"deg)";
        
		elem.style.OTransform = "rotate(-"+degrees+"deg)";
	} else {
		elem.style.transform = "rotate(-"+degrees+"deg)";
	}

	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);

	degrees++;

	if(degrees > 359){

		degrees = 1;
	}
}

rotateAnimation("LIFE-DESIGN-LOGO.jpg", 5);

// welife.onmousedown = function(e) {
  
//   console.log("clicked");
  
//   window.open("https://www.welife.design");
// }
