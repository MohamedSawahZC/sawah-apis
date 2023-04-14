import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import axios from 'axios';
import SeoAnalysisResult from '../interfaces/seo-results.interface';

@Injectable()
export class SeoAnalyzerService {
  
  async analyzeWebsite(url: string): Promise<SeoAnalysisResult> {
    const html = await this.fetchHtml(url);
    const $ = cheerio.load(html);
    
    // Extract meta tags
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content') || '';
    const keywords = $('meta[name="keywords"]').attr('content') || '';
    
    // Extract header tags
    const h1Tags = $('h1').toArray().map(tag => $(tag).text());
    const h2Tags = $('h2').toArray().map(tag => $(tag).text());
    
    // Extract image tags and their alt attributes
    const imageTags = $('img').toArray();
    const images = imageTags.map(tag => $(tag).attr('src') || '').filter(src => src !== '');
    const imageAltAttributes = imageTags.map(tag => $(tag).attr('alt') || '');
    
    // Calculate SEO score based on analysis
    const seoScore = this.calculateSeoScore(title, description, keywords, h1Tags, h2Tags, images, imageAltAttributes);
    
    // Create and return SEO analysis result object
    const result: SeoAnalysisResult = {
      seoScore,
    };
    
    return result;
  }
  
  private async fetchHtml(url: string): Promise<string> {
    try {
      const response: AxiosResponse = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch HTML content');
    }
  }
  
  private calculateSeoScore(title: string, description: string, keywords: string, 
                             h1Tags: string[], h2Tags: string[], 
                             images: string[], imageAltAttributes: string[]): number {
       // Perform SEO analysis and calculate score
       let seoScore = 0;
    
       // Check if title exists
       if (title) {
         seoScore += 10;
       }
       
       // Check if description exists
       if (description) {
         seoScore += 5;
       }
       
       // Check if keywords exist
       if (keywords) {
         seoScore += 3;
       }
       
       // Check if h1 tags exist
       if (h1Tags && h1Tags.length > 0) {
         seoScore += 5;
       }
       
       // Check if h2 tags exist
       if (h2Tags && h2Tags.length > 0) {
         seoScore += 3;
       }
       
       // Check if images exist
       if (images && images.length > 0) {
         seoScore += 5;
       }
       
       // Check if image alt attributes exist
       if (imageAltAttributes && imageAltAttributes.length > 0) {
         seoScore += 3;
       }
       
       return seoScore;
  }
}


