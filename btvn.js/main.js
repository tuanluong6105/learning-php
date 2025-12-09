document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(e);

  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let mess = document.getElementById("message");
  if (user === "" || pass === "") {
    mess.textContent = "Vui lòng nhập đầy đủ thông tin";
    mess.className = "error";
  } else {
    mess.textContent = "Thành công";
    mess.className = "success";
  }
});