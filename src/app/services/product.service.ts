import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Nike Dunk Windmill 1', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.99, image: 'assets/img/shoe-1.jpg', category: 'Sneakers' },
    { id: 2, name: 'Nike Dunk Windmill 2', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 5.49, image: 'assets/img/shoe-2.jpg', category: 'Sneakers' },
    { id: 3, name: 'Nike Dunk Windmill 3', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 3.99, image: 'assets/img/shoe-6.jpg', category: 'Sneakers' },
    { id: 4, name: 'Nike Dunk Windmill 4', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 2.99, image: 'assets/img/shoe-4.jpg', category: 'Sneakers' },
   
    { id: 5, name: 'Nike Dunk Windmill 5', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.49, image: 'assets/img/shoe-5.jpg', category: 'Sneakers' },
    { id: 6, name: 'Nike Dunk Windmill 6', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 7, name: 'Nike Dunk Windmill 7', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 8, name: 'Nike Dunk Windmill 8', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    
    { id: 9, name: 'Nike Dunk Windmill 9', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 10, name: 'Nike Dunk Windmill 10', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 11, name: 'Nike Dunk Windmill 11', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 12, name: 'Nike Dunk Windmill 12', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },

    { id: 13, name: 'Nike Dunk Windmill 13', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 14, name: 'Nike Dunk Windmill 14', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 15, name: 'Nike Dunk Windmill 15', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 16, name: 'Nike Dunk Windmill 16', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },

    { id: 17, name: 'Nike Dunk Windmill 17', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 18, name: 'Nike Dunk Windmill 18', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 19, name: 'Nike Dunk Windmill 19', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 20, name: 'Nike Dunk Windmill 20', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },

    { id: 21, name: 'Nike Dunk Windmill 21', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 22, name: 'Nike Dunk Windmill 22', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 23, name: 'Nike Dunk Windmill 23', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
    { id: 24, name: 'Nike Dunk Windmill 24', description: 'Before takeoff, or at the onset of the jump, the ball is brought...', price: 4.41, image: 'assets/img/no-image.jpg', category: 'Sneakers' },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
