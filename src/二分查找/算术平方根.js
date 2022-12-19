function Solution(x) {
  if(x < 2) return 2
  let left = 1, right = x
  while(left <= right) {
    let mid = left + (right -left) >>> 1
    if(mid === x / mid) {
      return mid
    }else if (mid < x / mid) {
      left = mid + 1
    }else {
      right = mid - 1
    }
  }
  return right
}