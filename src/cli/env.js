import { env, stdout } from 'process';

const parseEnv = () => {
    const environment = Object.entries(env).reduce((acc, [key, value]) => {
        if (key.startsWith('RSS_')) {
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []);
    stdout.write(environment.join('; '));
};

parseEnv();