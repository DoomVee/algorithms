import {LinkedList} from "@/struct/linked-list";

describe('Data Structures / Linked List', () => {
  test('linked list (number) instance test', () => {
    let list: LinkedList<number> = new LinkedList<number>();
    expect(list.toString()).toBe('[]');
    expect(list.size()).toBe(0);
    expect(() => list.get(0))
      .toThrowError("IndexOutOfBoundsException");
  });

  test('linked list (string) insertion', () => {
    let list: LinkedList<string> = new LinkedList<string>();
    list.add("Doomer");
    list.add("Canter");
    list.add("Duke");
    list.add("Forb");
    expect(list.size()).toBe(4);
    expect(list.get(0)).toBe("Doomer");
    expect(list.get(3)).toBe("Forb");
  });

  test('linked list (bigint) removal', () => {
    let list: LinkedList<bigint> = new LinkedList<bigint>();
    for(let i = 0n; i < 10n; i += 2n) {
      list.add(i);
    }
    expect(list.size()).toBe(5);
    list.remove(2n);
    list.remove(8n);
    expect(list.get(0)).toBe(0n);
    expect(list.get(1)).toBe(4n);
    expect(list.get(2)).toBe(6n);
  });

  test('linked list (boolean) bulk operations', () => {
    let list: LinkedList<boolean> = new LinkedList<boolean>();
    list.addAll(false, true, true, false, true, true, false, true);
    list.addAll(true, true, true, true, true, true, true, true);
    expect(list.size()).toBe(16);
    list.removeAll((v: boolean) => v);
    expect(list.size()).toBe(3);
  });

  test('linked list - misc.', () => {
    let list: LinkedList<number> = new LinkedList<number>(1, 2, 3, 4);
    expect(list.contains(1)).toBeTruthy();
    expect(list.peek()).toBe(1);
    expect(list.contains(1)).toBeTruthy()
    expect(list.poll()).toBe(1);
    expect(list.contains(1)).toBeFalsy();
    while(list.size() > 0) {
      list.poll();
    }
    expect(list.poll()).toBeNull();
  });

  test('linked list - stringify', () => {
    let list: LinkedList<number> = new LinkedList<number>(1, 2);
    expect(list.toString()).toBe("[1, 2]");
  });

  test('linked list - exceptions', () => {
    let list: LinkedList<number> = new LinkedList<number>(1, 2, 3);
    expect(() => list.get(-1)).toThrowError("IndexOutOfBoundsException");
    expect(() => list.get(3)).toThrowError("IndexOutOfBoundsException");
    expect(() => list.get(0)).not.toThrowError("IndexOutOfBoundsException");
    list.clear();
    expect(() => list.get(0)).toThrowError("IndexOutOfBoundsException");
  });
});