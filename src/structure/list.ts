export class List<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;

    push(value: T) {
        if(this.head) {
            this.head.insertBefore(value);
            this.head = this.head.prev;
        } else {
            this.head = new Node<T>(value);
            this.tail = this.head;
        }
    }

    append(value: T) {
        if(this.tail) {
            this.tail.insertAfter(value);
            this.tail = this.tail.next;
        } else {
            this.head = new Node<T>(value);
            this.tail = this.head;
        }
    }

    toString(): string {
        return `[${this.head?.toString()}]`;
    }
}

export class Node<T> {
    data: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    constructor(data: T, ...nodes: Array<Node<T> | null>) {
        this.data = data;
        if(nodes) {
            this.prev = nodes.length > 0 ? nodes[0] : null;
            this.next = nodes.length > 1 ? nodes[1] : null;
        }
    }

    insertAfter(data: T) {
        if(this.next) {
            let middle = new Node(data, this, this.next);
            this.next.prev = middle;
            this.next = middle;
        } else {
            this.next = new Node(data, this);
        }
    }

    insertBefore(data: T) {
        if(this.prev) {
            let middle = new Node(data, this.prev, this);
            this.prev.next = middle;
            this.prev = middle;
        } else {
            this.prev = new Node(data, null, this);
        }
    }

    toString(): string {
        if(this.next) {
            return `${this.data}, ` + this.next.toString();
        } else {
            return `${this.data}`;
        }
    }
}