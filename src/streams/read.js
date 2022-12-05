import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const path = join(__dirname, 'files', 'fileToRead.txt');
        const read = createReadStream(path);
        let data = '';
        read.on('data', (chunk) => data += chunk);
        read.on('end', () => stdout.write(data));
    } catch (err) {
        throw err;
    }
};

await read();