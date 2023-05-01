import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from '@typegoose/typegoose'
import { CommentModel } from './comment.model'

export class ProductModel extends TimeStamps {
  @prop({ unique: true })
  name: string

  @prop()
  price: number

  @prop()
  discount: number

  @prop()
  description: string

  @prop()
  imageUrl: string

  @prop({ default: [] })
  comments: CommentModel[]

  @prop()
  info: {
    weight: string
    proteins: string
    carbohydrates: string
    fats: string
    calories: string
  }
}
