function printArray(start, end) {
  // let isValidNums = typeof start == 'number' && typeof end == 'number';

  // if (!isValidNums) {
  //   console.log("숫자값을 넣어주세요")
  //   return;
  // }
  if (isNaN(start) || isNaN(end)) {
    console.log("숫자값을 넣어주세요")
    return;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  result = '';
  for (let i = start; i <= end; i++)
    result += i + " ";
  console.log(result);
}
printArray(1, 5);

printArray(6, 15);

printArray(15, 4);

printArray('test', 4);

