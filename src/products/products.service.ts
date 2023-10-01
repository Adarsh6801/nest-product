import { Injectable } from '@nestjs/common';

import { Product } from './product.model';
@ Injectable()
export class ProductService{
    products: Product[]=[];
    
    insertProduct(title:string,description:string,price:number){
        const productId=new Date().toString()
        const newProduct= new Product (productId.toString(),title, description, price)
        this.products.push(newProduct)
        return productId;
    }
}