# 📋 PHIẾU BÀI TẬP 07
# **JAVASCRIPT BASICS — Variables, Data Types, Control Structures**
> **Tài liệu tham chiếu:** `tuan_4_javascript_basics/01_basics_introduction.md` → `04_control_structures.md`
---
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — var / let / const
// Đoạn 1
console.log(x);
var x = 5;
Output:
undefined

// Đoạn 2
console.log(y);
let y = 10;
Output:
ReferenceError

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
Output:
TypeError: Assignment to constant variable.

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Output:
[1, 2, 3, 4]

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

Ví dụ lỗi:

arr = [5,6,7]; // TypeError
Output:

Trong block: 2
Ngoài block: 1
### Câu A2 (5đ) — Data Types & Coercion

Dự đoán kết quả
console.log(typeof null);        // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number"
console.log("5" + 3);            // "53"
console.log("5" - 3);            // 2
console.log("5" * "3");          // 15
console.log(true + true);        // 2
console.log([] + []);            // ""
console.log([] + {});            // "[object Object]"
console.log({} + []);            // 0   (trong Node.js thường là 0)
| Biểu thức | Kết quả | Lý do                                     |
| --------- | ------- | ----------------------------------------- |
| `"5" + 3` | `"53"`  | `+` dùng để nối chuỗi                     |
| `"5" - 3` | `2`     | `-` chỉ làm phép toán nên ép kiểu sang số |


### Câu A3 (5đ) — So sánh == vs ===
Dự đoán kết quả
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);              // false
console.log(0 == false);              // true
console.log(0 === false);             // false
console.log("" == false);             // true

Nên dùng === vì nó so sánh cả giá trị và kiểu dữ liệu, tránh các lỗi do JavaScript tự động ép kiểu khi dùng ==
### Câu A4 (5đ) — Truthy & Falsy
Dự đoán kết quả
if ("0") console.log("A");      // A
if ("") console.log("B");       // Không in
if ([]) console.log("C");       // C
if ({}) console.log("D");       // D
if (null) console.log("E");     // Không in
if (0) console.log("F");        // Không in
if (-1) console.log("G");       // G
if (" ") console.log("H");      // H

### Câu A5 (5đ) — Template Literals
Cách 1

Trước:

var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";

Template Literal:

var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
Cách 2

Trước:

var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;

Template Literal:

var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
Cách 3

Trước:

var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";

Template Literal:

var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
Ưu điểm của Template Literal

✅ Dễ đọc hơn

✅ Không cần nối chuỗi bằng +

✅ Không cần escape dấu ":

<div class="card">

thay vì:

"<div class=\"card\">"

✅ Hỗ trợ xuống dòng trực tiếp:

const message = `
Dòng 1
Dòng 2
Dòng 3
`;

