#!/bin/bash

# This script builds the node-modules-layer.


# clean previous build
echo 'Cleaning build directory'
rm -rf node-modules-layer

# create required directory structure
# see https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html#configuration-layers-path
mkdir -p node-modules-layer/nodejs

# copy package.json from project root
cp ../package.json node-modules-layer/nodejs

# install dependencies
echo 'Installing dependencies...'
cd node-modules-layer/nodejs && npm install --only=production --no-optional

echo 'Build finished'