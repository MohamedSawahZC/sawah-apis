import { Module } from '@nestjs/common';
import { GetHtmlService } from './services/get-html.service';
import { PdfController } from './pdf.controller';
import { ConvertHtmlService } from './services/convert-html.service';
import { MulterModule } from '@nestjs/platform-express';
import { PdfToWordService } from './services/pdf-to-word.service';


@Module({
  imports : [
    MulterModule.register({ dest: './uploads' }) // Configure Multer for file uploads
  ],
  controllers: [PdfController],
  providers: [GetHtmlService,ConvertHtmlService,PdfToWordService],
})
export class PdfModule {}
