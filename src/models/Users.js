import { SchemaTypes, Schema, model } from 'mongoose';

const usersSchema = new Schema({
    userName: {
        type: SchemaTypes.String,
        required: true
    },
    password: {
        type: SchemaTypes.String,
        required: true
    }

});