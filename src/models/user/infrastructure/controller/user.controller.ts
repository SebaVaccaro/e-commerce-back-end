import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { RegisterUserDto } from "../../application/dtos/register-user.dto";
import { LoginUserDto } from "../../application/dtos/login-user.dto";

@Controller("user")
export class UserController{
    constructor(private readonly userService:UserService){}
    @Post("/register")
    async create(@Body() registerUserDto: RegisterUserDto){
        return await this.userService.register(registerUserDto)
    }

    @Post("/login")
    async login(@Body() loginUserDto: LoginUserDto){
        return await this.userService.login(loginUserDto)
    }
}