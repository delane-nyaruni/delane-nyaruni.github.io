start /B cmd /C "../node app.js"
timeout /T 5 > nul
start "" "http://localhost:7121"

REM Replace `"node server.js"` with the command to start your server. Make sure you have Node.js installed and your server file (`server.js`) in the same directory as the `.bat` file.

REM Replace `"http://localhost:7121"` with the URL of the specific page you want to open. Ensure that your server is configured to serve this page on port 7121.

REM @echo off
REM This is a comment explaining the purpose of the batch file

REM Set variables
REM SET source_folder=C:\Source
REM SET destination_folder=D:\Destination

REM Copy files
REM xcopy "%source_folder%" "%destination_folder%" /E /I /Y

REM End of the batch file
REM The `timeout /T 5 > nul` command adds a delay of 5 seconds to allow the server to start before opening the browser. Adjust the timeout value as needed.