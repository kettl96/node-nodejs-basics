import { appendFile, open, readFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const create = async () => {
    const path = join(__dirname, 'files', 'fresh.txt')
    readFile(path, 'utf8', (err) => {
        if (err) {
            open(path, 'w', (err) => { if(err) throw err })
            appendFile(path, 'I am fresh and young', (err) => {
                if(err) throw err
            })
        }
        else throw new Error('FS operation failed');
    }) 
};

await create();