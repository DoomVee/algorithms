import {sort} from "@/algorithm/merge.sort";

describe('Sorting / Merge Sort', () => {
  test('Check Normal Sorting', () => {
    let experiment: number[] = sort([3, 4, 1, 8, 9, 0]);
    expect(experiment).toStrictEqual([0, 1, 3, 4, 8, 9]);
  });
});