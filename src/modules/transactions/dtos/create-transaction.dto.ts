import { IsEmail, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  item: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
