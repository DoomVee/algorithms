export function range(start: number, end: number) {
  return new Array<number>(end - start + 1)
    .fill(0)
    .map((_, i) => i + start);
}

export function eratosthenesSieve(int: number): Array<number> {
  if(int < 2) return [];
  let array = range(2, int);

  for(let i = 2; i <= int; i++) {
    if(array.includes(i)) {
      array = array.filter(v => v === i || v % i !== 0);
    }
  }
  return array;
}