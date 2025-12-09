<!-- Bài tập:
Tạo trang web sử dụng mã PHP để in ra dãy số từ 1 đến 100. Trong đó:
Các số chẵn in đậm và có chữ màu đỏ (red)
Các số lẻ in đậm, nghiên và có chữ màu xanh (green) -->

<?php
echo "<h2>In dãy số từ 1 đến 100</h2>";
for($i=1;$i<=100;$i++){
    if ($i % 2 == 0) {
        ?>
        <!-- Số chẵn: in đậm, màu đỏ -->
        <b style = 'color:red'><?php 
            echo $i;
        ?><br></br>
        <?php
    } else {
        ?>
        <!-- Số lẻ: in đậm, nghiêng, màu xanh -->
        <b style = 'color:green; font-style: italic'>
        <?php 
            echo $i;
        ?><br></br>
        <?php
    }
}
?>