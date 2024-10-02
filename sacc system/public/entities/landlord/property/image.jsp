<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
	pageEncoding="ISO-8859-1" errorPage="404.jsp" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.io.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Upload Example</title>
    <style>
        .preview {
            max-width: 200px;
            max-height: 200px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Image Upload Example</h1>
    <form action="upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file" id="fileInput">
        <img src="" alt="Preview" id="imagePreview" class="preview">
        <input type="submit" value="Upload">
    </form>
    <script src="script.js" defer></script>
</body>
</html>
