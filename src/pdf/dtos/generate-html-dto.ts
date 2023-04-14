import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';


export class GenerateHtmlDto {
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    @Transform(({ value }) => value.trim()) // Optional: use class-transformer to trim the value
    link: string;
 }
  