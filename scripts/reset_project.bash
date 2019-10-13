#!/bin/bash

cd android && ./gradlew clean && cd ../
rm -rf /tmp/react-*
rm -rf /tmp/haste-*
rm -rf /tmp/metro-*
rm -rf node_modules
rm -rf android/app/build
watchman watch-del-all
yarn cache clean
yarn install
yarn start --reset-cache

