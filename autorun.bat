color 0a
title "portfolio website dev autoscript for windows"
cls
date /t 
time /t
@echo off 
start cmd /K "C:\xampp\apache\bin\httpd.exe" 
@echo "apache server started"
start /B cmd /C "index.html"
timeout /T 5 > nul
start "" "http://localhost:80/portfolio/index.html" 
rem end script
@echo "website avallable online in local server"
exit