function VersionControl(n) {
  let left = 0; right = n
  while(left < right) {
    let mid = left + (mid - left) / 2
    if(isBadVersion(mid)) {
      right = mid
    }else {
      left = mid + 1
    }
  }
  return left
}