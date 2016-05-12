const fs = require('fs');
const os = require('os');
const path = require('path');
const JSZip = require('jszip');
const manifest = require('../src/manifest.json');

const isFirefox = process.argv[2] === '--firefox';
const isOpera = process.argv[2] === '--opera';
const isChrome = !isFirefox && !isOpera;

const platform = (isFirefox) ? 'firefox' : (isOpera) ? 'opera' : 'chromium';
const distFolder = path.join(path.dirname(__dirname), 'dist', platform);

function readDirSync(dir, filelist) {
    const files = fs.readdirSync(dir);

    filelist = filelist || [];
    files.forEach((file) => {
        const relativePath = dir + file;

        if (fs.statSync(relativePath).isDirectory()) {
            filelist = readDirSync(`${relativePath}/`, filelist);
        } else {
            filelist.push({
                path: relativePath,
                data: fs.readFileSync(relativePath)
            });
        }
    });
    return filelist;
}

function createManifest() {
    if (isFirefox) {
        manifest.applications = {
            gecko: {
                id: 'yandex-music-fisher@egoroof.ru',
                strict_min_version: '48.0a1'
            }
        };
    } else if (isChrome) {
        manifest.optional_permissions = [
            'background'
        ];
    }

    const newManifest = JSON.stringify(manifest, null, 2).replace(/[\n]/g, os.EOL) + os.EOL;
    fs.writeFileSync(path.join(distFolder, 'manifest.json'), newManifest);
    console.log(`manifest.json was written in ${distFolder}`);
}

function createArchive() {
    const list = readDirSync(`${distFolder}/`);
    const zip = new JSZip();

    list.forEach((file) => {
        zip.file(file.path.replace(`${distFolder}/`, ''), file.data);
    });

    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9
        }
    }).then((buffer) => {
        const ext = (isFirefox) ? 'xpi' : 'zip';
        const archiveName = `yandex-music-fisher_${manifest.version}_${platform}.${ext}`;

        fs.writeFileSync(archiveName, buffer);
        console.log(`${archiveName} was created`);
    }).catch((e) => console.error(e));
}

createManifest();
createArchive();
