export function addNum(num, out) {
    if(!parseInt(out.value)) out.value = num
    else out.value += num
}

export function addOperator(val, out) {
    let ops = ['+', '-', '×', '÷', ',']
    let last = (out.value[out.value.length-1])  
    
    if(ops.includes(last) && out.value.length > 1) {
        let str2 = out.value.slice(0, -1)
        out.value = str2
        out.value += val
    }
    else if(parseInt(out.value)) out.value += `${val}`

    if(!parseInt(out.value) && val == '-') out.value = `${val}`

    if(val == ',') {

        let right = -1
        for(let i = 0; i< ops.length-1; i++) {
            if(out.value.lastIndexOf(ops[i]) > right) {
                right = out.value.lastIndexOf(ops[i])
            }
        }

        if(out.value.lastIndexOf(',', out.value.length-2) > right) {
            let str2 = out.value.slice(0, -1)
            out.value = str2
        }
        
    }  
    
}

export function del(out) {
    let str2 = out.value.slice(0, -1)
    out.value = str2
}

export function clear(out) {
    out.value = 0
}