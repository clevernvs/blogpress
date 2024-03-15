#!/bin/bash

rsync -arv /home/node/cache/node_modules/ /home/node/app/node_modules/

npm start:dev
