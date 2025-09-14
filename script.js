const byteSize = (str) => {
  // write your code here
	
	console.log(byteSize('hello world')); // 11
console.log(byteSize('안녕하세요'));   // 15
console.log(byteSize(''));
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
