var strToInt = function(str) { 
    let res = 0;
    let i = 0;
    let isMinus = false; // 记录是否为负号
    // 判断首位，首位合格的无非就'+'或'-'或数字三种情况，其他的一概滚蛋
    while(str[i] === ' ') i++;
    if((str[i] <0 || str[i] > 9) && str[i] !== '-' && str[i] !== '+') return 0; // 开头不为数字或正负号就返回
    //'+''-'肯定是要把它去掉的，这样三种情况就统一了
    if(str[i] === '-'){
        isMinus = true;
        i++
    }else if(str[i] === '+') i++;
    //正式累加
    while(str[i] >= '0' && str[i] <= '9'){
        res += res * 10 + str[i];
        //及时止损，一看到res超int范围立马return
        if(res > Integer.MAX_VALUE) {
            return isMinus ? Integer.MIN_VALUE : Integer.MAX_VALUE;
        }
        i++; // 往后走一位
    }
    return isMinus ? -res : res;
};