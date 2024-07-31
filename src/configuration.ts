import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: parseInt(process.env.port || '3001'),
};
