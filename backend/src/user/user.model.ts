import { prop } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { BasketModel } from './basket.model'

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string

  @prop()
  password: string

  @prop({ default: false })
  isAdmin: boolean

  @prop({ default: [] })
  favorite?: []

  @prop({ default: [] })
  basket?: BasketModel[]

  @prop({ default: [] })
  order?: []
}
