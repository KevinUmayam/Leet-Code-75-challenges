class Node {
    constructor(value) {
        this.values = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
}



// test here
const list = new LinkedList();

console.log('is this list empty?', list.isEmpty())
console.log('what is the list size?', list.getSize())