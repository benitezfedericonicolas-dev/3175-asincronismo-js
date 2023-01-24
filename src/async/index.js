const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
            setTimeout(() => resolve('async string'), 3000) :
            reject(new Error('Error string'));
    });
};

const anotherFn = async () => {
        const something =  fnAsync();
    const something2 =  fnAsync();
    console.log(something);
    console.log('random string 1');
    console.log(something2);
    console.log('random string 4');
}

console.log('random string 2');
anotherFn();
console.log('random string 3');
