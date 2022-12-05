import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const file = join(__dirname, 'files', 'fileToCompress.txt');
    const archive = join(__dirname, 'files', 'archive.gz');
    const read = createReadStream(file);
    const zip = createGzip();
    const write = createWriteStream(archive);
    try {
        await pipeline(read, zip, write);
    } catch (err) {
        throw err;
    }
};

await compress();