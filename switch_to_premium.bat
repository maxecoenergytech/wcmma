@echo off
title WCMAA India - Switch to Premium Version
color 0B

echo ========================================================
echo   WCMAA INDIA - DUAL VERSION SWITCHER
echo   Target: PREMIUM VERSION (Cinematic 3D & Modern)
echo ========================================================
echo.

echo [1/3] Updating site configuration to PREMIUM mode...
node -e "const fs = require('fs'); const cfg = JSON.parse(fs.readFileSync('src/config/siteMode.json')); cfg.siteMode = 'premium'; cfg.lastUpdated = new Date().toISOString().split('T')[0]; fs.writeFileSync('src/config/siteMode.json', JSON.stringify(cfg, null, 2)); console.log('-> siteMode updated to: ' + cfg.siteMode);"

echo.
echo [2/3] Verifying site build...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    color 0C
    echo.
    echo [ERROR] Build verification failed. Please check the error above.
    pause
    exit /b %ERRORLEVEL%
)

color 0A
echo.
echo ========================================================
echo   SUCCESS! Website is now switched to PREMIUM VERSION.
echo ========================================================
echo.
echo To preview locally:
echo   1. Run: npm run dev
echo   2. Open: http://localhost:3000
echo.
echo To publish this change live to GitHub Pages:
echo   Double-click: push_to_github.bat
echo.
pause
