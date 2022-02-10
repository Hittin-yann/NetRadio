#!/bin/bash

cd client
npm run build
cd build 
rm -rf ../../serveur/src/views/*
cp -r . ../../serveur/src/views