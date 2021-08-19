const _Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(item, value) {
        if (!this.head) {
            this.insertFirst(item); // inserts item at the head if list is empty
        }
        else {
            let currentNode = this.head;
            let previousNode = this.head;

            while ( currentNode.value !== value ) { // finds the value that the new item needs to be inserted in front of
                if (currentNode.next === null ) return console.log('Item does not exist'); 
                previousNode = currentNode; // moves the previous node to the current node
                currentNode = currentNode.next; // moves the current node forward one node
            }
            previousNode.next = new _Node(item, currentNode);
        }
    }

    insertAfter(item, value) {
        if (!this.head) {
            this.insertFirst(item); // inserts item at the head if list is empty
        }
        else {
            let currentNode = this.head;
            let nextNode = this.head.next;

            while ( currentNode.value !== value ) { // finds the value that the new item needs to be inserted in front of
                if (currentNode.next === null ) return console.log('Item does not exist'); 
                currentNode = currentNode.next; // moves the current node forward one node
                nextNode = currentNode.next; // moves the next node to the new current node's next node
            }
            currentNode.next = new _Node(item, nextNode);
        }
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertAt(item, pos) {
        if (!this.head) {
            this.insertFirst(item);
        }
        else {
            let posTracker = 1;
            let currentNode = this.head;
            let nextNode = this.head.next;

            if ( !nextNode ) {
                console.log('Position does not exist');
            }
            else {
                while ( posTracker < pos - 1 ) {
                    currentNode = currentNode.next; // move current node forward
                    nextNode = currentNode.next;    // move next node forward passed the new current node
                    posTracker++; // increment
                }
                currentNode.next = new _Node(item, nextNode);
            }
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                console.log('Item does not exist');
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

const display = (linkedList) => { // print the linked list to the console
    if ( !linkedList ) {
        console.log('List does not exist');
        return;
    }
    else {

        let currentItem = linkedList.head;

        while ( currentItem.next !== null ) {
            console.log(currentItem);
            currentItem = currentItem.next;
        }
        return;
    }
}

const size = (linkedList) => {
    if ( !linkedList ) {
        console.log('List does not exist');
        return;
    } 
    else if ( !linkedList.head ) {
        console.log('List is empty');
        return;
    }
    else {

        let counter = 0;
        let currentItem = linkedList.head;

        while ( currentItem.next !== null ) {
            counter++;
            currentItem = currentItem.next;
        }

        counter++; // This increment accounts for the last item in the list
        return size;
    }
}

const isEmpty = (linkedList) => {
    debugger;
    if ( !linkedList ) {
        console.log('List does not exist');
    } 
    else if ( !linkedList.head ) {
        console.log('List is empty');
    }
    else {
        console.log('This linkedlist is not empty');
    }
}

const findPrevious = (item, linkedList) => {
    // isEmpty(linkedList);

    let currentItem = linkedList.head;
    let previousItem = linkedList.head;

    if ( currentItem.value === item && linkedList.head === item ) {
        console.log('This is the first item in the list');
    }
    else {
        while ( currentItem.value !== item ) {
            if ( !currentItem.next ) {
                console.log('Item does not exist');
            }
            previousItem = currentItem;
            currentItem = currentItem.next;
        }

        return previousItem;
    }
}

const findLast = (linkedList) => {
    isEmpty(linkedList);

    let currentItem = linkedList.head;

    while ( currentItem.next !== null ) {
        currentItem = currentItem.next;
    }

    return currentItem;
}

const reverse = (linkedList) => {
    // isEmpty(linkedList);

    const ll = linkedList;
    
    let previousNode = null;

    while (ll.head != null) {
        let nextNode = ll.head.next;
        ll.head.next = previousNode;
        previousNode = ll.head;
        ll.head = nextNode;
    }

    return previousNode;
}

const thirdFromEnd = (linkedList) => {
    const ll = linkedList;
    let head = ll.head;
    let nextNode = head.next;
    let prevNode = null;

    while ( nextNode.next != null ) {
        prevNode = head;
        head = nextNode;
        nextNode = head.next;
    }

    return prevNode;
}

const middle = (linkedList) => {
    const ll = linkedList;
    let head = ll.head;
    let i = 1;
    let midNode = null;

    while ( head.next != null ) {
        head = head.next;
        i++;
    }

    head = ll.head; //reset head

    if (i % 2 !== 0) {
        let mid = Math.floor(i/2) + 1;
        let x = 0;

        while( x < mid ) {
            midNode = head;
            head = head.next;
            x++;
        }
        return midNode;
    } else {
        return 'There is no middle node';
    }
}

const sort = (linkedList) => {
    const ll = linkedList;
    let head = ll.head;
    let anchor = ll.head;
    let holder = null;
    let move = null;
    
    while ( head.next != null ) {
        if (anchor.value > head.next.value) {
            (head.next.next === null) ? (holder = null) : (holder = head.next.next);
            move = head.next;
            move.next = anchor;
            (holder !== null) ? (anchor.next = holder) : (head.next = null);
            anchor = move;
            head = move.next;
        } else {
            head = head.next;
        }
    }

    debugger;

    return anchor;
}

const main = ()=> {
    let SLL = new LinkedList();
    let emptySLL = new LinkedList();
    let cycleList = new LinkedList();
    let unsortedList = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Sarbuck');
    
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');

    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');

    SLL.insertAt('Kat', 3);

    SLL.remove('Tauhida');

    cycleList.insertFirst(1);
    cycleList.insertLast(2);
    cycleList.insertLast(3);
    cycleList.insertLast(2);

    unsortedList.insertFirst(3);
    unsortedList.insertLast(2);
    unsortedList.insertLast(5);
    unsortedList.insertLast(7);
    unsortedList.insertLast(1);



    console.log(sort(unsortedList));
}

main();

