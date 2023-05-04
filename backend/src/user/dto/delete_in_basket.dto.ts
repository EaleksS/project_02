import { IsString } from 'class-validator'

export class DeleteBasketDto {
  @IsString()
  _id: string
}
