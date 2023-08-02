import { Request, Response, NextFunction } from "express";
import User from "../db/models/user.model";
import { generateJWT } from "../utility/createToken";
import { SessionModel } from "../db/models/session.model";
import { log } from "console";

export const Signup = async (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body,'------------------');
    try{
        const { firstName, lastName, email, password, gender} = req.body;        
        let newUser = await User.create(req.body);
        res.send(newUser);

    }catch (e) {
        res.send(e)
    }
}

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body,'------------------');

    try {
        const { email, password } = req.body;
        let userData = await User.findOne({
            where: {
                email: email,
                password: password
            },
            attributes: ['id'],
            raw: true
        })
        console.log('userData =============> ',userData);
        // let data = await User.findAndCountAll({
        //     attributes:['id']
        // })
        // res.send(data);
        let jwtToken = await generateJWT(userData)

        res.status(200).send(jwtToken)
    } catch (e) {
        res.send(e)
    }
}

export const Logout = async (req: Request, res: Response) => {
    try {
        const { tokenData } = req.body;
        let deleted = await SessionModel.destroy({
            where: { user_id: tokenData.user_id, session_id: tokenData.session_id },
        });

        res.status(200).send("LOGGED OUT")
    } catch (e) {
        res.status(400).send(e)
    }
}