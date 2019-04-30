#!/usr/bin/env sh

react-native bundle \
  --platform=windows \
  --entry-file index.js \
  --assets-dest windows/sandboxeverywhere/ReactAssets \
  --bundle-output windows/sandboxeverywhere/ReactAssets/index.windows.bundle
  --dev false
