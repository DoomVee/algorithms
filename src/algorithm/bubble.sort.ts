export function sort<T>(arr: T[]) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        let tmp: T = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

export function numericSort(arr: number[]) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        arr[j+1] = arr[j+1] ^ arr[j];
        arr[j] = arr[j] ^ arr[j+1];
        arr[j+1] = arr[j+1] ^ arr[j];
      }
    }
  }
}