import {eratosthenesSieve, floorPowerOfTwo, range, xorSwap} from "@/math";

describe('Sieve of Eratosthenes Tests', () => {
  test('range function', () => {
    expect(range(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
    expect(range(1, 4)).toStrictEqual([1, 2, 3, 4]);
  });

  test('Sieve of Eratosthenes', () => {
    expect(eratosthenesSieve(1).length).toBe(0);
    expect(eratosthenesSieve(7)).toStrictEqual([2, 3, 5, 7]);
  });
});

describe('Mathematical Utilities', () => {
  test('floorPowerOfTwo', () => {
    expect(floorPowerOfTwo(256)).toBe(256);
    expect(floorPowerOfTwo(255)).toBe(128);
    expect(floorPowerOfTwo(128)).toBe(128);
    expect(floorPowerOfTwo(127)).toBe(64);
    expect(floorPowerOfTwo(64)).toBe(64);
    expect(floorPowerOfTwo(63)).toBe(32);
    expect(floorPowerOfTwo(32)).toBe(32);
    expect(floorPowerOfTwo(4)).toBe(4);
    expect(floorPowerOfTwo(3)).toBe(2);
    expect(floorPowerOfTwo(2)).toBe(2);
    expect(floorPowerOfTwo(1)).toBe(1);
  });

  test('xor swap', () => {
    expect(xorSwap([5, 7], 0, 1)).toStrictEqual([7, 5]);
  });
});