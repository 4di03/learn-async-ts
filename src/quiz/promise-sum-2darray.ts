const array2D_1: number[][]= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(idx: number):Promise<number> {

    return new Promise((resolve, reject) => {
        try{
        let sum = 0;
        for (let i = 0; i < array2D_1[idx].length; i++) {
            sum +=  array2D_1[idx][i];
        }
        resolve(sum);
        } catch(err) {
            reject(err);
        }
    });
}

Promise.all(array2D_1.map((_, idx) => sumRow(idx))).then((sums : number[]) => {

    console.log('Total Sum:', sums.reduce((acc : number, sum: number) => acc + sum, 0)); 
}).catch(err => console.log(err));