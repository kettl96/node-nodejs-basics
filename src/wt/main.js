import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cores = cpus();
    
    const arrPromises = cores.map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(join(__dirname, 'worker.js'), {
                workerData: i + 10                
            });
            worker.on('message', resolve);
            worker.on('error', reject);
        })
    });

    const resultsPromises = await Promise.allSettled(arrPromises);

    const results = resultsPromises.map(({status, value}) => ({
        status,
        value: value ? value : null
    }));
    
    console.log(results);
};

await performCalculations();