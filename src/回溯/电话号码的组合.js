var letterCombinations = function(digits) {
  const k = digits.length; // 字符串的长度
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    if(!k) return [];
    if(k === 1) return map[digits].split("");

    const res = [], path = []; //res 是最终的字符串组合答案 path 表示路径上的数字
    backtracking(digits, k, 0);

    return res;

    function backtracking(n, k, index) { //! 这个index是记录遍历第几个数字了，就是用来遍历digits的（题目中给出数字字符串），同时index也表示树的深度。
      // 边界条件
      if(path.length === k) {
            res.push(path.join(""));
            return;
        }
        // 非边界条件
        for(const v of map[n[index]]) {
            path.push(v); // ['a', 'd', 'g']
            backtracking(n, k, index + 1);
            path.pop();
        }
      }
};

letterCombinations('234')