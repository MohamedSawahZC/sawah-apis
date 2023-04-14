import { Module } from '@nestjs/common';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { WebController } from './web.controller';
import { LinkedInScraperService } from './services/linked-in-scrapper.service';

@Module({
  imports: [],
  providers : [SeoAnalyzerService,LinkedInScraperService],
  controllers : [WebController]
})
export class WebModule {}
