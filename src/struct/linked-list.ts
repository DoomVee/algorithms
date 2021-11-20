export class LinkedList<T> {
  private head: LinkedNode<T>;

  constructor(...content: T[]) {
    this.head = LinkedLeafNode.getInstance();
    if(content && content.length > 0) {
      this.addAll(...content);
    }
  }

  add(content: T) {
    this.head = this.head.add(content);
  }

  addAll(...content: T[]) {
    this.head = this.head.addAll(...content);
  }

  get(index: number) {
    return this.head.get(index);
  }

  poll(): T | null {
    let prev = this.head;
    this.head = this.head.remove();
    return prev.data;
  }

  peek(): T | null {
    return this.head.data;
  }

  remove(content: T) {
    this.head = this.head.remove(content);
  }

  removeAll(filter: (value: T, index: number) => boolean) {
    this.head = this.head.removeAll(filter, 0);
  }

  contains(content: T) {
    return this.head.contains(content);
  }

  size() {
    return this.head.size();
  }

  clear() {
    this.head = LinkedLeafNode.getInstance();
  }

  toString(): string {
    return `[${this.head.toString().substr(2).trim()}]`;
  }
}

interface LinkedNode<T> {
  data: T | null;
  next: LinkedNode<T> | null;

  add(content: T): LinkedNode<T>;
  addAll(...content: T[]): LinkedNode<T>;
  get(index: number): T;
  remove(content?: T): LinkedNode<T>;
  removeAll(filter: (value: T, index: number) => boolean, index: number): LinkedNode<T>;
  contains(content: T): boolean;
  size(): number;
}

class LinkedDataNode<T> implements LinkedNode<T> {
  data: T;
  next: LinkedNode<T>;

  constructor(data: T, next: LinkedNode<T>) {
    this.data = data;
    this.next = next;
  }


  add(content: T): LinkedNode<T> {
    this.next = this.next.add(content);
    return this;
  }

  addAll(...content: T[]): LinkedNode<T> {
    this.next = this.next.addAll(...content);
    return this;
  }

  contains(content: T): boolean {
    if(this.data === content) {
      return true;
    } else {
      return this.next.contains(content);
    }
  }

  get(index: number): T {
    if(index === 0) {
      return this.data;
    } else if(index < 0) {
      throw new Error('IndexOutOfBoundsException');
    } else {
      return this.next.get(index - 1);
    }
  }

  remove(content?: T): LinkedNode<T> {
    if(content === undefined || this.data === content) {
      return this.next;
    } else {
      this.next = this.next.remove(content);
      return this;
    }
  }

  removeAll(filter: (value: T, index: number) => boolean, index: number): LinkedNode<T> {
    if(filter(this.data, index)) {
      return this.next.removeAll(filter, index + 1);
    } else {
      this.next = this.next.removeAll(filter, index + 1);
      return this;
    }
  }

  size(): number {
    return this.next.size() + 1;
  }

  toString(): string {
    return `, ${this.data}` + this.next.toString();
  }
}

class LinkedLeafNode<T> implements LinkedNode<T> {
  data: null = null;
  next: null = null;

  // Singleton
  private constructor() { }

  private static instance: LinkedLeafNode<any>;
  static getInstance<T>(): LinkedLeafNode<T> {
    if(!LinkedLeafNode.instance) {
      LinkedLeafNode.instance = new LinkedLeafNode<T>();
    }
    return LinkedLeafNode.instance;
  }

  add(content: T): LinkedNode<T> {
    return new LinkedDataNode(content, this);
  }

  addAll(...content: T[]): LinkedNode<T> {
    let part: LinkedNode<T> = this;
    content.reverse().forEach((value) => {
      part = new LinkedDataNode(value, part);
    });
    return part;
  }

  contains(content: T): boolean {
    return false;
  }

  get(index: number): T {
    throw new Error('IndexOutOfBoundsException');
  }

  remove(content?: T): LinkedNode<T> {
    return this;
  }

  removeAll(filter: (value: T, index: number) => boolean, index: number): LinkedNode<T> {
    return this;
  }

  size(): number {
    return 0;
  }

  toString(): string {
    return '  ';
  }
}