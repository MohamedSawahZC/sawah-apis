import { Body, Controller, Get, Post, Req, Res,UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags,ApiBody } from '@nestjs/swagger';
import { GetHtmlService } from './services/get-html.service';
import { GenerateHtmlDto } from './dtos/generate-html-dto';
import { ConvertHtmlService } from './services/convert-html.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PdfToWordService } from './services/pdf-to-word.service';



@ApiTags('pdf')
@Controller('pdf')
export class PdfController {
    constructor(private readonly getHtmlService: GetHtmlService, private readonly convertHtmlService: ConvertHtmlService,private readonly pdfToWordService : PdfToWordService ) { }

    @Post("/generate-pdf")
    async getHtml(@Body() generateHtmlDto: GenerateHtmlDto, @Res() res: Response): Promise<void> {
        const html: string = await this.getHtmlService.getHtmlFromUrl(generateHtmlDto.link);
        const pdf = await this.convertHtmlService.generatePdf(html);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
        res.send(pdf);
    }

    


}
