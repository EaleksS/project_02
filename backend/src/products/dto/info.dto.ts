import { IsString } from 'class-validator'

export class InfoDto {
  @IsString()
  weight: string

  @IsString()
  proteins: string

  @IsString()
  carbohydrates: string

  @IsString()
  fats: string

  @IsString()
  calories: string
}
