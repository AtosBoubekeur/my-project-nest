import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Intervention } from 'src/interventions/entities/intervention.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastname: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  username?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(225)
  email: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  password: string;

  @IsOptional()
  @Type(() => Intervention)
  intervention?: Intervention | null;
}
