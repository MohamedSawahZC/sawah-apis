import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiTags,ApiBody,ApiResponse } from '@nestjs/swagger';
import { GetHtmlService } from './services/get-html.service';
import { GenerateHtmlDto } from './dtos/generate-html-dto';


@ApiTags('pdf')
@Controller('pdf')
export class PdfController {
  constructor(private readonly getHtmlService: GetHtmlService) {}

  @Post("/generate-html")

  @ApiBody({ schema: { properties: { link: { type: 'string' } } } ,type :GenerateHtmlDto })
  @ApiResponse({
    status: 200,
    description: 'Successfully converted PDF to Word',
    type: 'string',
  })
  async getHtml(@Body('link') link:string): Promise<string> {
    const html : string = await this.getHtmlService.getHtmlFromUrl(link);
    return html;
  }
}
