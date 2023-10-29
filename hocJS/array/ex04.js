/*
- Vòng lặp reduce(callback, initialValue)

callback có 3 tham số:
- prey:
    + TH1: ko có iniitialValue:
        Lần lặp thứ nhất: prev chính là phần tử mảng đầu tiên
        Lần lặp thứ hai trở đi: prev là return của lần lặp trước
        => Bớt đi 1 lần lặp

    + TH2: Có iniitialValue
        Lần lặp thứ nhất: prev chính là giá trị iniitialValue
        Lần lặp thứ hai trở đi: prev là return của lần lặp trước

- current: giá trị các phần tử mảng
- index: index của từng phần tử

=> Giá trị trả về của reduce là lần return cuối cùng của callback
*/
var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, current, index) {
//     console.log(`P = ${prev}, C = ${current}, I = ${index}`);
//     return current;
// }, 0);
// console.log(result);

var result = numbers.reduce(function (prev, current) {
   console.log(prev, current);
   return prev + current;
}, 0);
console.log(`Result = ${result}`);

/*
- Lần 1: prev = 0, current = 5 => return 5
- Lần 2: prev = 5, current = 10 => return 15
- Lần 3: prev = 15, current = 15 => return 30
- Lần 4: prev = 30, current = 20 => return 50
- Lần 5: prev = 50, current = 25 => return 75 => kết quả cuối cùng
*/

// Bài Tập: Tìm phần tử lớn nhất trong mảng, dùng reduce
var numbers = [2, 9, -1, 6, 8];
// Cach 1
var result = numbers.reduce(function (prev, current) {
   if (current < prev) return prev;
   return current;
});
console.log(result);

/*
Cho trước 2 danh sách học viên :
1. Tất cả học viên

2. Học viên đã điểm danh

Trả về dánh sách học viên chưa điểm danh (dùng reduce)
*/

// All Students
var students = ["An", "Dương", "Vương", "Hải", "Khang"];

// Active Students
var studentActive = ["Dương", "Hải", "Vương"];

// ["An", "Khang"]

var studentInactive = students.reduce(function (prev, current) {
   // console.log(prev, current);
   if (!studentActive.includes(current)) {
      prev.push(current);
   }
   return prev;
}, []);

console.log(studentInactive);

/*
Buổi sau:
- Tham chiếu trong Array
- Copy Array: Deep và Shallow
- Array-like Object
- Array.from()
- Tìm hiểu về Object: literal Object, function Constructor
*/
