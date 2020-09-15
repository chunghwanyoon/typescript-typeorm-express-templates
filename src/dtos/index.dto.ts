import { IsString } from 'class-validator';

export class CreateIndexDto {
  @IsString()
  name: string;
}
