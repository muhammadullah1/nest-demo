import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { Request, Response, NextFunction } from 'express';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();
