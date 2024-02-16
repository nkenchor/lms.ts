import { Express } from 'express';
import { UserController } from '../api/user.controller'; // Adjust the import path as necessary.
import { CreateUserValidationRules, LoginUserValidationRules } from '../../core/domain/validation/user.validation';
import { validationHelper } from '../helper/validation.helper';
import { Request, Response } from 'express';

import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export const userRoutes = (app: Express, userController: UserController): void => {
    // User routes
    app.post('/users', CreateUserValidationRules, validationHelper, (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => userController.createUser(req, res));
    app.post('/users/login', LoginUserValidationRules, validationHelper, (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => userController.loginUser(req, res));
};