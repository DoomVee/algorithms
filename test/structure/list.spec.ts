import {List} from "@/structure/list";

describe('Doubly Linked List Specifications', function () {
    test('General Test', () => {
        let list: List<string> = new List<string>();
        list.append('mrdudebro1 (ping/...');
        list.append('The Highlander (he...');
        list.append('Watchout');
        list.push('Krista');
        list.push('Doomer');
        expect(list.toString()).toBe("[Doomer, Krista, mrdudebro1 (ping/..., The Highlander (he..., Watchout]");
    });
});