color 0a
title "PORTFOLIO LOCALHOST [server]"
cls
date /t 
time /t
@echo off
start cmd /K "C:\xampp\apache\bin\httpd.exe" 
@echo "apache server started"
start /B cmd /C "app.js"	REM start vscode
start /B cmd /C "node app.js"   REM node server started
timeout /T 5 > nul
start "" "http://localhost:80/portfolio/index.html"
REM THIS CODE WILL CREATE THE START.bat FILE WHICH WILL OPEN LOGIN
@echo SERVER STATUS [ONLINE]
exit