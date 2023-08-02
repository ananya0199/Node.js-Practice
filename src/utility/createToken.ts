import jwt from "jsonwebtoken"
import { SessionModel } from "../db/models/session.model";


export const generateJWT = async (userData: any) => {

    try {
        const newSessionData: any = await SessionModel.create({ user_id: userData.id }, {raw:true});
        let jwtObj = {
            session_id: newSessionData.dataValues.session_id,
            user_id: newSessionData.dataValues.user_id
        }
        let token = jwt.sign(jwtObj, 'ananya', { expiresIn: '24h' })

        return token;

    } catch (e) {
        return e;
    }

}

