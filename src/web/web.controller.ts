import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Response } from 'express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { SeoAnalysisResultsDto } from './dtos/seo-analyize-dto';
import { LinkedInScraperService } from './services/linked-in-scrapper.service';
import JobResults from './interfaces/jobs-results.interface';
import { text } from 'stream/consumers';
import { GrammarCheckerService } from './services/grammar-check.service';
import { GrammarCheckDto } from './dtos/grammar-dto';



@ApiTags('web')
@Controller('web')
export class WebController {
  constructor(private readonly seoAnalyzerService: SeoAnalyzerService, private readonly linkedInScraperService: LinkedInScraperService,private readonly grammarCheckerService:GrammarCheckerService) { }

  @Post("/seo")
  async seoAnalyize(@Body() seoAnalysisResultsDto: SeoAnalysisResultsDto): Promise<any> {
    return await this.seoAnalyzerService.analyzeWebsite(seoAnalysisResultsDto.link);
  }

  @Get(':jobtitle')
  async getJobsByKeyword(@Param('jobtitle') jobtitle: string): Promise<JobResults[]> {
    const jobListings = await this.linkedInScraperService.scrapeJobsByKeyword(jobtitle);
    return jobListings;
  }

   @Post("/grammar")
   async checkGrammer(@Body() grammarCheckDto: GrammarCheckDto): Promise<any> {
    const results = await this.grammarCheckerService.grammerCheck(grammarCheckDto.text);
    return results;
  }



}
