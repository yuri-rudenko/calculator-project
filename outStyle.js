
export function checkOutSize(out) {
    if(out.value.length >= 11) {
        out.classList.add('smaller')
        out.classList.remove('normal')
    }
    else {
        out.classList.add('normal')
        out.classList.remove('smaller') 
    }
}
