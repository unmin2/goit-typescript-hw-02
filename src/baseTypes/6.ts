/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/


export { };
function showMessage(message: any) {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void {
  throw new Error('Error');
}
