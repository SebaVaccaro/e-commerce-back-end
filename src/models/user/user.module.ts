import { Module } from "@nestjs/common";
import { UserService } from "./infrastructure/service/user.service";
import { UserController } from "./infrastructure/controller/user.controller";
import { InMemoryUserRepository } from "./infrastructure/persistence/inMemory/InMemoryUserRespository";
import { RegisterUserUseCase } from "./domain/usecases/RegisterUserUseCase";
import { LoginUserUseCase } from "./domain/usecases/LoginUserUseCase";

@Module({
    providers: [
        {
          provide: "UserRespository",
          useClass: InMemoryUserRepository,
        },
        RegisterUserUseCase,
        LoginUserUseCase,
        UserService,
      ],
    controllers: [UserController]
})
export class UserModule{}