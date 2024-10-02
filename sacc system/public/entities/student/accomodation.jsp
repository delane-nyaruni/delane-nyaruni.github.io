<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
	pageEncoding="ISO-8859-1" errorPage="404.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="delane codes">
    <title>Accommodations</title>
    
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="../../assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="../../assets/css/main.css" rel="stylesheet" type="text/css">
</head>
<body id="page-top" class="bg-gradient-primary main">
    <!-- Page Wrapper -->
    <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
        
            <!-- Main Content -->
            <div id="content" class="bg-gradient-primary main">


                <!-- Begin Page Content -->
                <div class="container-fluid main">
                	<br>
 					<a href="./dashboard.jsp" id="backToDashboard" data-dismiss="modal">
                        Back To Dashboard
                    </a>
                    <br><br>
                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-2 text-gray-800">Property Listings</h1>
                    </div>
                   
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4 ">
                        <div class="card-header glass py-3 dataTablz">
                            <h6 class="m-0 font-weight-bold text-primary ">Properties</h6>
                        </div>
                        <div class="card-body ">
                            <div class="table-responsive">
                                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                        
                                        <!-- <td> 
									      <a href="../../entities/student/accommodation/view-property.jsp" class="primary cursor ">
                              				  more...
                           				  </a>
                           				  </td> -->
                                            <th>Address</th>
                                            <th>Landlord</th>
                                            <th>Max-Rooms-Leased</th>
                                            <th>Rooms-Occuppied</th>
                                            <th>Gated</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Address</th>
                                            <th>Landlord</th>
                                            <th>Max-Rooms-Leased</th>
                                            <th>Rooms-Occuppied</th>
                                            <th>Gated</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                  <tr>
									      <td>
									      <a href="../../entities/student/accommodation/view-property.jsp" class="primary cursor ">
                              				  Belvedere, Harare
                           				  </a>
									      </td>
									      <td>John Doe</td>
									      <td>5</td>
									      <td>3</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Jane Smith</td>
									      <td>4</td>
									      <td>2</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Michael Johnson</td>
									      <td>6</td>
									      <td>4</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Amy Brown</td>
									      <td>3</td>
									      <td>1</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>David Wilson</td>
									      <td>5</td>
									      <td>3</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Sarah Lee</td>
									      <td>4</td>
									      <td>2</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Chris Evans</td>
									      <td>7</td>
									      <td>5</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Emily Taylor</td>
									      <td>2</td>
									      <td>1</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Kevin Martinez</td>
									      <td>4</td>
									      <td>3</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Laura Baker</td>
									      <td>3</td>
									      <td>2</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Mark Thompson</td>
									      <td>6</td>
									      <td>4</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Natalie Clark</td>
									      <td>5</td>
									      <td>3</td>
									      <td>No</td>
                                        </tr>
                                        <tr>
									      <td>Belvedere, Harare</td>
									      <td>Alice Johnson</td>
									      <td>3</td>
									      <td>2</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Bob White</td>
									      <td>6</td>
									      <td>4</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Emily Brown</td>
									      <td>4</td>
									      <td>3</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Charlie Green</td>
									      <td>5</td>
									      <td>2</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>David Smith</td>
									      <td>7</td>
									      <td>5</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Emma Davis</td>
									      <td>3</td>
									      <td>1</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Frank Wilson</td>
									      <td>5</td>
									      <td>3</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Grace Lee</td>
									      <td>2</td>
									      <td>1</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Henry Johnson</td>
									      <td>4</td>
									      <td>2</td>
									      <td>Yes</td>
									    </tr>
									    <tr>
									      <td>Monaview</td>
									      <td>Isabel Brown</td>
									      <td>3</td>
									      <td>1</td>
									      <td>No</td>
									    </tr>
									    <tr>
									      <td>Belvedere, Harare</td>
									      <td>Jack Miller</td>
									      <td>6</td>
									      <td>4</td>
									      <td>Yes</td>
									    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->


        </div>
        <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
    <br><br><br>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content transparentBackground">
                <div class="modal-header transparentBackground">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session. Make sure you have saved your data before Logout !!!.</div>
                <div class="modal-footer modal-footer-hidden">
                    <button class="btn btn-dark" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-danger" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
   
    <script src="../../fullscreen.js"></script>

    <!-- Bootstrap core JavaScript-->
    <script src="../../vendor/jquery/jquery.min.js"></script>
    <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../../assets/js/sb-admin-2.min.js"></script>

    <script src="../../assets/js/plugins/datatables-demo.js"></script>
    <script src="../../vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="../../vendor/datatables/dataTables.bootstrap4.min.js"></script>

</body>

</html>