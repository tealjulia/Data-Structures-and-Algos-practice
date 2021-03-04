//subtract ascii value of the digit minus ascii value of zero (48)
//should be between 0 to 9, else it is a stray character 
//if is -3, then subtract numbers; if is -5, add numbers, if is -4 ignore
//multiply by 10 and add new value

var myAtoi = function(s) {
  const p = s.match(/^["'\s"]*([-+]?\d+)/)
  const INT_MAX = 2**31 -1;
  const INT_MIN = 2**31 * -1;

  let n = (p) ? Number(p[0]) : null;
  n = (n >= INT_MAX) ? INT_MAX : n;
  n = (n < INT_MIN) ? INT_MIN : n;


  return n;
};

console.log(myAtoi("   -42"));