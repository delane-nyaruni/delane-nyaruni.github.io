<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
	pageEncoding="ISO-8859-1" errorPage="404.jsp" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Report</title>
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../../assets/css/main.css" rel="stylesheet" type="text/css">
</head>

<body class="bg-gradient-primary main">
    <div class="container">
<div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card formBackgroundUI o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-img"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <a href="../dashboard.jsp" class="primary cursor bktodashbrd" id="backToDashboard" data-dismiss="modal">
                                Back To Dashboard
                            </a>
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Report</h1>
                            </div>
                            <form class="user" method="post" id="loginForm">
                                <div class="form-group">
                                    <input type="text" name="fullname" id="userName" class="form-control form-control-user" placeholder="Subject matter" required data-form-input>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" id="userEmail" class="form-control form-control-user" placeholder="Email address" required data-form-input>
                                </div>
                                <div class="form-group">
                                    <textarea name="message" id="emailBody" class="form-control form-control-user" placeholder="Full Message" rows="4" required data-form-input></textarea>

                                </div>
                                <br>
                                <button onclick="studentSendEmailMsg()" data-form-btn type="submit" class="btn btn-primary btn-user btn-block transparent">
                                    Send
                                </button>
                            </form>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>


<script src="../../../api/api.email/api.email.js"></script>
</body>
