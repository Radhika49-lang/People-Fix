@echo off
title PeopleFix - Push to GitHub
color 0A
echo ============================================================================
echo   PeopleFix: Report It. Track It. Fix It.
echo   Pushing code to https://github.com/Radhika49-lang/People-Fix.git
echo   Created by Trio-Developers
echo ============================================================================
echo.

cd /d "c:\Users\vanka\Downloads\People Fix"
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo Checking local git status...
git status
echo.

echo Attempting push to origin main...
echo (If a browser window opens, please click "Authorize" or enter your GitHub credentials)
echo.
git push -u origin main

echo.
echo ============================================================================
if %ERRORLEVEL% EQU 0 (
    color 0A
    echo [SUCCESS] PeopleFix has been pushed to GitHub successfully!
    echo Check your repository: https://github.com/Radhika49-lang/People-Fix
) else (
    color 0C
    echo [ERROR] Push failed. 
    echo If GitHub authentication failed, you can generate a token at:
    echo https://github.com/settings/tokens/new (check 'repo' box)
)
echo ============================================================================
echo.
pause
