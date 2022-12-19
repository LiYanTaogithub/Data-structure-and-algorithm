/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.list = new Array(k) // 判断的时候需要将尾指针加1
    this.front = -1
    this.rear = -1
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){ // 满
        return false
    }else if(this.isEmpty()){ // 空
        this.head += 1
        this.rear += 1
        this.list[this.rear] = value
        return true
    }else{
        this.rear = (this.rear + 1) % this.list.length
        this.list[this.rear] = value
        // this.rear = (this.rear + 1) % this.list.length
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){ // 空
        return false
    }else if(this.head === this.rear){ // 证明只有一个元素了
        this.head = -1
        this.rear = -1
        return true
    }else{
        this.head = (this.head + 1 ) % this.list.length
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1
    }else{
        return this.list[this.front]
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
    }else{
        return this.list[this.rear]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear === -1 ? true : false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if((this.rear + 1) % this.list.length === this.front ){
        return true
    }else{
        return false
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


