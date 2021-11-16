import {eratosthenesSieve, range} from "@/math";

describe('Mathematical Tests', () => {
  test('range function', () => {
    expect(range(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
    expect(range(1, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  test('Sieve of Eratosthenes', () => {
    expect(eratosthenesSieve(1).length).toBe(0);
    expect(eratosthenesSieve(7)).toStrictEqual([2, 3, 5, 7]);
  });
});