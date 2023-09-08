export function addNum(num, out) {
    if(!parseInt(out.value)) out.value = num
    else out.value += num
}
