<?php
    header("Content-Type: text/html; charset=UTF-8");
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    $conn = new mysqli('localhost', 'root', '', 'mi_shop', '3306');
    
    $conn->query("set names utf8");
    $conn->query("set character set utf8");
   

    $insertSql = "insert into mi_user (username, password) values ('$username', '$password')";
    $sql = "SELECT * FROM mi_user WHERE username = '$username'";
    
    // $result = mysqli_query($conn,$sql);
    $result = $conn -> query($sql);

    // $rows = mysqli_num_rows($result);
    $rows = $result -> fetch_assoc();
    if($rows){
        // echo '用户名存在';
        $arr = array("code" => "1000", "msg" => "用户名存在");
    }
    else if($password != '')
    {
        $result1 = $conn-> query($insertSql);
        // echo '注册成功';
        $arr = array("code" => "2000", "msg" => "注册成功");

    }   
    else{
    //    echo '用户名可以使用';
    $arr = array("code" => "3000", "msg" => "用户名可以使用");
    }
    echo json_encode($arr);
?>



