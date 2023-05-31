import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProductDto } from './dto/product.dto'
import { CommentDto } from './dto/comment.dto'
@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post('create')
  @HttpCode(200)
  async createProduct(@Body() dto: ProductDto) {
    return this.ProductsService.createProduct(dto)
  }

  @Get('phoneVerify/:id')
  @HttpCode(200)
  async getPhoneVerify(@Param('id') id: string) {
    return this.ProductsService.getPhoneVerify(id)
  }

  @Get()
  @HttpCode(200)
  async getProducts() {
    return this.ProductsService.getProducts()
  }

  @Get(':id')
  @HttpCode(200)
  async getProductById(@Param('id') id: string) {
    return this.ProductsService.getProductById(id)
  }

  @Delete(':id')
  @HttpCode(200)
  async getDeleteProduct(@Param('id') id: string) {
    return this.ProductsService.deleteProduct(id)
  }

  @Put(':id')
  @HttpCode(200)
  async getUpdateProduct(@Param('id') id: string, @Body() dto: ProductDto) {
    return this.ProductsService.updateProduct(id, dto)
  }

  @Post('addComment/:id')
  @HttpCode(200)
  async getAddComment(@Param('id') id: string, @Body() dto: CommentDto) {
    return this.ProductsService.addComment(id, dto)
  }

  @Delete('deleteComment/:id')
  @HttpCode(200)
  async getDeleteComment(
    @Param('id') id: string,
    @Body() commentId: { id: string },
  ) {
    return this.ProductsService.deleteComment(id, commentId.id)
  }
}
