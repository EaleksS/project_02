import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from './decorators/user.decorator'
import { UpdateUserDto } from './dto/update-user.dto'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'
import { ProductDto } from 'src/products/dto/product.dto'
import { AddBasketDto } from './dto/add_basket.dto'
import { DeleteBasketDto } from './dto/delete_in_basket.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@User('_id') _id: string) {
    return this.userService.byId(_id)
  }

  @UsePipes(new ValidationPipe())
  @Put('profile')
  @HttpCode(200)
  @Auth()
  async updateProfile(@User('_id') _id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateProfile(_id, dto)
  }

  @Get('count')
  @Auth('admin')
  async getCountUsers() {
    return this.userService.getCount()
  }

  @Get()
  @Auth('admin')
  async getUsers(@Query('searchTerm') searchTerm: string) {
    return this.userService.getAll(searchTerm)
  }

  @Get(':id')
  @Auth('admin')
  async getUser(@Param('id', IdValidationPipe) id: string) {
    return this.userService.byId(id)
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  @HttpCode(200)
  @Auth('admin')
  async updateUser(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.updateProfile(id, dto)
  }

  @Delete(':id')
  @HttpCode(200)
  @Auth('admin')
  async deleteUser(@Param('id', IdValidationPipe) id: string) {
    return this.userService.delete(id)
  }

  @Post('addInBasket/:id')
  @HttpCode(200)
  async addInBasket(@Param('id') id: string, @Body() dto: AddBasketDto) {
    return this.userService.addInBasket(id, dto)
  }

  @Delete('deleteInBasket/:id')
  @HttpCode(200)
  async deleteInBasket(@Param('id') id: string, @Body() dto: DeleteBasketDto) {
    return this.userService.deleteInBasket(id, dto)
  }
}
