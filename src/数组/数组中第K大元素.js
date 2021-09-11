// 思路一：借助快排的分治思想，优点是期望速度最快，但是在最差情况下表现也极差。另外，也不适用于实际中数据一个一个到来的场景，或者数据量大到无法一次读入内存的场景。

class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int p = partition(arr, left, right);
            if (p < k) left = p + 1;
            else if (p > k) right = p - 1;
            else return Arrays.copyOf(arr, k);
        }
        return arr;
    }
    
    private int partition(int[] arr, int left, int right) {
        int base = arr[left];
        
        while (left < right) {
            while (left < right && arr[right] >= base) right--;
            if (left < right) arr[left] = arr[right];
            while (left < right && arr[left] <= base) left++;
            if (left < right) arr[right] = arr[left];
        }
        arr[left] = base;
        return left;
    }
}