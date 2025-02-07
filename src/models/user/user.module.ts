import { Module } from "@nestjs/common";
import { UserService } from "./infrastructure/service/user.service";
import { UserController } from "./infrastructure/controller/user.controller";
import { RegisterUserUseCase } from "./domain/usecases/RegisterUserUseCase";
import { LoginUserUseCase } from "./domain/usecases/LoginUserUseCase";
import { ConfigModule } from "@nestjs/config";
import { UserS, UserSchema } from "./infrastructure/persistence/db/user-schema";
import { MongooseModule } from "@nestjs/mongoose";
import { DataBaseUserRepository } from "./infrastructure/persistence/db/dataBaseUserRepository";


@Module({
  imports:[
    MongooseModule.forFeature([{name: UserS.name, schema: UserSchema}]),
  ],
  providers: [
    {
      provide: "UserRepository",
      useClass: DataBaseUserRepository,
    },
    RegisterUserUseCase,
    LoginUserUseCase,
    UserService,
  ],
  controllers: [UserController]
})
export class UserModule { }