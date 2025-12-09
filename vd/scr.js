function replaceElement() {
  // lấy phần tử ảnh cần thay
  let image = document.getElementById("img");

  // tạo phần tử mới (đoạn văn)
  let newElement = document.createElement("p");
  newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn";
  newElement.style.fontSize = "18px";
  newElement.style.fontWeight = "bold";
  newElement.style.color = "red";

  // lấy phần tử cha của ảnh
  let parent = image.parentNode;

  // thay thế ảnh bằng đoạn văn
  parent.replaceChild(newElement, image);
}