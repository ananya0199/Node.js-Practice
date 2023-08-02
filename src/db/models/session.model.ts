
import { DataTypes } from "sequelize";
import { sequelize } from "../seqCon";

export const SessionModel = sequelize.define("olx_sessions", {
    session_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER
    }
})