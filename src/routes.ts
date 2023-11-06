import HomeRoute from '@routes/index.route';

import userRoutes from '@/routes/users.routes'




const routes = [
  {
    path: '/',
    func: HomeRoute,
  },
  {
    path: '/user',
    func: userRoutes,
  }

];

export default routes;
