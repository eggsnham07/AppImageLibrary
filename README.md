# AppImageLibrary: AppImage launcher for linux

Requirements:
- node.js
- npm

### Building:
```shell
# Build scripts and run
npm install tsc electron --location=global
npm run build && npm run start
```

To add apps move AppImage files to ~/.local/share/AppImageLibrary and make sure you have execute permissions on the AppImage files

### Future features:
- Package files for installing
- Install to launcher dir button