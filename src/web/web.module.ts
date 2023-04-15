import { Module } from '@nestjs/common';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { WebController } from './web.controller';
import { LinkedInScraperService } from './services/linked-in-scrapper.service';
import { GrammarCheckerService } from './services/grammar-check.service';

@Module({
  imports: [],
  providers : [SeoAnalyzerService,LinkedInScraperService,GrammarCheckerService],
  controllers : [WebController]
})
export class WebModule {}
