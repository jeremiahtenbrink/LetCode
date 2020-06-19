var lengthOfLongestSubstring = function( s ){
  
  let longest = 0;
  s = s.split( "" );
  let prevSTr = "";
  s.forEach( letter => {
    if( prevSTr.includes( letter ) ){
      let ind = prevSTr.indexOf( letter );
      let res = prevSTr.slice( ind + 1, prevSTr.length );
      prevSTr = res;
      prevSTr += letter;
    }else{
      prevSTr += letter;
      if( prevSTr.length > longest ){
        longest = prevSTr.length;
      }
    }
  } );
  
  return longest;
};

console.log( lengthOfLongestSubstring("bpfbhmipx" ) );
