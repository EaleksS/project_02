import { IsNumber, IsString, IsObject, IsArray } from 'class-validator'
import { InfoDto } from './info.dto'
import { CommentDto } from './comment.dto'

export class ProductDto {
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
}
