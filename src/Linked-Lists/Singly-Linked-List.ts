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

   // Append a node to the end of the list
   public append(data: T): void {
      const newNode = new Node(data);

      if (this.head === null) {
         this.head = newNode;
         return;
      }

      let current = this.head;
      while (current.next !== null) {
         current = current.next;
      }
      current.next = newNode;
   }
}
