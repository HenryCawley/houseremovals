<?php
              if($_POST) {
                  $visitor_name = "";
                  $tel_number = "";
                  $email_body = "<div>";

                  if(isset($_POST['visitor_name'])) {
                      $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
                      $email_body .= "<div>
                                         <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
                                      </div>";
                  }


                  if(isset($_POST['tel_number'])) {
                      $tel_number = filter_var($_POST['tel_number'], FILTER_SANITIZE_STRING);
                      $email_body .= "<div>
                                         <label><b>Visitor Number:</b></label>&nbsp;<span>".$tel_number."</span>
                                      </div>";
                  }


                  $recipient = "hertssbc@yahoo.co.uk";


                  $email_body .= "</div>";

                  $headers  = 'MIME-Version: 1.0' . "\r\n"
                  .'Content-type: text/html; charset=utf-8' . "\r\n"
                  .'From: ' . $visitor_email . "\r\n";

                  if(mail($recipient, $email_title, $email_body, $headers)) {
                      echo "<p>Thank you for contacting us, $visitor_name. We will call you back as soon as possible.</p>";
                  } else {
                      echo '<p>We are sorry but the email did not go through.</p><a href="www.professionalhouseservices.co.uk">Click Here to Return To Professional House Services</a>';
                  }
              }

              ?>
