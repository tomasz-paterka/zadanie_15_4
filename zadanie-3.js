const average = (...args) => args.reduce((a,b) => a+b) / args.length;


console.log(average(1, 3, 6, 6));
console.log(average(1));
console.log(average(1, 3));