#!/bin/bash
yarn docs:build --clean-cache --clean-temp
scp -r docs/.vuepress/dist/* study@studyathome.technikum-wien.at:/var/www/html/asterics-web-devwindows/
ssh study@studyathome.technikum-wien.at chmod -R 755 /var/www/html/asterics-web-devwindows/