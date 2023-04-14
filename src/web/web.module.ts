import { Module } from '@nestjs/common';
import { SeoAnalyzerService } from './services/seo-analyizer.service';
import { WebController } from './web.controller';

@Module({
  imports: [],
  providers : [SeoAnalyzerService],
  controllers : [WebController]
})
export class WebModule {}
