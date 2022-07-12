import { Content } from '../entities/content.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContentDto extends Content {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString({ message: 'Digite um número válido!' })
  @IsNotEmpty()
  participation: string;
}
