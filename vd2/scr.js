function getStyle() {
  let element = document.getElementById("text");
  // lấy style thực tế đang áp dụng lên phần tử
  let style = window.getComputedStyle(element);

  let color = style.color;
  let fontSize = style.fontSize;
  let fontWeight = style.fontWeight;

  document.getElementById(
    "result"
  ).innerHTML = `Màu chữ: ${color} <br> Kích thước chữ: ${fontSize} <br> Độ đậm: ${fontWeight}`;
}

function setStyle() {
  let element = document.getElementById("text");
  element.style.color = "red";
  element.style.fontSize = "25px";
  element.style.fontWeight = "normal";
  element.style.backgroundColor = "yellow";
}