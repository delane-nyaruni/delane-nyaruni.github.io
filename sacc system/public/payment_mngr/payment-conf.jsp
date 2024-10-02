<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
	pageEncoding="ISO-8859-1" errorPage="404.jsp" %>
<!DOCTYPE html html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Add Payments</title>
    <!-- Custom fonts for this template-->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../assets/css/main.css" rel="stylesheet" type="text/css">
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
                            <a href="../../public/entities/landlord/dashboard.jsp" class="primary cursor bktodashbrd" id="backToDashboard" data-dismiss="modal">
                                Back To Dashboard
                            </a>
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Transact Payment</h1>
                            </div><br>
                            <form class="user" method="get">
                                <fieldset>
                                    <fieldset>
                                        <legend>Payment Type</legend>
                                        <label>USD Cash
                                        <input type="radio" checked  name="gender" value="M"></label>
                                    </fieldset>
                                    Amount
                                    <input type="number" required name="Amount" class="form-control form-control-user " id="amountPaid" placeholder="$"><br>
                        <br>
                            <button class="btn btn-primary btn-user btn-block transparent" onclick="confirmDetails()" data-toggle="modal" data-target="#paymentConfirmModal">
                                Confirm Payment
                            </button><br>
                                            <a href="../../public/entities/landlord/dashboard.jsp" class="btn btn-google btn-user btn-block transparent">
                                Quit Payment
                                </a>
                                </fieldset>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


<!-- payment confirm Modal-->
   <div class="modal fade noScrollBar" id="paymentConfirmModal" tabindex="-1" role="dialog" aria-labelledby="paymentConfirmModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <!-- Outer Row -->
                
                <div class="card header o-hidden border-0 my-5">
                <!-- confirm payment modal  -->
                    <div class="col-lg-12 col-md-100">
                        <a class="primary cursor tab-fife" data-dismiss="modal">Back</a>

                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Confirm Payment</h1>
                            </div>
                            <form class="user" method="get" action="#" >
                                <div class="form-group">
                                    <code class="confirmPaymentColor"><span class="confirmPaymentKey">Name: James </span><span id="confirmStudentName">@</span></code><br>
                                    <code class="confirmPaymentColor"><span class="confirmPaymentKey">Surname: Gordon</span><span id="confirmStudentSurname">@</span></code><br>
                                    <code class="confirmPaymentColor"><span class="confirmPaymentKey">PaymentDate: 12-05-24</span><span id="confirmStudentDate">@</span></code><br>
                                    <code class="confirmPaymentColor"><span class="confirmPaymentKey">PaymentMode: USD Cash </span><span id="confirmStudentPaymentMode">@</span></code><br>
                                    <code class="confirmPaymentColor"><span class="confirmPaymentKey">Amountpaid: 220 </span><span id="confirmStudentAmountPaid">@</span></code><br>
                                </div>
                               <br><br>
                                                                       <!-- send to princip email  ,econetCallBackSmsApiCall() -->
                                <a onclick="paymentQuery()" id="validatePaymentDetails" class="btn btn-success btn-user btn-block transparent">
                                    Pay
                                </a>
                                <div class="paymentSuccess" id="successPopup">
                                    Payment Approved.
                                </div>
                            </form>

                        </div>
             
                </div>
            </div>
        </div>
    </div>
</div>
            </div>

            
<script>
    window.onload = () => {
    document.addEventListener('popstate',(event) =>{event.preventDefault();});
};
</script>
           <!--
<script src="../payment_mngr/in.js"></script>
           --> 
            <script src="./payment-data.js"></script>
            <script src="../auth_mngr/auth.js"></script>
            <script type="text/javascript" src="./qr_generator/index.svg"></script>
            <script type="text/javascript" src="./qr_generator/idGen-Engine.js"></script>
            <script type="text/javascript" src="./qr_generator/qrcode.js"></script>
            <script type="text/javascript" src="./qr_generator/jquery.min.js"></script>
            <script type="text/javascript" src="../api/email.js"></script>
            <script type="text/javascript" src="../api/sms-api.js"></script>
            <!-- Bootstrap core JavaScript-->
            <script src="../vendor/jquery/jquery.min.js"></script>
            <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="../js/sb-admin-2.min.js"></script>

</body>

</html>