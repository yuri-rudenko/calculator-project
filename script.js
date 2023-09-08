import { addNum } from "./functions.js"

let out = document.querySelector(".result input")
let buttons = document.querySelectorAll(".button-wrapper")

for(let b of buttons) { 
    let num = parseInt(b.querySelector('.button').innerHTML)

    if(!isNaN(num)) {
        b.addEventListener('click', () => {
            addNum(num, out)
        })
        document.addEventListener('keydown', (e) => {
            let check = true
            if(document.activeElement.parentElement.className == 'result') check = false
            if(check) {
                if(parseInt(e.key) == num) addNum(num, out)
            }
        })
    }
}