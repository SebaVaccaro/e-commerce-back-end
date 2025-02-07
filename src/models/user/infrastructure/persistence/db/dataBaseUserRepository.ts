import { InjectModel } from "@nestjs/mongoose"
import { UserS } from "./user-schema"
import { Model } from "mongoose"
import { User } from "src/models/user/domain/entity/User"
import { UserRespository } from "src/models/user/domain/respository/UserRespository"


export class DataBaseUserRepository implements UserRespository {
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserS>) { }

    async create(user: { username: string, email: string, password: string, id: string }): Promise<User> {
        const res = await new this.userModel(user).save()
        return res
    }

    async findAll(): Promise<User[]> {
        const res = await this.userModel.find()
        return res
    }

    async findById(id: string): Promise<User | null> {
        const res = await this.userModel.findById(id)
        return res
    }

    async findByEmail(email: string): Promise<User | null> {
        const res = await this.userModel.findOne({email}).exec()
        return res
    }

    async update(user: User): Promise<User | null> {
        const res = await this.userModel.findByIdAndUpdate(user.id, user)
        return res
    }

    async delete(id: string): Promise<void> {
        await this.userModel.findByIdAndDelete(id)
    }

}