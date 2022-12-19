class Queue{
    constructor(){
        this.data = []
    }
    enQueue(x){
        this.data.push(x)
        // console.log(this.data)
    }
    deQueue(){
        this.data.shift()
        // console.log(this.data)
    }
    front(){
        return this.data[0]
    }
    isEmpty(){
        return this.data.length === 0
    }
}

const queue1 = new Queue()
queue1.enQueue(2)
queue1.enQueue(3)
queue1.enQueue(4)
queue1.deQueue()
queue1.deQueue()
queue1.deQueue()
queue1.deQueue()