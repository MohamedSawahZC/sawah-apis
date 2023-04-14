import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import JobResults from '../interfaces/jobs-results.interface';

@Injectable()
export class LinkedInScraperService {
    async scrapeJobsByKeyword(keyword: string): Promise<JobResults[]> {
        const jobListings: JobResults[] = [];

        // Launch a headless browser with Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // Navigate to LinkedIn job search page
        await page.goto(`https://www.linkedin.com/jobs/search/?keywords=${keyword}`);
        console.log(0);
        // Wait for job listings to load
        await page.waitForSelector('.jobs-search__results-list', { timeout: 60000 }); // Increase timeout to 60 seconds
        // Wait for job listings to finish rendering
        await page.waitForFunction(() => {
            const jobListingsContainer = document.querySelector('.jobs-search__results-list');
            return jobListingsContainer && jobListingsContainer.childElementCount > 0;
        });
        // Get the HTML content
        const html = await page.content();
        const $ = cheerio.load(html);
        // Extract job listings
        $('.job-search-card').each((index, element) => {
            const title : string = $(element).find('.base-search-card__title').text().trim();
            const company : string  = $(element).find('.base-search-card__subtitle').text().trim();
            const location : string  = $(element).find('.job-search-card__location').text().trim();
            const url : string  = $(element).find('.base-card__full-link').attr('href');
            jobListings.push({
                company : company,
                place :location,
                title:title,
                url : url,
            });
        });
        

        // Close the browser
        await browser.close();

        return jobListings;
    }
}
