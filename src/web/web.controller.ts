import { Body, Controller, Get, Post, Param} from '@nestjs/common';
import { Response } from 'express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags,ApiBody } from '@nestjs/swagger';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { SeoAnalysisResultsDto } from './dtos/seo-analyize-dto';
import { LinkedInScraperService } from './services/linked-in-scrapper.service';
import JobResults from './interfaces/jobs-results.interface';




@ApiTags('web')
@Controller('web')
export class WebController {
    constructor(private readonly seoAnalyzerService: SeoAnalyzerService,private readonly linkedInScraperService: LinkedInScraperService ) { }

    @Post("/seo")
    async seoAnalyize(@Body() seoAnalysisResultsDto: SeoAnalysisResultsDto) : Promise<any> {
        return await this.seoAnalyzerService.analyzeWebsite(seoAnalysisResultsDto.link);
    }

    @Get(':keyword')
    async getJobsByKeyword(@Param('keyword') keyword: string): Promise<JobResults[]> {
      const jobListings = await this.linkedInScraperService.scrapeJobsByKeyword(keyword);
      return jobListings;
    }


}
