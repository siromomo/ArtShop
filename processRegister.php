<?php
$usr = $_POST['user'];
$mail = $_POST['mail'];
$tel = $_POST['tel'];
$addr = $_POST['addr'];
$pwd = $_POST['pwd'];

$servername = "localhost:3306";
$username = "root";
$password = "090029";
$dbName = "art";

$conn = new mysqli($servername, $username, $password, $dbName);
if ($conn->connect_error) {
    echo("<script>alert('" . "连接失败: " . $conn->connect_error . "');</script>");
}
$sql1 = "SELECT * FROM users where username='" . $usr . "'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    echo "<script>alert('用户名已存在');parent.location.href='index.html';</script>";
}

$sql = "INSERT INTO users (username, password, email, telephone, address) 
VALUES ('". $usr . "','" . $pwd . "','" . $mail . "','" . $tel . "','" . $addr . "')";

if ($conn->query($sql) === TRUE) {
    $expire = time() + 60 * 60 * 24;
    setcookie("user", $usr, $expire);
    echo "<script>alert('注册成功');parent.location.href='index.html';</script>";
} else {
    echo "<script>alert('服务器错误');parent.location.href='index.html'</script>";
}

$conn->close();

?>