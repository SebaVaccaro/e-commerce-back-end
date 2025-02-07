import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const allowedOrigins = [
  'http://localhost:5173', 
  process.env.PRODUCTION_URL || 'https://e-commerce-woad-phi-43.vercel.app',
];
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

bootstrap();
