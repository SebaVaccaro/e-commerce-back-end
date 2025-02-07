import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'https://e-commerce-woad-phi-43.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  const PORT = process.env.PORT || 3000;
  app.use(cookieParser());

  await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

bootstrap();
