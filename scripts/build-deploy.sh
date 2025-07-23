#!/bin/bash

# Build and deploy script for dev-made-it
set -e

echo "Starting build and deploy process..."

echo "1. Pulling latest changes from git..."
git pull

echo "2. Generating static site with pnpm..."
pnpm generate

echo "3. Running finalization script..."
sudo finalize-dev-made-it-web.sh

echo "Build and deploy completed successfully!"
