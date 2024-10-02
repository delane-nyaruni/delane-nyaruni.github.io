<!DOCTYPE html html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Payment Reciept</title>
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../main.css" rel="stylesheet" type="text/css">
    <link href="printout.css" rel="stylesheet" type="text/css">
</head>

<body class="white" onload="receiptOut()">
    <div class="container ">
        <div class="card  border-0 shadow-lg my-5">
                        <div class="card-body p-5 "><br>
                            <img src="../images/tcfl-logo.png" width="120px;" class="receiptOutImg center">
                        <!-- Nested Row within Card Body -->
                            <div class="col-lg-12 col-md-100">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Payment Receipt</h1>
                                    </div>
                                    <form class="user" method="get" action="#" >
                                        <div class="form-group">
                                            <code class="confirmPaymentColor"><span class="confirmPaymentKey">Payment ID: </span><span id="printStudentId">AM4MS52</span></code><br>                                            
                                            <code class="confirmPaymentColor"><span class="confirmPaymentKey">Name: </span><span id="printOutStudentName">@</span></code><br>
                                            <code class="confirmPaymentColor"><span class="confirmPaymentKey">Surname: </span><span id="printOutStudentSurname">@</span></code><br>
                                            <code class="confirmPaymentColor"><span class="confirmPaymentKey">PaymentMode: </span><span id="printOutStudentPaymentMode">Swipe</span></code><br>
                                            <code class="confirmPaymentColor"><span class="confirmPaymentKey">Amountpaid: </span><span id="printOutStudentAmountPaid">250</span></code><br>
                                        </div>
                                        <br>
                                        <!-- call the QR gen code with the crunched data from the idGenEngine -->
                                       <iframe src="./qr_generator/index.svg" frameborder="0" width="250" class="qrPositioning"></iframe>
                                       <br>
                                    </form>
                                </div>
                        </div>
                        </div> 
                    </div>
</div>
            </div>
            <script type="text/javascript">
                
// printout reciept
setTimeout(()=>{
    //call the email api from the API module
  //  alert('Emails sent to recipients');
    window.print();
    redirect(); 
 },1000);// delay for the reciept function to allow printout of qr modify later to match hardware & netwrk specs report
function redirect(){
    // clear history    
    // setTimeout(()=>{
        window.close();

    location.href = './payment-conf.jsp';
      //  clearCache();
   // },2000);// slow down the redirect until a succesfull printout
}

            </script>
            <script src="../fullscreen.js"></script>
            <script src="./payment-data.js"></script>
            <script src="../api/payment-api.js"></script>            
            <script src="../auth_mngr/auth.js"></script>
            <script type="text/javascript" src="./qr_generator/index.svg"></script>
            <script type="text/javascript" src="./qr_generator/idGen-Engine.js"></script>
            <script type="text/javascript" src="./qr_generator/qrcode.js"></script>
            <script type="text/javascript" src="./qr_generator/jquery.min.js"></script>
            <script type="text/javascript" src="../api/email.js"></script>
            <!-- Bootstrap core JavaScript-->
            <script src="../vendor/jquery/jquery.min.js"></script>
            <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            <!-- Core plugin JavaScript-->
            <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

            <!-- Custom scripts for all pages-->
            <script src="../js/sb-admin-2.min.js"></script>

</body>

</html>