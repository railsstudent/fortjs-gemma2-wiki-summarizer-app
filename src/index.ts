import { Fort } from 'fortjs';
import { createApp } from './core/bootstrap';

if (process.env.NODE_ENV !== 'test') {
  createApp()
    .then(() => {
      Fort.logger.debug(`Your fort has been forged and is now ready for exploration at ${process.env.APP_URL}`);
    })
    .catch((err) => {
      console.error(err);
    });
}
