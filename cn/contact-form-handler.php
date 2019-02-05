<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'weeelb.com';
    $email_subject = "您有一条新的消息，请注意查收";
    $email_body = "姓名: $name\n".
                    "邮箱地址: $visitor_email\n".
                        "留言: $message\n";

    $to = "liwo8owil@gmail.com";
    $headers = "来自网站: $email_from \r\n";
    $headers .= "发信人: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");

?>