import { Injectable } from '@nestjs/common';
import { PdfParser } from 'docx-pdf';

@Injectable()
export class PdfToWordService {
  async convertPdfToWord(buffer: Buffer): Promise<Buffer> {
    const pdfParser = new PdfParser();
    const text = await pdfParser.parseBuffer(buffer);
    const docxBuffer = await PdfParser.convertToDocx(text);
    return docxBuffer;
  }
}