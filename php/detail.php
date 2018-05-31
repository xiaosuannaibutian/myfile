<?php
include("conn.php");
mysqli_query($conn,'set names utf8');
$conn->select_db("item");
$id = $_POST["id"];
$sql = "select * from product where id='$id'";
$result = $conn->query($sql);
$newArr = [];
if ($result->num_rows > 0) {
    // 输出数据
	while($row = $result->fetch_assoc()) {
	       array_push($newArr,$row); 
	}
}
$json = json_encode($newArr,JSON_UNESCAPED_UNICODE);
echo $json;
?>