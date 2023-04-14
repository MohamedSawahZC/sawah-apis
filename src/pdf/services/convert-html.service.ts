import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ConvertHtmlService {
  private browser: puppeteer.Browser;

  constructor() {
    // Create a singleton instance of the browser when the service is initialized
    puppeteer.launch().then(browser => {
      this.browser = browser;
    });
  }

  async generatePdf(html: string): Promise<Buffer> {
    const page = await this.browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({ format: 'A4', printBackground: true });

    return pdf;
  }
}
