const moles = document.querySelectorAll('.mole');
const holes = document.querySelectorAll('.hole');

// Loop of mole animation
function animateMoles() {
        setTimeout(function(){
            let rand = Math.floor(Math.random() * 6);
            let isOut = moles[rand].classList.contains('mole-animate-up');
            // if random hole does not have mole showing
            if (isOut === false){
                // animate mole to come up
                moles[rand].classList.add('mole-animate-up');
                setTimeout(function(){
                    // after 4 seconds animate to go back down
                    moles[rand].classList.add('mole-animate-down');
                    setTimeout(function(){
                        // and then remove the classes
                        moles[rand].className = 'mole';
                    }, 2500)
                }, 2000)
            }
            animateMoles()
        }, 300)
    }

// click event to 'Whack-a-Mole'

for (let hole of holes){
    hole.addEventListener('click', function(){
        if (hole.children[2].classList.contains('mole-animate-up')){
            hole.children[0].style.display = 'initial';
            hole.children[2].classList.add('mole-animate-down');
            setTimeout(function(){
                hole.children[0].style.display = 'none';
            }, 300)
        }
    });
}

animateMoles();