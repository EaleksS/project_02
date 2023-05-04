import { prop } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { CommentDto } from 'src/products/dto/comment.dto'
import { InfoDto } from 'src/products/dto/info.dto'

export class BasketModel {
  @prop()
  _id: string

  @prop()
  name: string

  @prop()
  price: number

  @prop()
  discount: number

  @prop()
  description: string

  @prop()
  imageUrl: string

  @prop()
  comments: CommentDto

  @prop()
  info: InfoDto

  @prop()
  quantity: number

  @prop()
  createdAt: string

  @prop()
  updatedAt: string

  @prop()
  __v: number
}
