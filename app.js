const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('#score')
let count = 0;

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

animateMoles();