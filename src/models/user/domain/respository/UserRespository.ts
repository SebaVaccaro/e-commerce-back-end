import { User } from "../entity/User";

export interface UserRespository{
    create(user: {username:string,email:string,password:string, id:string}): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<User | null>;
    delete(id: string): Promise<void>;
}