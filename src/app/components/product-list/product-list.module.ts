import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component:  ProductListComponent
    }])
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule {}