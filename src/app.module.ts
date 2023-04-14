import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    PdfModule,
    WebModule
  ],
})
export class AppModule {}
