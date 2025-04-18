import { formatCurreny } from "../../scripts/utils/money.js";

console.log('converts cents into dollars');

if (formatCurreny(2095) == '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}



console.log('works with 0');

if(formatCurreny(0) === '0.00'){
  console.log('passed')
}else{
  console.log('failed')
}

console.log('rounds up to nearest cent');

if(formatCurreny(2000.5) === '20.01'){
  console.log('passed')
}else{
  console.log('failed')
}
