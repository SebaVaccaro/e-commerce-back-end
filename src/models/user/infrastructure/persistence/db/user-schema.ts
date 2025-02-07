import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserS {
    @Prop({ type: String, required: true })
    id: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserS);