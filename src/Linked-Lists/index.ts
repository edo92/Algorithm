import { LinkedList } from './Singly-Linked-List';

const list = new LinkedList<number>();
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtBeginning(1);
list.append(4);
list.display(); // Output: 1 -> 2 -> 3 -> 4 -> null
