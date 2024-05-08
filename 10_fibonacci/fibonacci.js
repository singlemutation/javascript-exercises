const fibonacci = function(num) {
    num = parseInt(num);
    if (num === 0) {
      return 0;
    };
    if (num < 0) {
      return 'OOPS';
    }
    let fib = [];
    for (let i = 0; i < num; i++) {
      if ((i === 0) || (i === 1)) {
        fib.push(1);
      } else {
        fib.push((fib[i - 1] + fib[i - 2]))
      }
    }
    return fib[fib.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
