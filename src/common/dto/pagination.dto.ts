import { IsOptional, IsPositive, Min, IsNumber } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  @Min(1)
  limit?: number;
  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;
}
