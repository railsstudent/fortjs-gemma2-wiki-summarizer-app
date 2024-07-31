import { DefaultController } from '@/controllers/default_controller';
import { IControllerRoute } from 'fortjs';
import { WikiController } from './controllers/wiki_controller';

export const routes: IControllerRoute[] = [
  {
    path: '/wiki',
    controller: WikiController,
  },
  {
    path: '/*',
    controller: DefaultController,
  },
];
