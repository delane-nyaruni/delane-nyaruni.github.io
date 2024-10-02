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
    <title>View Room</title>
    <!-- Custom fonts for this template-->
    <link href="../../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="../../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../../assets/css/main.css" rel="stylesheet" type="text/css">
    <link href="./index.css" rel="stylesheet" type="text/css">
     <link href="./bootstraps.min.css" rel="stylesheet" type="text/css">
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
                                <h1 class="h4 text-gray-900 mb-4">View Room</h1>
                            </div><br>
                            <form class="user" method="post" id="registerPropertyForm">
                                <fieldset>
                                    <legend>Room Details</legend>
                                    <br>
                                    
                                    
                                     <div class="scrollmenu">
                <div class="row">
                    <div class="column">
                        <img src="../../landlord/property/room_images/r1p1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow" width="110px" height="90px">
                    </div>
                    <div class="column">
                        <img src="../../landlord/property/room_images/r1p2.jpg" onclick="openModal();currentSlide(2)" class="hover-shadow" width="110px" height="90px">
                    </div>
                    <div class="column">
                        <img src="../../landlord/property/room_images/r1p3.jpg" onclick="openModal();currentSlide(3)" class="hover-shadow" width="110px" height="90px">
                    </div>
                    <div class="column">
                        <img src="../../landlord/property/room_images/r1p4.jpg" onclick="openModal();currentSlide(4)" class="hover-shadow" width="110px" height="90px">
                    </div>
                    <div class="column">
                        <img src="../../landlord/property/room_images/r1p5.jpg" onclick="openModal();currentSlide(5)" class="hover-shadow" width="110px" height="90px">
                    </div>
                    
                </div>

            </div>
                                      <!-- The Modal/Lightbox -->
            <div id="myModal" class="modal">
                <span class="close cursor" onclick="closeModal()">&times;</span>
                <div class="modal-content">

                    <div class="mySlides">
                        <div class="numbertext">:</div>
                        <img src="../../landlord/property/room_images/r1p1.jpg" style="width:100%" height="850px">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">:</div>
                        <img src="../../landlord/property/room_images/r1p2.jpg" style="width:100%" height="850px">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">:</div>
                        <img src="../../landlord/property/room_images/r1p3.jpg" style="width:100%" height="850px">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">:</div>
                        <img src="../../landlord/property/room_images/r1p4.jpg" style="width:100%" height="850px">
                    </div>
                    <div class="mySlides">
                        <div class="numbertext">:</div>
                        <img src="../../landlord/property/room_images/r1p5.jpg" style="width:100%" height="850px">
                    </div>
                    <!-- Next/previous controls -->
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>

                </div>
            </div>
            <p class="click-image-text">click image to view full-screen & swipe to scroll</p>
            <hr>
                                    
                                    
                                  <br>   
                                  <fieldset>
	                                  <legend>Property Address:</legend>
	                                  <label>Belvedere, Harare</label>
	                              </fieldset>
                                  
                                 <fieldset>
                                  <legend>Room Number:</legend>
                                    <label>2</label>
                                  </fieldset>

                                    <fieldset>
                                        <legend>Solar-Backup:</legend>
                                        <label>Yes</label>
                                    </fieldset>
                                    
                                    <fieldset>
                                        <legend>Geyser:</legend>
                                        <label>Yes</label>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Sharing Gender:</legend>
                                        <label>Boys</label>
                                    </fieldset>
                                     
                                    
                                    
                                    
                                    
                                    
                                    
                        <br><br><br>
                        <button onclick="bookRoom()" type="submit" class="btn btn-primary btn-user btn-block ">
                                    Book Room
                        </button><br>
                                            <a href="view-property.jsp" class="btn btn-google btn-user btn-block ">
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
            <script src="../../../property/property-forms-handler.js"></script>
            <script src="../../../vendor/jquery/jquery.min.js"></script>
            <script src="../../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../../../vendor/jquery-easing/jquery.easing.min.js"></script>
            <script src="../../../assets/js/sb-admin-2.min.js"></script>
               <script src="./jquery-3.6.0.js"></script>
               <script src="./bootstrap.bundle.min.js"></script>
                 <script src="./main.js"></script>

</body>

</html>