@echo off
title LavaTudo - Servidor Local
echo ========================================================
echo A iniciar o website LavaTudo...
echo ========================================================
cd /d "%~dp0"
start http://localhost:5173
npm run dev
pause
