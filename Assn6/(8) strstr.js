function strstr (s, p) {
  var badMatchTable = {};
  var maxOffset = s.length - p.length;
  var offset = 0;
  var last = p.length - 1;
  var scan;

  if (last < 0) return 0;
  // Generate the bad match table, which is the location of offsets
  // to jump forward when a comparison fails
  for (var i = 0; i < p.length - 1; i++) {
      badMatchTable[p[i]] = last - i;
  }

  // Now look for the needle
  while (offset <= maxOffset) {
      // Search right-to-left, checking to see if the current offset at 
      // needle and haystack match.  If they do, rewind 1, repeat, and if we 
      // eventually match the first character, return the offset.
      for (scan=last; p[scan] === s[scan+offset]; scan--) {
          if (scan === 0) {
            return offset;
          }
      }

      offset += badMatchTable[s[offset + last]] || last || 1;
  }

  return -1;
}

let s="Geeks for Geeks";
let p="ks ";

console.log(strstr(s,p));