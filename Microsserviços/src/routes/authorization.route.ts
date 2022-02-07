import { Request, Response, NextFunction, Router } from "express";
import ForbiddenError from "../models/erros/forbidden.error.model";
import  jwt, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middlewares";

const authorizationRoute = Router();

authorizationRoute.post('/token', jwtAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: 1000};
        const secretKey = 'my_secret_key';

        const JWT = jwt.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({ token: JWT });
    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) =>{
    res.sendStatus(StatusCodes.OK)

})

export default authorizationRoute;
