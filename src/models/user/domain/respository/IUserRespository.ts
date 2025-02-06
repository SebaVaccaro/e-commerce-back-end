import { User } from "../entity/User";

export interface IUserRespository{
    create(user: {username:string,email:string,password:string}): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
}