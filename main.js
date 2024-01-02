const luckBiscuit = document.querySelector(".luckBiscuit")
const luckBiscuit2 = document.querySelector(".luckBiscuit2")
const btnOpen = document.querySelector("#btnOpen")
const btnOpenNew = document.querySelector("#btnOpenNew")


function openBiscuit() {
    luckBiscuit.classList.toggle("hide")
    luckBiscuit2.classList.toggle("hide")
}

function openNewBiscuit() {
    luckBiscuit2.classList.toggle("hide")
    luckBiscuit.classList.toggle("hide")
}

btnOpen.addEventListener('click', openBiscuit)
btnOpenNew.addEventListener('click', openNewBiscuit)
