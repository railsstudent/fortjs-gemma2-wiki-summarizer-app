import { Fort } from 'fortjs';
import path from 'path';
import { env } from '../configuration';
import { routes } from '../routes';

export const createApp = async () => {
  Fort.folders = [
    {
      alias: '/',
      path: path.join(__dirname, '../static'),
    },
  ];

  Fort.routes = routes;
  Fort.port = env.port;

  await Fort.create();
  process.env.APP_URL = `http://localhost:${Fort.port}`;
};
