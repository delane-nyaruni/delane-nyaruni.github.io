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
    <title>Remove Property</title>
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../../assets/css/main.css" rel="stylesheet" type="text/css">
</head>

<body class="bg-gradient-primary main">
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 header">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image header"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <a href="../dashboard.jsp" class="primary cursor bktodashbrd" id="backToDashboard" data-dismiss="modal">
                                Back To Dashboard
                            </a>
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">De-List Property</h1>
                            </div><br>
                            <form class="user" id="removePropertyForm">
                                <fieldset>
                                    <legend>Property Information</legend>
                                    <br> Property Address<br>
                                    <input type="text" class="form-control form-control-user" id="removePropertyAddress" placeholder="house address">
                                    <br></fieldset>
                        <br><br>
                        <button onclick="validateRemoveProperty()" type="submit" class="btn btn-google btn-user btn-block ">
                            Remove Property
                        </button><br>
                                </fieldset>
                            </form>
                            <br><br>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="msgError" id="errorPopup">
                    Fill-in infomation.
                </div>
                <div class="msgError" id="emptyFields">
                    Fill-in infomation.
                </div>
                <div class="msgSuccess" id="successPopup">
                    Property Unregistered.
                </div>
            </div>
            <script src="./property-forms-handler.js"></script>
            <!-- Bootstrap core JavaScript-->
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="js/sb-admin-2.min.js"></script>

</body>

</html>