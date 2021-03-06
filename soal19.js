const input = [1, 2, 3];

const Node = function(value, next = null) {
  this.value = value,
  this.next = next
}

const LinkedList = function() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addNodeAtHead = function(value) {
  this.head = new Node(value, this.head);
  this.size++;
  return;
}

LinkedList.prototype.addNodeAtTail = function(value) {
  let node = new Node(value);
  if(!this.head) return this.addNodeAtHead(value);
  let current = this.head;
  while(current.next) {
    current = current.next;
  }
  current.next = node;
  this.size++;
  return;
}

LinkedList.prototype.addNodeAt = function(value, index) {
  if(index > 0 && index > this.size) return console.log("Index does not exist");
  if(index === 0) return this.addNodeAtHead(value);
  const node = new Node(value);
  let current = this.head;
  let count = 0;
  let previous;
  while(count < index) {
   count++;
   previous = current;
   current = current.next
  }
  previous.next = node;
  node.next = current;
  this.size++;
  return;
}

const linked_list = new LinkedList();
linked_list.addNodeAtHead(input[0]);
for(let i = 1; i < input.length - 1; i++) {
  linked_list.addNodeAt(input[i], i);
}
linked_list.addNodeAtTail(input[input.length - 1]);
linked_list.addNodeAt(0, 1);

console.log(linked_list);

const hasCycle = (linkedlist) => {
  let slow = linkedlist.head;
  let fast = linkedlist.head;
  
  while(fast && fast.next){
      fast = fast.next.next
      slow = slow.next
      if(fast === slow){
        return 1
      }
  }
  return 0
}

console.log(hasCycle(linked_list));