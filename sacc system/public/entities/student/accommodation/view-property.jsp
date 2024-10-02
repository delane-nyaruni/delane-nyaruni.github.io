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
    <title>View Property</title>
    <!-- Custom fonts for this template-->
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="public" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../../assets/css/main.css" rel="stylesheet" type="text/css">
    <link href="./index.css" rel="stylesheet" type="text/css">
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
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">View Property</h1>
                            </div><br>
                            <form class="user" method="post" id="registerPropertyForm">
                                <fieldset>
                                    <legend>Property Details</legend>
                                    <br>
                                    
                                    
                                     <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121490.1468870492!2d30.88052272433389!3d-17.905685075519937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1931a119ab28aef1%3A0x49dfad5490a5b5d2!2s9codeStudio!3m2!1d-17.9056976!2d30.950563199999998!5e0!3m2!1sen!2szw!4v1666750532504!5m2!1sen!2szw"
                    width="100%" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" seamless>
                </iframe>
            <p class="click-image-text">property map location</p>
            <hr>
                                    
                                    
                                  <br>   
                                  <fieldset>
	                                  <legend>Property Address:</legend>
	                                  <label>Belvedere, Harare</label>
	                              </fieldset>
                                  
                                 <fieldset>
                                  <legend>Rooms Available:</legend>
                                    <label>2</label>
                                  </fieldset>

                                    <fieldset>
                                        <legend>Gated:</legend>
                                        <label>Yes</label>
                                    </fieldset>
                                     
                                    
                                    
                                    
                                    
                                    
                                    
                        <br><br><br>
                        <a href="view-room.jsp" onclick="viewRoom()" type="submit" class="btn btn-primary btn-user btn-block ">
                                    Book Room
                        </a><br>
                                            <a href="../accomodation.jsp" class="btn btn-google btn-user btn-block ">
                                    Quit
                                </a>
                                </fieldset>
                            </form>
                            <br>
                            <hr>
                            <div class="text-center">
                                <a class="small" href="remove-property.jsp">Cancel Booking</a>
                            </div>
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
                    Property registered.
                </div>
            </div>
            <script src="../../../../property/property-forms-handler.js"></script>
            <!-- Bootstrap core JavaScript-->
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="js/sb-admin-2.min.js"></script>
               <script src="./jquery-3.6.0.js"></script>

</body>

</html>