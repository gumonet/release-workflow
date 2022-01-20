<?php
$to = 'domotica.cool1@gmail.com';
$from = $_POST['email'];
$fromName = 'Mi Landing page'  ;//$_POST['name'];
 
$subject = "Nuevo mensaje de tu landing page";
 
$htmlContent = ' 
    <html> 
    <head> 
        <title>Tienes un nuevo registro de tu landing page:  </title> 
    </head> 
    <body> 
        <h1>Tienes un nuevo registro de tu landing page</h1> 
        <table cellspacing="0" style="border: 2px dashed #FB4314; width: 100%;"> 
            <tr> 
                <th>Nombre:</th>
                <td>'.$_POST['name'].'</td> 
            </tr>
            <tr> 
                <th>Email:</th>
                <td>'.$_POST['email'].'</td> 
            </tr>
            <tr> 
                <th>Teléfono:</th>
                <td>'.$_POST['phone'].'</td> 
            </tr>
            <tr> 
                <th>Mensaje:</th>
                <td>'.$_POST['message'].'</td> 
            </tr>
        </table> 
    </body> 
    </html>'; 
 
// Set content-type header for sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 
// Additional headers 
$headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 

//$headers .= 'Cc: ruben@impulsatumarcab2b.com.mx' . "\r\n";
//$headers .= 'Bcc: welcome2@example.com' . "\r\n"; 
 
// Send email 
mail($to, $subject, $htmlContent, $headers);

header('Location: gracias.html');