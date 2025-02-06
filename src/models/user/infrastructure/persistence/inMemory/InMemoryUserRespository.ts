import { Injectable } from "@nestjs/common";
import { IUserRespository } from "../../../domain/respository/IUserRespository";
import { User } from "../../../domain/entity/User";

@Injectable()
export class InMemoryUserRepository implements IUserRespository {
  private users: User[] = [];

  async create(user: {username:string,email:string,password:string, id:string}): Promise<User> {
    const newUser = new User(user.username, user.email, user.password, user.id)
    this.users.push(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.id === id);
    return user || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    console.log(this.users)
    const user = this.users.find(u => u.email === email);
    return user || null;
  }

  async update(user: User): Promise<User> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index === -1) {
      throw new Error(`Usuario con id ${user.id} no encontrado`);
    }
    this.users[index] = user;
    return user;
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      throw new Error(`Usuario con id ${id} no encontrado`);
    }
    this.users.splice(index, 1);
  }
}
