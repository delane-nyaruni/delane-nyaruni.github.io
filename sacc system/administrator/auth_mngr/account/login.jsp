<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" errorPage="404.jsp" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- 
    <meta http-equiv="refresh" content="1;home.html">
    -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Login</title>
    <!-- Custom fonts for this template-->
    <link href="../../../public/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../../public/assets/css/sb-admin-2.min.css" rel="stylesheet" type="text/css">
    <link href="../../../public/assets/css/main.css" rel="stylesheet" type="text/css">

</head>
<body class="bg-gradient-primary main" onload="fullscreen()">
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card formBackgroundUI o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-img"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Admin</h1>
                                    </div>
                                    <form class="user" method="post" id="loginForm">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" id="username" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user " id="password" placeholder="Password">
                                        </div>
                                        <!-- <div class="form-group">
                                            <select id="role" name="userType" class="form-control form-control-user">
                                                <option value="student">Student</option>
                                                <option value="landlord">Landlord</option>
                                            </select>
                                        </div> -->
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input " id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button onclick="validateAuth()" type="submit" class="btn btn-primary btn-user btn-block transparent">
                                            Login
                                        </button>
                                        <button onclick="goToHomepage()" class="btn btn-google btn-user btn-block transparent">
                                            Quit
                                        </button>
                                    </form>
                                    <br>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.jsp">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" data-toggle="modal" data-target="#logoutModal" href="#">Create Admin Account!</a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- Logout Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <br><br><br><br><br>
            <div class="modal-dialog" role="document">
                <div class="modal-content transparentBackground">
                    <div class="modal-header transparentBackground">
                        <h5 class="modal-title" id="exampleModalLabel">Create admin account</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-10 col-md-10 mb-6 auto">
                                <a class="card cardBorderBoys shadow h-100 py-2 btn btn-primary tab-ten " href="../../auth_mngr/account/student-register.jsp">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    STUDENT</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800"><span id="rooms"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                     
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-10 col-md-10 mb-6 auto">
                                <a class="card cardBorderBoys shadow h-100 py-2 btn btn-primary tab-ten" href="../../auth_mngr/account/landlord-register.jsp">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    LANDLORD</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800"><span id="rooms"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="modal-footer modal-footer-hidden">
                        <button class="btn btn-dark btn-user btn-block transparent" type="button" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="msgError" id="errorPopup">
            Invalid credentials.
        </div>
        <div class="msgError" id="emptyFields">
            Fill-in infomation.
        </div>
        <div class="msgSuccess" id="successPopup">
            Login success.
        </div>
        <%-- 
        <%
        //disable cache
        response.setHeader("Cache-Control", "no-cache","no-store","must-revalidate");
        response.setHeader("Pragma","no-cache");
        response.setHeader("Expires","0");
                                                		
           if(session.getAttribute("userEmail") == null)
        	   response.sendRedirect("login.jsp");
        
        %>
         --%>
        
    <script>
        function exitSystem() {
            window.close();
        }

        document.addEventListener("DOMContentLoaded", function() {
            var rememberedEmail = localStorage.getItem("rememberedEmail");
            if (rememberedEmail) {
                document.getElementById("username").value = rememberedEmail;
                document.getElementById("customCheck").checked = true;
            }
        });

        document.getElementById("customCheck").addEventListener("change", function() {
            if (this.checked) {
                localStorage.setItem("rememberedEmail", document.getElementById("username").value);
            } else {
                localStorage.removeItem("rememberedEmail");
            }
        });
    </script>
    
    <script src="/public/assets/js/fullscreen.js"></script>
    <script src="../../auth_mngr/auth.js"></script>
   
    <!-- Bootstrap core JavaScript-->
    <script src="../../../public/vendor/jquery/jquery.min.js"></script>
    <script src="../../../public/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="../../../public/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="../../../public/assets/js/sb-admin-2.min.js"></script>
</body>
</html>