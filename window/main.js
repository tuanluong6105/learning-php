// truy xuất bằng ID
let title = document.getElementById("title");
title.style.color = "blue";
// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px";
// Truy xuất bằng class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold";
// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow";

let allItems = document.querySelectorAll("#list li");
allItems.forEach((item) => {
  item.style.margin = "10px";
});
// Hàm thay đổi nội dung khi click button
function changeText() {
  title.textContent = "Nội dung đã thay đổi!";
  descriptions[0].classList.add("highlight");
  // thêm class để đổi màu chữ
}