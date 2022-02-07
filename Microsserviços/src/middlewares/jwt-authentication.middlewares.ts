import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/erros/forbidden.error.model";
import jwt  from 'jsonwebtoken';
import userRepository from "../repositories/user.repository";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try{

        const authorizationHeader =  req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informadas');
        }
        const [authorizationType, token] = authorizationHeader.split('');

        if (authorizationType !== 'Basic' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }
       try{
           
        const tokenPayload = jwt.verify(token, 'my_secret_key');

        if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
            throw new ForbiddenError('Token invalido');
        }
        const uuid = tokenPayload.sub;
        const user = await userRepository.findById(uuid);
        req.user = user;
       } catch (error){
           throw new ForbiddenError('Token Inválido');
       }



        next();
    } catch (error){
     next(error)
    };
    
}

export default jwtAuthenticationMiddleware;