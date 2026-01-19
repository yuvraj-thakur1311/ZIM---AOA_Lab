
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpecialtyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}