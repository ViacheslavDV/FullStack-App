import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum EMusicFilters {
  MOST_POPULAR = 'most-popular',
  LESS_POPULAR = 'less-popular',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export class AllMusicDto extends PaginationDto {
  @IsOptional()
  @IsEnum(EMusicFilters)
  sort: EMusicFilters;

  @IsOptional()
  @IsString()
  search: string;
}
