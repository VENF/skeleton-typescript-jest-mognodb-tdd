import { Router } from 'express';
import { createUser, findUser } from '../controllers/users.controllers';
const routes = Router();

routes.route('/users').get(findUser).post(createUser);

export default routes;
