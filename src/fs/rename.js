import { readdir, rename } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const reName = async () => {
    let path = join(__dirname, 'files')
    readdir(path, async (err, files) => {
       if(!files.includes('wrongFilename.txt')) throw Error('FS operation failed')
        files.forEach(file => {
            if (file === 'wrongFilename.txt') {
                rename(join(path, 'wrongFilename.txt'), join(path, 'properFilename.md'), err => {
                    if (err) console.log(err);
                })
                return
            }
            if (file === 'properFilename.md') throw Error('FS operation failed')
        });
    });
};

await reName();