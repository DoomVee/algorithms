export class Stack<T> {
    head: Node<T> | null = null;

    push(data: T) {
        this.head = new Node<T>(data, this.head);
    }

    pop(): T | null {
        if(this.head) {
            let data = this.head.data;
            this.head = this.head.next;
            return data;
        }
        return null;
    }

    peek(): T | null {
        return this.head ? this.head.data : null;
    }

    toString(): string {
        let reverse: Stack<T> = new Stack<T>();
        let result: string = '';

        while(this.head) {
            let data: T = this.pop()!;
            result += ', ' + data;
            reverse.push(data);
        }
        result = result.substr(2);
        while(reverse.head) {
            this.push(reverse.pop()!);
        }
        return `[${result}]`;
    }
}

export class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T, next: Node<T> | null) {
        this.data = data;
        this.next = next;
    }
}