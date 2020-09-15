import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    DB_HOST: str(),
    DB_PASSWORD: str(),
    DB_USERNAME: str(),
    DB_DATABASE: str(),
    DB_PORT: port(),
    APP_PORT: port(),
  });
}

export default validateEnv;
