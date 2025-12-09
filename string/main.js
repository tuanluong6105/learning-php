// Khai báo chuỗi
let text = "JavaScript là một ngôn ngữ lập trình tuyệt vời";
// lấy độ dài
console.log("Độ dài chuỗi: ", text.length);
// Lấy ký tự trong chuỗi
console.log("Ký tự đầu tiên: ", text.charAt(0));
console.log("Mã ÁCII của ký tự đầu: ", text.charCodeAt(0));
console.log("DÙng cú pháp []: ", text[0]);
// Cắt chuỗi
console.log("slice(2, 10): ", text.slice(2, 10));
console.log("substring(2, 10): ", text.substring(2, 10));
console.log("substr(2, 10): ", text.substr(2, 10));
// chuyển đổi chữ hoa, chữ thườngh
console.log("Viết hoa: ", text.toUpperCase());
console.log("Viết thường: ", text.toLowerCase());
// nối chuối
let str1 = "Xin chào";
let str2 = "JavaScript";
console.log("Nối bằng concat():", str1.concat(" ", str2));
console.log("Nối bằng dấu + :", str1 + " " + str2);
// loại bỏ khoảng trắng
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());
//kiểm tra chuỗi
console.log("Chuỗi có chứa 'JavaScript'?", text.includes("JavaScript"));
console.log(
  "Chuỗi có chữa bắt đầu bằng 'JavaScript'?",
  text.startsWith("JavaScript")
);
console.log("Chuỗi có kết thúc bằng 'vời!'?", text.endsWith("vời!"));
//tìm kiếm chuỗi
//thay thế chuỗi
// tách chuỗi
// sử dụng Template Literals
// Chuỗi nhiều dòng với Template Literals