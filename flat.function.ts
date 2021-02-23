
let flatArray = [
    [
        { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 },
        { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 },
        { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 },
        { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 },
    ]
]

console.log('before change')
console.log(flatArray)


console.log('after change')
console.log(flatArray.flat(1))

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat())
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat())
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2))
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity))
