@echo off

cd C:\Users\smitp\actualProjects\optima-landing

call nuxt generate

cd .output

call git init

call git remote add origin https://github.com/kpeter1994/optima-landing-cms.git

call git add .
call git commit -m "Deploy generated site"
call git push -u origin master --force

cd ..\..
pause