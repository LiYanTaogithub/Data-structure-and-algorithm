// https://www.cnblogs.com/lyt0207/p/12380752.html
function rectCover(number){
    if(number == 0 || number == 1 || number == 2){
        return number
    }
    let current, re1 = 2, re2 = 1
    for(let i = 3; i <= number; i++){
        current = re1 + re2
        re2 = re1
        re1 = current
    }
    return current
}