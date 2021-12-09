<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            
            exit;
        }

        $recipient = "ask@xylk.co";

        $subject = "New contact from $name";

        $email_content .= "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Message:\n$message\n";

        if (mail($recipient, $subject, $email_content)) {

            http_response_code(200);
            echo "Thank You! Your message has been sent.";

        } else {

            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
            ini_set('display_errors', '1');
            ini_set('error_reporting', E_ALL);
        }

    } else {

        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>