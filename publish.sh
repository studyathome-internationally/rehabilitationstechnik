#!/bin/bash

if [[ -z "$1" ]] ; then
    yarn docs:build --clean-cache --clean-temp
    scp -r docs/.vuepress/dist/* study@studyathome.technikum-wien.at:/var/www/html/asterics-web-devwindows/
    ssh study@studyathome.technikum-wien.at chmod -R 755 /var/www/html/asterics-web-devwindows/
else
    if [[ "$1" == "next" ]] ; then
        BASE="/next/" yarn docs:build --clean-cache --clean-temp
        ssh study@studyathome.technikum-wien.at mkdir -p /var/www/html/asterics-web-devwindows/next
        ssh study@studyathome.technikum-wien.at rm -rf /var/www/html/asterics-web-devwindows/next/*
        scp -r docs/.vuepress/dist/* study@studyathome.technikum-wien.at:/var/www/html/asterics-web-devwindows/next/
        ssh study@studyathome.technikum-wien.at chmod -R 755 /var/www/html/asterics-web-devwindows/next
    fi
fi