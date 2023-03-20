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

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    printValues() {
        if (this.isEmpty()) {
            console.log("the list is empty");
        } else {
            let curr = this.head
            let valuesList = ''
            while (curr) {
                valuesList += `${curr.value} `
                curr = curr.next
            }
            console.log(valuesList)
        }
    }
}



// test here
const list = new LinkedList();

console.log('is this list empty?', list.isEmpty())




list.printValues()

list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.printValues()
console.log('what is the list size?', list.getSize())
