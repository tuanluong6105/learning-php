<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Tài liệu học Lập trình Web</h1>
    <?php
        echo "<hr>";
    ?>
    <p>Tài liệu học HTML</p>
    <p>Tài liệu học CSS</p>
    <?php
        echo "<h2> Tài liệu học JavaScript</h2>";
        echo "<h3> Tài liệu học MySQL</h3>";
        echo "<h4> Tài liệu học PHP</h4>";
    ?>
    <hr>
    <?php
        $text = "Từ cơ bản" . " " . "đến nâng cao";
        echo $text;
    ?>
    <hr>
    <!-- Biến -->
     <?php
        echo "<h3> Biến</h3>";
     $name = "Nguyễn Minh Đức";
     $year = "2000";
     $city = 'Hà Nội';
     echo "<p>Giá trị của biến name $name";
     echo "<p>Giá trị của biến year $year";
     echo "<p>Giá trị của biến city $city";
     ?>
     <hr>
    <!-- Phạm vi hoạt động của biến -->
    <?php
        echo "<h3> Phạm vi hoạt động của biến</h3>";
    ?>
     <?php
        function Test() {
            $a =5;
            echo $a;  // phạm vi cục bộ
        }
        Test();  //5
        //echo $a; //không có
    ?> 

    <?php
        echo"<br>";
    $a =1;
    $b = 2;
    function Sum() {
        global $a, $b;
        $b = $a + $b;
    }
    Sum();
    echo $b;  //3 
    ?>
    <!-- Hằng -->
    <?php
        echo "<h3>Hằng</h3>";
        // Khai báo hằng số PI có giá trị là 3.14
        define('PI', 3.14);
        echo PI; // Xuât ra màn hình
    ?>
    <!-- Xuất biến -->
    <?php
    echo "<h3>Xuất biến</h3>";
        $name = "Hà Nội";
        echo "Thành phố: " .$name;
    ?>
    <?php
    echo "<h3>Xuất nhiều giá trị cùng lúc</h3>";
        echo "PHP", " ", "là", " ", "tuyệt vời";
    ?>
    <?php
    echo "<h3>Chuyển kiểu tự động</h3>";

    $x = "10"+5;   // 10 được chuyển thành số nguyên
    echo $x;
    echo "<br>";
    $y="5". 10;  //kq: "510"(chuỗi)
    echo $y;
    ?>
    <?php
    echo "<h3>Vòng lặp foreach</h3>";
    $arr  = array (1,2,3,4,5);
    foreach($arr as $x){
        echo $x;
    }
    ?>
    <?php
    echo "<h3>Kiểm tra tồn tại isset</h3>";
    if(isset($_POST["ten_dang_nhap"]))
        echo"Xin chào".$_POST["ten_dang_nhap"];
    else {
        echo"Vui lòng nhập tên đăng nhập";
    }
    ?>
    <?php
    echo "<h3>Kiểm tra rỗng</h3>";
    if(empty($_POST["ten_dang_nhap"])) {
        echo"Vui lòng nhập tên đăng nhập";
        exit;
    } else {
        echo"Xin chào".$_POST["ten_dang_nhap"];
    }
    ?>
    <?phpg
    echo "<h3>Kiểm tra trị kiểu số</h3>";
    $don_gia = 1000;
    if(is_numeric($_POST["so_luong"])) {
        $so_luong = $_POST["so_luong"];
        $thanh_tien = $so_luong * $don_gia;
        echo "Thành tiền là: ".$thanh_tien;
    }
    else {
        echo "Số lượng phải là kiểu số";
    }
    ?>
</body>
</html>