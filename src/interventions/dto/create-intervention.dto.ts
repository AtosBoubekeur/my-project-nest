import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateInterventionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  job: string;

  @IsString()
  location: string;

  @IsNumber()
  daysNumber: number;

  @Type(() => Date)
  @IsDate()
  dateStart: Date;

  @Type(() => Date)
  @IsDate()
  dateEnd: Date;
}
