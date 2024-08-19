export class MinHeap {
   private heap: number[];

   constructor() {
      this.heap = [];
   }

   public insert(value: number): void {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
   }

   public extractMin(): number | null {
      if (this.heap.length === 0) {
         return null;
      }

      if (this.heap.length === 1) {
         return this.heap.pop()!;
      }

      const root = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.heapifyDown(0);

      return root;
   }

   public peek(): number | null {
      if (this.heap.length === 0) {
         return null;
      }

      return this.heap[0];
   }

   public size(): number {
      return this.heap.length;
   }

   public isEmpty(): boolean {
      return this.heap.length === 0;
   }

   private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
   }

   private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
   }

   private getRightChildIndex(index: number): number {
      return 2 * index + 2;
   }

   private swap(index1: number, index2: number): void {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
   }

   private heapifyUp(index: number): void {
      let parentIndex = this.getParentIndex(index);

      while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
         this.swap(parentIndex, index);
         index = parentIndex;
         parentIndex = this.getParentIndex(index);
      }
   }

   private heapifyDown(index: number): void {
      let smallest = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
         smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
         smallest = rightChildIndex;
      }

      if (smallest !== index) {
         this.swap(index, smallest);
         this.heapifyDown(smallest);
      }
   }
}
