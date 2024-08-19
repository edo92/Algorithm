class Node<T> {
   data: T;
   next: Node<T> | null;

   constructor(data: T) {
      this.data = data;
      this.next = null;
   }
}

export class LinkedList<T> {
   head: Node<T> | null;

   constructor() {
      this.head = null;
   }

   // Insert a node at the beginning of the list
   public insertAtBeginning(data: T): void {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
   }
}
