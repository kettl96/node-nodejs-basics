import { copyFile, mkdir, readdir } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const copy = async () => {
    let path = join(__dirname, 'files')
    let pathCopy = join(__dirname, 'files-copy')
    mkdir(pathCopy, (err) => { if(err) throw Error('FS operation failed') })
    readdir(path, async (err, files) => {
        if (err) throw new Error('FS operation failed');
        else {
          files.forEach(file => {
            copyFile(join(path, file), join(pathCopy,file), err => {
              if (err) throw new Error('FS operation failed');
            });
          });
        }
      });
};

copy();