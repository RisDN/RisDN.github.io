const hol = document.querySelector('#hol')
let state = true
hol.addEventListener('click', () => {
    if (state) {
        let randomItem = randomElement(lehetosegek)
        hol.innerHTML = `${randomItem} <img src="imgs/${randomItem}.png" height="100" width="100%" alt=""> `
        setTimeout(() => {
            state = false
        }, 100)

    } else {
        hol.innerHTML = `Hol? <img src="imgs/kep.png" height="100" width="100%" alt=""> `
        setTimeout(() => {
            state = true
        }, 100)
    }
})

