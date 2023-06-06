import * as path from 'path';

const devPath: string = path.join(__dirname, `../../env/.env.development`);
const prodPath: string = path.join(__dirname, `../../env/.env.production`);

// Select the env path based on the command used to start the application server.
const envPath: string =
  process.env.NODE_ENV === 'production' ? prodPath : devPath;

export default {
  isGlobal: true,
  envFilePath: envPath,
  ignoreEnvFile: process.env.NODE_ENV === 'production',
};
