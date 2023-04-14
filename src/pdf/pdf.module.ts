import { Module } from '@nestjs/common';
import { GetHtmlService } from './services/get-html.service';
import { PdfController } from './pdf.controller';


@Module({
  controllers: [PdfController],
  providers: [GetHtmlService],
})
export class PdfModule {}
