import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class GrammarCheckDto {
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    @Transform(({ value }) => value.trim())
    @ApiProperty({
        required : true,
        description : "Text will check"
    })    // Optional: use class-transformer to trim the value
    text: string;
 }
  