<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if(!empty($_POST['contact_name']) && !empty($_POST['contact_email']) && !empty($_POST['contact_message'])) {
		$to = 'your-email-address@domain.com'; // Replace with your email.
		$body = "Name: {$_POST['contact_name']}\n\nEmail: {$_POST['contact_email']}\n\nSubject: {$_POST['contact_subject']}\n\nMessage: {$_POST['contact_message']}";
		mail($to, "Contact Form Submission", $body, "From: {$_POST['contact_email']}");
	}
}
?>