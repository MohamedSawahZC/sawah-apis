import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create a Swagger document builder
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for My API')
    .setVersion('1.0')
    .build();

  // Generate the Swagger JSON document
  const document = SwaggerModule.createDocument(app, config);

  // Add Swagger JSON document to the Swagger UI
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
