#!/bin/bash

cd /home/ubuntu/Demo

git pull

pm2 restart 0

echo "Deployment successful" 
