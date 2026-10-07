@echo off
setlocal enabledelayedexpansion

echo ====================================================================
echo      Wing Chun Martial Arts Association India (WCMAAI)
echo      GitHub Publication & Push Script
echo      Target: https://github.com/maxecoenergytech/wcmma.git
echo ====================================================================
echo.

cd /d "%~dp0"

:: Check Git installation
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in system PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Ensure Git is initialized
if not exist ".git" (
    echo [*] Initializing Git repository...
    git init
    git branch -M main
)

:: Ensure remote origin is set
git remote get-url origin >nul 2>nul
if %errorlevel% neq 0 (
    git remote add origin https://github.com/maxecoenergytech/wcmma.git
) else (
    git remote set-url origin https://github.com/maxecoenergytech/wcmma.git
)

git branch -M main

echo [*] Staging all files...
git add .

echo.
set /p commit_msg="Enter commit message [Press Enter for default]: "
if "%commit_msg%"=="" (
    set commit_msg=Update WCMAA India portal files
)

git commit -m "%commit_msg%"

echo.
echo ====================================================================
echo Choose Push Option:
echo [1] Standard Push (uses Windows Git Credential Manager)
echo [2] Push with GitHub Personal Access Token (PAT)
echo [3] Switch / Re-authenticate GitHub Account in Windows
echo ====================================================================
set /p opt="Select option (1, 2, or 3) [Default 1]: "

if "%opt%"=="2" goto push_token
if "%opt%"=="3" goto switch_user
goto standard_push

:standard_push
echo.
echo [*] Pushing to origin main...
git push -u origin main
goto end_check

:push_token
echo.
echo [*] Enter your GitHub Personal Access Token (classic or fine-grained)
echo     (Generate one at: https://github.com/settings/tokens with 'repo' scope)
set /p token="Paste Token: "
if "%token%"=="" (
    echo [!] No token entered. Aborting.
    pause
    exit /b 1
)
git push https://%token%@github.com/maxecoenergytech/wcmma.git main
goto end_check

:switch_user
echo.
echo [*] Clearing cached GitHub credentials for github.com...
cmdkey /delete:LegacyGeneric:target=git:https://github.com >nul 2>nul
cmdkey /delete:git:https://github.com >nul 2>nul
echo [*] Now attempting push. Windows will prompt you to log into GitHub...
git push -u origin main
goto end_check

:end_check
if %errorlevel% equ 0 (
    echo.
    echo ====================================================================
    echo   [SUCCESS] All files successfully published to GitHub!
    echo   Repository: https://github.com/maxecoenergytech/wcmma.git
    echo ====================================================================
) else (
    echo.
    echo ====================================================================
    echo   [ATTENTION] If permission was denied:
    echo   Either:
    echo   1. Add your current account 'Hellotamal' as a Collaborator with
    echo      Admin/Write access on https://github.com/maxecoenergytech/wcmma
    echo   OR
    echo   2. Re-run this script, choose Option [2], and paste a GitHub Token
    echo      generated from the 'maxecoenergytech' account.
    echo ====================================================================
)

echo.
pause
