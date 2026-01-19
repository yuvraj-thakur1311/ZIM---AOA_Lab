
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, IsNumber } from 'class-validator';

export class CreateStaffDto {
  @IsString() @IsNotEmpty() @MaxLength(100) firstName: string;
  @IsString() @IsOptional() @MaxLength(100) middleName?: string;
  @IsString() @IsNotEmpty() @MaxLength(100) lastName: string;

  @IsEmail() @MaxLength(100) email: string;

  @IsString() @IsNotEmpty() @MaxLength(20) phoneNumber: string;
  @IsString() @IsOptional() @MaxLength(20) alternatePhoneNumber?: string;

  @IsString() @IsNotEmpty() @MaxLength(255) addressLine1: string;
  @IsString() @IsOptional() @MaxLength(255) addressLine2?: string;

  @IsString() @IsNotEmpty() @MaxLength(100) city: string;
  @IsString() @IsNotEmpty() @MaxLength(100) countryState: string;
  @IsString() @IsNotEmpty() @MaxLength(100) country: string;
  @IsString() @IsNotEmpty() @MaxLength(100) postalCode: string;

  // Provide specialty IDs to link
  @IsArray() @IsOptional()
  @IsNumber({}, { each: true })
  specialtyIds?: number[];
}