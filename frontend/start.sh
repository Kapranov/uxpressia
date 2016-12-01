#!/usr/bin/env bash

clear
rm -f -r /tmp/if-you-need-to-delete-this-open-an-issue-async-disk-cache/
sleep 2s
rm -f -r /tmp/npm-*
sleep 2s
rm -f -r ./tmp ./dist
npm cache clean
bower cache clean
sleep 2s
echo -en "\n\n\t\tStart Node-EmberJS - Please Waiting!\n"
echo -en "\n\tTo share your site, simply run: bash> ember share"
echo -en "\n\t\twhich behaves like run: bash> ember serve\n\n"
echo -en "\n\tA publicly accessible URL will be inserted into your\n\t clipboard that is ready to paste directly browser.\n"
echo -en "\n\n\t\t     http://api.dev.local:3000\n\n\n"
# ember share --port 3000
ember serve --port 3000
