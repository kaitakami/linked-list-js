class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

function LinkedList() {
  let head = null
  function append(value) {
    let newNode = new Node(value)
    let currentNode;
    if (head === null) {
      head = newNode
    } else {
      currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    return head // for testing, not necessary
  }

  function prepend(value) {
    let newNode = new Node(value)
    let currentNode;
    if (head === null) {
      head = newNode
    } else {
      newNode.next = head
      head = newNode
    }
    return head // for testing, not necessary
  }

  function size () {
    let counter = 1
    let nodeTraversal = head
    while (nodeTraversal.next) {
      nodeTraversal = nodeTraversal.next
      counter++
    }
    return counter
  }

  function returnHead () {
    return head
  }

  function returnTail () {
    let tail;
    let list = head
    while (list.next) {
      if (list.next.next === null) {
        tail = list.next
        list = list.next
      } else {
        list = list.next
      }
    }
    return tail
  }

  function indexAt(index) {
    let indexElement;
    let list = head
    let indexCount = 0 // Starting from zero
    while (indexCount <= index) {
      if (indexCount === index) {
        indexElement = list 
      }
      list = list.next
      indexCount++
    }
    return indexElement
  }

  return { append, prepend, size, returnHead, returnTail, indexAt }

}

/*const testList = LinkedList()
testList.prepend(4)
testList.prepend(3)
testList.prepend(2)
console.log(testList.prepend(1)) */

export { Node, LinkedList }