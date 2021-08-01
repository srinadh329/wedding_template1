particlesJS("space", {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#000"
        },
        "opacity": {
            "value": 1,
            "anim": {
                "enable": false
            }
        },
        "shape": {
            "type": "image",
            "image": {
             "src": "images/star.png", 
            "width": 1,   
             "height": 1
              }
            // "stroke": {
            //     "width": 4,
            //     "color": "#fff"
            // },
            // "polygon": {
            //     "nb_sides": 5
            // }
        },
        "size": {
            "value": 25,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 10,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 12
            }
        }
    }
});