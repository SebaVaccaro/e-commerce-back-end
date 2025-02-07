import { Inject } from "@nestjs/common";
import { User } from "../entity/User";
import { UserRespository } from "../respository/UserRespository";
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class RegisterUserUseCase{
    constructor(@Inject("UserRepository") private readonly db:UserRespository){}
    async execute(username: string, email: string, password: string):Promise<User | string>{
        
        const verifyEmail = this.db.findByEmail(email)
        
        if(!verifyEmail)return"email exist"
        const passwordHashed = await bcrypt.hash(password, 10)
        
        const id = uuidv4()
        
        const user = new User(username, email, passwordHashed, id)
        
        const res = this.db.create(user)
        
        return res
    }
}