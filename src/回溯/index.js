/**
 * 回溯就是递归的一种
 * 本质就是找重复性：最近重复性和最优重复性，最优重复性就是动态规划，最近重复性就是分治、回溯或者其他方法
 * 
 * dfs怎么写
    1）遍历每个起点
    2）进了dfs首先判断合不合理,不合理就是false
    3）判断是否到了终点，是就返回true
    4）没有到终点，继续深入dfs, dfs的时候按照给定的方向，一般有两种pattern
    (一是向四方向扩散，而是向八方向扩散)
    深入回来以后，如果是true直接返回上一层true，否则继续扩散
    5）扩散完还没解，那就返回false,让上一层向其他方向扩散，开始新的dfs
 */