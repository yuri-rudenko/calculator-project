import { addNum, addOperator, del, clear} from "./functions.js"

let out = document.querySelector(".result input")
let buttons = document.querySelectorAll(".button-wrapper")
let operators = document.querySelectorAll('.operator')
let clearer = document.querySelector('.clear')
let deleter = document.querySelector('.delete')

for(let b of buttons) { 
    let val = b.querySelector('.button').innerHTML
    let num = parseInt(val)

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

    if(b.classList[1] == 'operator') {
        b.addEventListener('click', () => {
            addOperator(val, out)
        })
    }
    if(b.classList[1] == 'delete') {
        b.addEventListener('click', () => {
            del(out)
        })
    }
    if(b.classList[1] == 'clear') {
        b.addEventListener('click', () => {
            clear(out)
        })
    }


}

document.addEventListener('keydown', (e) => {
    console.log(e.key)
        let check = true
        if(document.activeElement.parentElement.className == 'result') check = false
        if(check) {
            if(e.key == '+') {
                addOperator('+', out)
            }
            if(e.key == '-') {
                addOperator('-', out)
            }
            if(e.key == '/') {
                addOperator('÷', out)
            }
            if(e.key == '*') {
                addOperator('×', out)
            }
            if(e.key == ',' || e.key == '.') {
                addOperator(',', out)
            }
    }
})