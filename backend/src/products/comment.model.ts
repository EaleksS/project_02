import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from '@typegoose/typegoose'

export class CommentModel extends TimeStamps {
  @prop()
  _id: string

  @prop()
  name: string

  @prop()
  comment: string

  @prop()
  img: string
}
