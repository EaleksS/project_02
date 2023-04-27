import { IsString } from 'class-validator'

export class CommentDto {
  @IsString()
  name: string

  @IsString()
  comment: string

  @IsString()
  img: string
}