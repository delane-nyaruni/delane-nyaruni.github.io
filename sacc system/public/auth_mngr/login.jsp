<%@ page language="java" contentType="text/html; charset=UTF-8" 
	pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<html lang="en">
<head>

    <title>Login</title>
 
</head>
<body class="bg-gradient-primary main">

 
<%
	String url = "jdbc:mysql://localhost:3306/sacc_system";
	String username = "root";
	String password = "";
	String sql = "SELECT * FROM landlord";
	Class.forName("com.mysql.jdbc.Driver");	//DEBUG
	Connection con = DriverManager.getConnection(url,username,password);
	Statement st = con.createStatement();
	
	ResultSet rs = st.executeQuery(sql);
	rs.next();
%>


Landlord ID: <%= rs.getString(1) %>
Name: <%= rs.getString(2) %>
Surname: <%= rs.getString(3) %>
Gender: <%= rs.getString(4) %>



</body>
</html>