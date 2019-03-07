<?php
/**
 * Created by PhpStorm.
 * User: 36513
 * Date: 2019/3/7
 * Time: 12:46
 */
$logUsr = $_POST['user'];
$logPwd = $_POST['pwd'];

$servername = "localhost:3306";
$username = "root";
$password = "090029";
$dbName = "art";

$conn = new mysqli($servername, $username, $password, $dbName);
if ($conn->connect_error) {
    echo("<script>alert('" . "连接失败: " . $conn->connect_error . "');</script>");
}
$sql1 = "SELECT * FROM users where username='" . $logUsr . "'";
$result = $conn->query($sql1);
if($result->num_rows === 0){
    echo "<script>alert('用户不存在');parent.location.href='index.html';</script>";
}
$row = mysqli_fetch_array($result);
if($row['password'] === $logPwd){
    $expire = time() + 60 * 60 * 24;
    setcookie("user", $logUsr, $expire);
    echo "<script>alert('登录成功');parent.location.href='index.html';</script>";
}
else{
    echo "<script>alert('密码不正确');parent.location.href='index.html';</script>";
}