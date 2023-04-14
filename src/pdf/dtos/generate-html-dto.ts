import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class GenerateHtmlDto {
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    @Transform(({ value }) => value.trim())
    @ApiProperty({
        required : true,
        description : "Link that will be generated as html"
    })    // Optional: use class-transformer to trim the value
    link: string;
 }
  