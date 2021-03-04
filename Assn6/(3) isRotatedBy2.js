function isRotatedBy2(a, b){

  if(a.length!==b.length||a.length<3){
    return false;
  }

  let result;

  switch(b){
    case a.substring(2)+a.substring(0,2):
      result = true;
      break;
    case a.substring(a.length-4)+a.substring(0,a.length-4):
      result = true;
      break;
    default:
      result = false;
  }
  return result;  
};



console.log(isRotatedBy2("relative", "tire"));

