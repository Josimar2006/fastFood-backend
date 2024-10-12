import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Delivery Fast food')
    .setDescription('Api for Fast food')
    .setVersion('1.0')
    .addTag('fastFood')
    .build();

  const doc = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, doc);

    await app.listen(3000);
}
bootstrap();
