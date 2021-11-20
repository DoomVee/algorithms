export function sort<T>(array: T[]) {
    return mergeSort(array);
}

function mergeSort<T>(array: T[]) {
    if(array.length <= 1) {
        return array;
    }

    let left = mergeSort(array.slice(0, Math.floor(array.length/2)));
    let right = mergeSort(array.slice(Math.floor(array.length/2), array.length));

    return merge(left, right);
}

function merge<T>(left: T[], right: T[]) {
    let result: T[] = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
            result.push(left.shift()!);
        } else {
            result.push(right.shift()!);
        }
    }

    return result.concat(left).concat(right);
}