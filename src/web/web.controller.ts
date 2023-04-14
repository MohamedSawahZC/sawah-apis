import { Body, Controller, Get, Post, Req, Res,UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags,ApiBody } from '@nestjs/swagger';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { SeoAnalysisResultsDto } from './dtos/seo-analyize-dto';




@ApiTags('web')
@Controller('web')
export class WebController {
    constructor(private readonly seoAnalyzerService: SeoAnalyzerService ) { }

    @Post("/seo")
    async seoAnalyize(@Body() seoAnalysisResultsDto: SeoAnalysisResultsDto) : Promise<any> {
        return await this.seoAnalyzerService.analyzeWebsite(seoAnalysisResultsDto.link);
    }

    


}
