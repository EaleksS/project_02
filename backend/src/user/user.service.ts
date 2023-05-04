import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common'
import { UserModel } from './user.model'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { UpdateUserDto } from './dto/update-user.dto'
import { getSalt, hash } from 'bcryptjs'
import { AddBasketDto } from './dto/add_basket.dto'
import { DeleteBasketDto } from './dto/delete_in_basket.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
  ) {}

  async byId(_id: string) {
    const user = await this.UserModel.findById(_id)
    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async updateProfile(_id, dto: UpdateUserDto) {
    const user = await this.byId(_id)
    const isSameUser = await this.UserModel.findOne({ email: dto.email })

    if (isSameUser && String(_id) !== String(isSameUser._id))
      throw new NotFoundException('Email busy')

    if (dto.password) {
      const salt = await getSalt('10')
      user.password = await hash(dto.password, salt)
    }

    user.email = dto.email
    if (dto.isAdmin || dto.isAdmin === false) {
      user.isAdmin = dto.isAdmin
    }

    await user.save()

    return
  }

  async getCount() {
    return this.UserModel.find().count().exec()
  }

  async getAll(searchTerm?: string) {
    let options = {}

    if (searchTerm) {
      options = {
        $or: [
          {
            email: new RegExp(searchTerm, 'i'),
          },
        ],
      }
    }

    return this.UserModel.find(options)
      .select('-password -updatedAt -__v')
      .sort({
        createdAt: 'desc',
      })
  }

  async delete(id: string) {
    return this.UserModel.findByIdAndDelete(id).exec()
  }

  async addInBasket(id: string, dto: AddBasketDto) {
    const user = this.byId(id)

    const basket = (await user).basket

    const isSameProduct = basket.filter((product) => product._id === dto._id)

    if (isSameProduct.length === 1)
      throw new NotFoundException('Такая уже есть в корзине')
    ;(await user).basket.push(dto)

    return (await user).save()
  }

  async deleteInBasket(id: string, dto: DeleteBasketDto) {
    const user = this.byId(id)

    ;(await user).basket = (await user).basket.filter(
      (product) => product._id !== dto._id,
    )

    return (await user).save()
  }
}
