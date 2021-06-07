<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$oblast = $_POST['user_oblast'];
$city = $_POST['user_city'];
$numpost = $_POST['user_numpost'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lavandershop21@gmail.com'; //Логін від пошти з якої будуть відправлятись листи
$mail->Password = 'postavte5'; //Пароль від пошти з якої будуть відправлятись листи
//$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / даний порт тільки для .gmail
$mail->setFrom('lavandershop21@gmail.com'); //Пошта відправника
$mail->addAddress('lavandershop21@gmail.com');//Пошта отримувача

$mail->smtpConnect(
    array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => true
        )
    )
);

$mail->addAddress("lavandershop21@gmail.com", "Lav Shop");

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Нове замовлення!';
$mail->Body    = 'Замовник<br>ПІБ: ' .$name . '<br>Номер телефону: ' .$phone. '<br>Електронна пошта: ' .$email. '<br>Область: ' .$oblast. '<br>Місто: ' .$city. '<br>Відділення пошти: ' .$numpost;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: lastp.html');
}
?>
