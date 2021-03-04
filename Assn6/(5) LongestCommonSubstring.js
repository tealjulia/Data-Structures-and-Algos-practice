// Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
//   Input : X = "abcdxyz", y = "xyzabcd"
//   Output : 4
//     The longest common substring is "abcd" and is oflength 4. 
//   Input : X = "zxabcdezy", y = "yzabcdezx"
//   Output : 6
//     The longest common substring is "abcdez" and is oflength 6.

function commonSub(x, y){

  //1. Create a table x axis is str1.length, y axis is str2.length.  Initialize max variable.
  let table = new Array(x.length);

  for (var i=0; i<table.length; i++){
    table[i] = new Array(y.length);
  }

  let max = 0




}


//2. Evaluate... is this character same?  Value is up and to left + 1.  Update max each time value is > 0 to be math.max of max, currentvalue.

//3. return max