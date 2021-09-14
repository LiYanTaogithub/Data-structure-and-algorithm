// 大数相加
// add(a,b) //a='12243444555' b='12222222222'
// '12' + '21' = '33'

function add1(str1, str2) {
    const arr1 = str1.split(''), arr2 = str2.split('');
    const len1 = arr1.length, len2 = arr2.length;
    // 字符串长度对齐：取两个数字的最大长度
    const maxLen = Math.max(len1, len2);
    let res = [];
    let flag = false;
    for(let i = 0; i < maxLen; i++){
        let sum;
        let num1 = arr1.pop(), num2 = arr2.pop();
        //用0去补齐长度
        num1 = num1 ? num1 : 0;
        num2 = num2 ? num2 : 0;
        if(flag) { // 有进位
            sum = parseInt(num1) + parseInt(num2) + 1;
        }else { // 没进位
            sum = parseInt(num1) + parseInt(num2)
        }
        if(parseInt(sum/10) > 0) {
            // 有进位
            res.push(sum%10);
            flag = true;
        }else {
            res.push(sum);
            flag = true;
        }
        if(i === maxLen -1 && flag) {
            res.push(1)
        }
    }
    return res.reverse().join('')
}


// 4+9 = 13 
let a = "9007199254740991";
let b = "1234567899999999999";

function add2(a ,b){
   //取两个数字的最大长度
   let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   // 从个位相加
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      console.log('t', t);
      f = Math.floor(t/10);
      console.log('进位f', f);
      sum = t%10 + sum;
      console.log('sum', sum);
   }
   if(f == 1){
      sum = "1" + sum;
   }
       console.log('sum2: ', sum)
   return sum;
}

add2(a, b);

function add3(a, b){
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength , 0)
    b = b.padStart(maxLength , 0)
    let f = 0; // 进位
    let t = 0; // 两数累加
    let sum = ''; //累加和
    for(let i = maxLength -1; i >= 0; i--){
        t = parseInt(a[i]) + parseInt(b[i]) + f
        f = Math.floor(t/10);
        sum = t%10 + sum;
    }
    return sum;
}

add3(a, b);