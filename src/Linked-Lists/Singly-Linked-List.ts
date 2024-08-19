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

   // Delete a node with a specific value
   public delete(data: T): void {
      if (this.head === null) {
         return;
      }

      // If the head node is the one to be deleted
      if (this.head.data === data) {
         this.head = this.head.next;
         return;
      }

      let previous: Node<T> | null = null;

      while (this.head !== null && this.head.data !== data) {
         previous = this.head;
         this.head = this.head.next;
      }

      // If the node to be deleted was found
      if (this.head !== null && previous !== null) {
         previous.next = this.head.next;
      }
   }

   // Display the linked list
   public display(): void {
      let current = this.head;
      let result = '';

      while (current !== null) {
         result += current.data + ' -> ';
         current = current.next;
      }

      console.log(result + 'null');
   }
}
