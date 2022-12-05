import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const file = join(__dirname, 'files', 'archive.gz');
    const result = join(__dirname, 'files', 'fileToCompress.txt');
    const read = createReadStream(file);
    const zip = createUnzip();
    const write = createWriteStream(result);
    try {
        await pipeline(read, zip, write);
    } catch (err) {
        throw err;
    }
};

await decompress();