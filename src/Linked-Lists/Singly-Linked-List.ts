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
}
