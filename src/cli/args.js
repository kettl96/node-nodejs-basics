import {argv, stdout} from 'process';

const parseArgs = () => {
    const args = argv.slice(2).reduce((acc, arg, i, arr) => {
        if (arg.startsWith('--')) {
            if (arr[i + 1]) {
                acc.push(`${arg.slice(2)} is ${arr[i + 1]}`);
            }
        }
        return acc;
    }, []);
    stdout.write(args.join(', '));
};

parseArgs();