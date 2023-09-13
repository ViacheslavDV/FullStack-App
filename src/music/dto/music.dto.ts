import { ArrayMinSize, IsNumber, IsOptional, IsString } from 'class-validator';

export class MusicDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  album: string;

  @IsString()
  artist: string;

  @IsNumber()
  listeners: number;

  @IsString()
  image: string;

  @IsString()
  filePath: string;

  @IsString({ each: true })
  @ArrayMinSize(1)
  genre: string[];
}
