const moles = document.querySelectorAll('.mole');

// function animateMoles() {
//     let rand = Math.floor(Math.random() * 6)
//     moles[rand].classList.toggle('mole-animate');
// }

function animateMoles() {
    setTimeout(function () {
        let rand = Math.floor(Math.random() * 6);
        moles[rand].classList.toggle('mole-animate');
        animateMoles();
    }, 800);
}

animateMoles();