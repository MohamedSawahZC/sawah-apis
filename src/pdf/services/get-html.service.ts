import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class GetHtmlService {
  async getHtmlFromUrl(url: string): Promise<string> {
    // Fetch HTML content from the URL
    const response = await axios.get(url);

    // Load HTML content into Cheerio for parsing
    const $ = cheerio.load(response.data);

    // Extract the HTML content
    const html = $.html();

    return html;
  }
}
