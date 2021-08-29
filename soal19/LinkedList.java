package soal19;

import java.util.*;

public class LinkedList {

	static Node head; 

	static class Node {
		int data;
		Node next;
		Node(int d)
		{
			data = d;
			next = null;
		}
	}

	static public void push(int new_data)
	{
		Node new_node = new Node(new_data);
		new_node.next = head;
		head = new_node;
	}
	static boolean detectLoop(Node h)
	{
		HashSet<Node> s = new HashSet<Node>();
		while (h != null) {
			if (s.contains(h))
				return true;

			s.add(h);

			h = h.next;
		}

		return false;
	}

	public static void main(String[] args)
	{
		LinkedList llist = new LinkedList();

    Scanner scan = new Scanner(System.in);
    System.out.println("Enter the number of element: (4) ");
    int number = scan.nextInt();
    
    while(number > 0) {
      llist.push(scan.nextInt());
      number--;
    }
    scan.close();
    
		llist.head.next.next.next.next = llist.head;

		if (detectLoop(head))
			System.out.println("1");
		else
			System.out.println("0");
	}
}

/*
Sample input:
Enter the number of element: (4) 
4
1 2 3 1

Sample output:
1
*/

