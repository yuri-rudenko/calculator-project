export function addNum(num, out) {
    if(!parseFloat(out.value) && out.value != '-' && out.value[1] != '.') out.value = num
    else out.value += num
}

export function addOperator(val, out) {
    let ops = ['+', '-', '×', '÷', '.']
    let last = (out.value[out.value.length-1])  
    
    if(ops.includes(last) && out.value.length > 1) {
        let str2 = out.value.slice(0, -1)
        out.value = str2
        out.value += val
    }
    else if(parseFloat(out.value)) out.value += `${val}`

    if(!parseFloat(out.value) && val == '-') out.value = `${val}`
    if(out.value == '0' && val == '.') out.value += '.'

    if(val == '.') {

        let right = -1
        for(let i = 0; i< ops.length-1; i++) {
            if(out.value.lastIndexOf(ops[i]) > right) {
                right = out.value.lastIndexOf(ops[i])
            }
        }

        if(out.value.lastIndexOf('.', out.value.length-2) > right) {
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

// 5÷6-8+7×8+7-8÷9-8

export function calculator(out) {

    try {
        let expression = out.value.replace(/÷/g, '/').replace(/×/g, '*')
        const result = eval(expression)
        out.value = Math.round(result * 10000) / 10000
    } catch(error) {
        out.value = 'Err'
    }
}