import { Inject } from "@nestjs/common";
import { User } from "../entity/User";
import { UserRespository } from "../respository/UserRespository";
import * as bcrypt from 'bcrypt';

export class LoginUserUseCase {
    constructor(@Inject("UserRepository") private readonly db: UserRespository) { }
    async execute(email: string, password: string): Promise<User | string> {
        const user = await this.db.findByEmail(email)
        if (!user) return "email no encontrado"

        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) return "contrasenia invalida"
        
        return user
    }
}