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
    <title>Register</title>
    <!-- Custom fonts for this template-->
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../assets/css/main.css" rel="stylesheet" type="text/css">
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
                            <a href="../account/login.jsp" class="primary cursor bktodashbrd" id="backToDashboard" data-dismiss="modal">
                                Login
                            </a>
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account</h1>
                            </div><br>
                            <form class="user">
                                <fieldset>
                                    <legend>Student Details</legend><br>
                                     Student Name<br>
                                    <input type="text" name="studentName" required class="form-control form-control-user " id="studentName" placeholder="First Name"> 
                                    <br>Middle Name
                                    <input type="text" name="studentMiddleName" class="form-control form-control-user " id="studentMiddleName" placeholder="(Optional)">
                                    <br>Surname
                                    <input type="text" name="studentSurname" class="form-control form-control-user " id="studentlastname" placeholder="Last Name"><br>


                                    <fieldset>
                                        <legend>Gender</legend>
                                        <label>Male
                                        <input type="radio"checked  name="gender" value="M"></label><span class="subjectspace"></span>
                                        <label>Female
                                        <input type="radio" name="gender" value="F"></label>
                                    </fieldset><br> Nation-ID
                                    <br>
                                    <input type="text" name="nid" class="form-control form-control-user " placeholder="00-0000000x00" required>
                                    <br> Phone
                                    <input type="tel" name="phone" class="form-control form-control-user " placeholder="+000-000-000-000" required>
                                    <br> Email
                                    <br>
                                    <input type="email" name="email" class="form-control form-control-user " aria-describedby="emailHelp" placeholder="Enter Student Email Address..." required>
                                    <br> Password
                                    <br>
                                    <input type="password" name="passwd" class="form-control form-control-user " placeholder="********" required>
                                    <br> Address
                                    <br>
                                    <textarea name="studentName" class="form-control form-control-user " placeholder="Residential address" rows="4" required></textarea>

                                    <br> Level
                                    <br>
                                    <div class="form-group">
                                        <select class="form-control form-control-user">
                                            <option value="oneone">1.1</option>
                                            <option value="onetwo">1.2</option>
                                            <option value="twoone">2.1</option>
                                            <option value="twotwo">2.2</option>
                                            <option value="threeone">3.1</option>
                                            <option value="threetwo">3.2</option>
                                        </select>
                                    </div>
                                    <br> Course
                                    <br>
                                    <div class="form-group">
                                        <select class="form-control form-control-user">
                                            <option aria-checked="true" >Select</option>
                                            <option value="cs">Computer Science</option>
                                            <option value="se">Software Eng</option>
                                            <option value="bm">Business Management</option>
                                            <option value="ds">Data science</option>
                                            <option value="te">Telecomms Eng</option>
                                            <option value="dm">Digital Marketing</option>
                                        </select>
                                    </div>
                                            <br><br>
                                            Medical Condition(s)<br>
                                            <textarea name="medicalCondition" class="form-control form-control-user " placeholder="Describe medical condition(s) & procedures to follow in case of emergency, if any" rows="5"></textarea>
                                                <br><br>
                                      
                                    </fieldset>
                                    <!--end of student field-->
                                    <fieldset>
                                        <legend class="center">Parent/ Guardian </legend><br>
                                        Name <br>
                    <input type="text" name="parentName" class="form-control form-control-user " placeholder="First Name" required>
          <br>
                                                Surname <br>
                    <input type="text" name="parentSurname" class="form-control form-control-user " placeholder="Last Name" required>
            <br>
                                                Phone<br>
                    <input type="tel" name="parentPhone" placeholder="+000-000-000-000" class="form-control form-control-user " required>
            <br>
                                                Email<br>
                    <input type="email" name="parentEmail" class="form-control form-control-user " placeholder="Enter Parent Email Address..." required>
            <br>
                                                Address<br>
                <textarea name="studentName" class="form-control form-control-user " placeholder="Residential address" rows="4" required></textarea>
                <br>
                        </fieldset>
                        <br>
                        <br>
                        <button href="login.jsp" class="btn btn-primary btn-user btn-block ">
                                    Register Account
                                </button>

                            </form>
                            <br>
                            <hr>
                            <div class="text-center">
                                <a class="small" href="forgot-password.jsp">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="login.jsp">Already have an account? Login!</a>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <script src="fullscreen.js"></script>
            <!-- Bootstrap core JavaScript-->
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="js/sb-admin-2.min.js"></script>

</body>

</html>