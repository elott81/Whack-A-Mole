const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('#score');
const mainDisplay = document.querySelector('#main');
const scorePage = document.querySelector('#scorePage');
const scoreDisplay = document.querySelector('#scoreDisplay');
const btn = document.querySelector('#restart');
const message = document.querySelector('#message');
let count = 0;

// countdown timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var countdown = 45,
    display = document.querySelector('#time');
    startTimer(countdown, display);
};

setTimeout(function(){
    // Show Score after 45 seconds
    if(count >= 40){
        message.textContent = 'Well Done!'
        scoreDisplay.classList.add('green');
    } else {
        message.textContent = 'Keep Practicing!'
        scoreDisplay.classList.add('red');
    }
    mainDisplay.style.opacity = '0';
    setTimeout(function(){
        mainDisplay.style.display = 'none';
        scorePage.style.opacity = '100';
    }, 500);
    scoreDisplay.textContent = `${count}`;
}, 47000);

// Loop of mole animation
function animateMoles() {
        setTimeout(function(){
            let rand = Math.floor(Math.random() * 9);
            let isUp = moles[rand].classList.contains('mole-animate-up');
            // if random hole does not have mole showing
            if (isUp === false){
                // animate mole to come up
                moles[rand].classList.add('mole-animate-up');
                setTimeout(function(){
                    // after 2 seconds animate to go back down
                    moles[rand].classList.add('mole-animate-down');
                    setTimeout(function(){
                        // then remove the classes
                        moles[rand].className = 'mole';
                    }, 2200)
                }, 2000)
            }
            animateMoles()
        }, 300)
    }

// click event to 'Whack-a-Mole'

for (let hole of holes){
    hole.addEventListener('click', function(){
        let isUp = hole.children[2].classList.contains('mole-animate-up');
        let isDown = hole.children[2].classList.contains('mole-animate-down');
        if (isUp && isDown === false){
            hole.children[0].style.display = 'initial';
            hole.children[2].classList.add('mole-animate-down');
            setTimeout(function(){
                hole.children[0].style.display = 'none';
            }, 200)
            count++;
            score.textContent = count;
        }
    });
}

btn.addEventListener('click', function(){
    window.location.reload();
})

animateMoles();