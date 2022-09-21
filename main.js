// let str = `
// 010-1234-5678
// eun210818@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 가나다라_마바사 아자차카
// `

// // // const regexp = new RegExp('the', 'gi');
// // const regexp = /fox/gi
// // // console.log(regexp.test(str));
// // str = str.replace(regexp, 'AAA');
// // console.log(str);

// // const regexp = /the/gi;
// // console.log(str.match(regexp));

// // console.log(str.match(/\.$/gim));

// // console.log(str.match(/^T/gm));

// // console.log(str.match(/h..p/g));

// console.log(str.match(/fox|dog/g));

// console.log(str.match(/https?/g));

// console.log(str.match(/\b\w{2,3}\b/g));

// console.log(str.match(/[0-9]{1,}/g));

// console.log(str.match(/[가-힣]{1,}/g));

// console.log(str.match(/\w/g));

// console.log(str.match(/\bf\w{1,}\b/g));

// console.log(str.match(/\d{1,}/g));

// const h = `  the hello  world   !

// `
// console.log(h.replace(/\s/g, ''));

//// ----------------------------------------------------------------------------------------------------------------------------------------
const str = `
010-1234-5678
eun210818@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// console.log(str.match(/.{1,}(?=@)/g));

console.log(str.match(/.{1,}(?<=@)/g));
console.log(str.match(/(?<=@).{1,}/g));