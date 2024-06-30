import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    Logger.log(`Server is running on PORT ${3000} ⛱`, 'PRODUCER');
  });
}
bootstrap();
