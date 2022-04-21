var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let len = s.length
    let maxLen = 1
    let res = s.substring(0, 1)

    for(let i = 0; i < len;i++) {
        for(let j = i+1; j < len;j++) {
            console.log(i, j)
            if(j-i+1 > maxLen && valid(s, i, j)) {
                maxLen = j-i+1
                res = s.substring(i, j+1)
                console.log(res)
            }
        }
        console.log(res)
        return res
    }

    function valid(s, left, right) {
        console.log("left, right",left, right)
        while(left < right) {
            if(s[left] != s[right]){
                return false
            }
            left ++
            right --
        }
        return true
    }
};


let s = "bababbd"

longestPalindrome(s)