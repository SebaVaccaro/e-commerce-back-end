import { Inject } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from "../respository/UserRepository";
import { User } from "../entity/user/User";

export class RegisterUserUseCase{
    constructor(@Inject("UserRepository") private readonly db:UserRepository){}
    async execute(username: string, email: string, password: string):Promise<User | string>{
        const verifyEmail = await this.db.findByEmail(email)
        if(verifyEmail)return"email exist"
        const passwordHashed = await bcrypt.hash(password, 10)
        const _id = uuidv4()
        console.log(_id)
        const passRes = await this.db.createPassword(_id, passwordHashed)
        console.log(passRes)
        const res = await this.db.create({username, email, _id})
        console.log(res)
        return res && passRes? res: "no fue posible crear el usuario"
    }
}