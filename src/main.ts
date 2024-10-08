import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);

  app.enableCors({
    origin: '*', 
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization', 
    credentials: true,
  });

  app.useLogger(logger)

  await app.listen(port);
}
bootstrap();
