const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// find any row with a negative number using Pormise.any

function findNegativesInRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx && rowIdx >= 0) {
            arr[rowIdx].filter((e) => e <0 ).length > 0 ? resolve(`Found Negatives in row: ${rowIdx}`) : reject('Not Found')
        }
        else {
            reject(`Invaid row index ${rowIdx}`);
        }
    });
}
Promise.any(array2D_3.map((_:number[], idx: number) => findNegativesInRow(array2D_3, idx))).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(`Error Msg: ${error}`); 
});