package soal19;

import java.util.*;

class LinkedList {
  static Node head;

  static class Node {
    int value;
    Node next;
    Node(int d) {
      value = d;
      next = null;
    }
  }

  public void push(int new_data) {
    Node new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
  }

  public boolean checkLoop() {
    Node first = head;
    Node second = head;

    while(first != null && first.next != null) {
      first = first.next.next;
      second = second.next;

      if(first == second) {
        return true;
      }
    }
    return false;
  }
 
  public static void main(String[] args) {
    LinkedList linkedList = new LinkedList();

    Scanner scan = new Scanner(System.in);
    System.out.println("Enter the number of element: ");
    int number = scan.nextInt();
    
    while(number > 0) {
      linkedList.push(scan.nextInt());
      number--;
    }
    scan.close();
    System.out.println();

    System.out.print("Linkedlist: ");
    int i = 1;
    while (i <= number) {
      System.out.print(linkedList.head.value + " ");
      linkedList.head = linkedList.head.next;
      i++;
    }

    if(detectLoop(linkedList.head))
      System.out.println("\n1");
    else
      System.out.println("\n0");

    // boolean loop = linkedList.checkLoop();
    // if(loop) {
    //   System.out.println("\n loop found");
    // } else {
    //   System.out.println("\n no loop");
    // }
  }

  static boolean detectLoop(Node first) {
    System.out.println("\n" + first.next.value);

    if(first == null)
    return false;

    Node slow, fast;
    slow = fast = first;
    while(true) {
      slow = slow.next;
      if(fast.next != null)
      fast = fast.next.next;
      else
      return false;

      if(slow == null || fast == null)
      return false;

      if(slow == fast)
      return true;
    }
  }
}
