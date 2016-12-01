#!/usr/bin/env bash

clear
rake tmp:clear
rake log:clear
echo -en "\n\n\t\t\tStart Rails-API vs. Node-EmberJS - Please Waiting!\n\n"
sleep 5s
echo -en "\n\n\t\t\t http://api.dev.local:3000\n"
rails server -b api.dev.local
