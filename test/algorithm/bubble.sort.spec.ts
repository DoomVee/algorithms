import {numericSort, sort} from "@/algorithm/bubble.sort";

describe('Sorting / Bubble Sort', () => {
  test('Check Normal Sorting', () => {
    let experiment: number[] = [3, 4, 1, 8, 9, 0];
    sort(experiment);
    expect(experiment).toStrictEqual([0, 1, 3, 4, 8, 9]);
  });

  test('Check Numeric Sorting', () => {
    let experiment: number[] = [3, 4, 1, 8, 9, 0];
    numericSort(experiment);
    expect(experiment).toStrictEqual([0, 1, 3, 4, 8, 9]);
  });
});