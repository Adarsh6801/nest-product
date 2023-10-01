import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';
import { log } from 'console';
@ Injectable()
export class ProductService{
    products: Product[]=[];
    
    insertProduct(title:string,description:string,price:number){
        const productId=Math.random().toString()
        const newProduct= new Product (productId.toString(),title, description, price)
        this.products.push(newProduct)
        return productId;
    }
    getProducts(){
        console.log("hi this s ");
        
        return [...this.products]
    }

    getSingleProduct(productId:string){
       const product= this.findProduct(productId)[0]
        return {...product};
    }

    updateProduct(productId:string, title:string, desc:string, price:number){
       const [product,index]= this.findProduct(productId)
       const updateProduct ={...product}
       if(title){
        updateProduct.title=title
       }
       if(desc){
        updateProduct.description=desc
       }
       if(price){
        updateProduct.price=price
       }
       this.products[index]=updateProduct
       
    }

    deleteProduct(productId:string){
        const index=this.findProduct(productId)[1]
        this.products.splice(index, 1)
    }

    private findProduct(id:string):[Product, number]{
        console.log(id,'productIdproductIdproductId');
        const productIndex=this.products.findIndex(prod=>prod.id==id)
        const product = this.products.find((prod)=>prod.id==id)
        console.log(product,'productproductproduct');
        
        if(!product){
            throw new NotFoundException('couldnot find products');

        }
        return [product, productIndex];
    }
}