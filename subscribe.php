<?php

if(isset($_POST['email'])){

    $email = $_POST['email'];

    $to = "mailnexvora@gmail.com";
    $subject = "New Newsletter Subscriber";

    $message = "New subscriber:\n\n";
    $message .= "Email: ".$email;

    $headers = "From: Nexvora <mailnexvora@gmail.com>";

    if(mail($to,$subject,$message,$headers)){
        echo "✅ Thank you for subscribing!";
    }else{
        echo "❌ Subscription failed.";
    }

}
?>
