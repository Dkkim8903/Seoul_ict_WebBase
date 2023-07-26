// Case 1: 변수에 값 할당하지 않음
let variable1;
let variable2 = undefined;

// Case 2: 변수에 명시적으로 null 할당
let variable3 = null;

// Case 3: 객체의 속성에 값이 없을 때
let obj = { property: undefined };

// Case 4: 함수에서 반환값이 없을 때
function func1() {
  // 반환값이 없음
}

function func2() {
  return undefined;
}

function func3() {
  return null;
}

// 비교 연산자를 사용하여 변수의 값이 null 또는 undefined인지 확인
if (variable1 === null) {
  console.log('variable1 is null');
} else if (variable1 === undefined) {
  console.log('variable1 is undefined');
}

if (variable2 === null) {
  console.log('variable2 is null');
} else if (variable2 === undefined) {
  console.log('variable2 is undefined');
}

if (variable3 === null) {
  console.log('variable3 is null');
} else if (variable3 === undefined) {
  console.log('variable3 is undefined');
}

// 객체 속성의 값이 null 또는 undefined인지 확인
if (obj.property === null) {
  console.log('obj.property is null');
} else if (obj.property === undefined) {
  console.log('obj.property is undefined');
}

// 함수의 반환값이 null 또는 undefined인지 확인
if (func1() === null) {
  console.log('func1() returns null');
} else if (func1() === undefined) {
  console.log('func1() returns undefined');
}

if (func2() === null) {
  console.log('func2() returns null');
} else if (func2() === undefined) {
  console.log('func2() returns undefined');
}

if (func3() === null) {
  console.log('func3() returns null');
} else if (func3() === undefined) {
  console.log('func3() returns undefined');
}