import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ProductModel } from './product.model'
import { Model, Types } from 'mongoose'
import { ProductDto } from './dto/product.dto'
import { CommentDto } from './dto/comment.dto'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: Model<ProductModel>,
  ) {}

  async createProduct(createProductDto: ProductDto) {
    const product = new this.productModel({
      ...createProductDto,
    })
    return await product.save()
  }

  async getProducts() {
    return await this.productModel.find()
  }

  async getProductById(id: string) {
    const product = await this.productModel.findById(id)
    if (!product) throw new NotFoundException('Продукт не найден')
    // 'Product not found'

    return product
  }

  async updateProduct(id: string, updateProductDto: ProductDto) {
    const product = await this.productModel.findById(id)
    if (!product) throw new NotFoundException('Продукт не найден')

    return await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    })
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findById(id)
    if (!product) throw new NotFoundException('Продукт не найден')

    return await this.productModel.findByIdAndRemove(id)
  }

  async addComment(id: string, addCommentDto: CommentDto) {
    const product = await this.productModel.findById(id)
    if (!product) {
      throw new NotFoundException('Продукт не найден')
    }
    const comment = {
      ...addCommentDto,
      createdAt: new Date(),
      _id: new Types.ObjectId().toString(),
    }

    product.comments.push(comment)
    return await product.save()
  }

  async deleteComment(id: string, commentId: string) {
    const product = await this.productModel.findById(id)
    if (!product) {
      throw new NotFoundException('Продукт не найден')
    }

    product.comments = product.comments.filter(
      (comment) => comment._id !== commentId,
    )
    return await product.save()
  }
}
