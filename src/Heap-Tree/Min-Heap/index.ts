import { MinHeap } from './Min-Heap';

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);

console.log(minHeap.extractMin()); // 10
console.log(minHeap.peek()); // 15
console.log(minHeap.size()); // 3
console.log(minHeap.isEmpty());
