import { DataTypes } from "sequelize";
import db from "./database.js";

export const Vote = db.define('votes', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vote_type_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    bounty_amount: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'votes',
    schema: 'public',
    timestamps: false,
    indexes: [
        {
            name: "votes_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
