import { IsNumber, IsString, IsObject, IsArray } from 'class-validator'
import { CommentDto } from 'src/products/dto/comment.dto'
import { InfoDto } from 'src/products/dto/info.dto'

export class AddBasketDto {
  @IsString()
  _id: string

  @IsString()
  name: string

  @IsNumber()
  price: number

  @IsNumber()
  discount: number

  @IsString()
  description: string

  @IsString()
  imageUrl: string

  @IsArray()
  comments: CommentDto

  @IsObject()
  info: InfoDto

  @IsNumber()
  quantity: number

  @IsString()
  createdAt: string

  @IsString()
  updatedAt: string

  @IsNumber()
  __v: number
}
