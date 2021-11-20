import { sort } from "@/sorting/merge-sort";

describe('Sorting / Merge Sort', function () {
    test('Check Normal Sorting', () => {
        let experiment: number[] = [3, 4, 1, 8, 9, 0];
        sort(experiment);
        expect(experiment).toStrictEqual([0, 1, 3, 4, 8, 9]);
    });
});