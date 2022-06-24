
// flot
// number
// console.log(Number.MAX_VALUE);
// console.log(0o10);
// console.log(0b10);
// console.log(0xf10);
// console.log(Number.parseInt('123'));
// console.log(Number.parseFloat('123.123'));
// console.log(Infinity);
// console.log(-Infinity);

//type of

// console.log(typeof 123);


// //1.2


// let x = parseInt('11' + '22');
// console.log(x);

// let y= parseFloat('11' + '22.12');
// console.log(y);


// //1.5
// let a = 'hello';
// a.length;
// let b=a.indexOf('o');
// let c=a.replace('o','raju');
// console.log(b);
// console.log(c);

// // trem

// let s = '    helloDad   ';
// let t = s.trim().toLocaleLowerCase()
// console.log(t);

//web_aplicAation
const hello = document.querySelector('#hello');
const hed = document.querySelector('#hed');
const result = document.querySelector('#results');

hed.addEventListener('keypress', () => {
    const macth = hello.value.indexOf(hed.value);

    if (macth === -1) {
        result.innerHTML = `thes is ${hed.value}`;
    } else {
        result.innerHTML = ` ${hed.value} ${macth}`;
    }
});
console.log(hed);