@echo off
setlocal enabledelayedexpansion

echo ===================================================
echo   Wing Chun Martial Arts Association India (WCMAAI)
echo   GitHub Auto-Push Script
echo ===================================================
echo.

:: Ensure we are in the script directory
cd /d "%~dp0"

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in system PATH.
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Initialize git repository if not already initialized
if not exist ".git" (
    echo [*] Initializing new Git repository...
    git init
    git branch -M main
)

:: Configure remote origin
git remote get-url origin >nul 2>nul
if %errorlevel% neq 0 (
    echo [*] Setting remote origin to https://github.com/maxecoenergytech/wcmma.git
    git remote add origin https://github.com/maxecoenergytech/wcmma.git
) else (
    echo [*] Updating remote origin URL...
    git remote set-url origin https://github.com/maxecoenergytech/wcmma.git
)

:: Ensure current branch is main
git branch -M main

:: Check status
echo.
echo [*] Checking file changes...
git status -s

:: Ask for custom commit message or use default
echo.
set /p commit_msg="Enter commit message (Press Enter for default): "
if "%commit_msg%"=="" (
    set commit_msg=Update Wing Chun Martial Arts Association India Portal
)

echo.
echo [*] Staging all changes...
git add .

echo [*] Committing changes: "%commit_msg%"...
git commit -m "%commit_msg%"

echo.
echo [*] Pushing to GitHub (origin main)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================
    echo   [SUCCESS] Successfully pushed to GitHub!
    echo   Repository: https://github.com/maxecoenergytech/wcmma.git
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo   [NOTICE] Git push encountered an issue.
    echo   Possible causes:
    echo   1. If GitHub prompts for login/token, please sign in.
    echo   2. If the remote repository has existing commits, try:
    echo      git pull origin main --rebase
    echo      git push origin main
    echo ===================================================
)

echo.
pause
