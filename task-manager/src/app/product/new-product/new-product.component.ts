import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';
import { OverlayContainer } from '../../../../node_modules/@angular/cdk/overlay';
import { Category } from '../../domain/category.domain';
import { Product } from '../../domain/product.domain';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product:Product;

  constructor(@Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProductComponent>) { }

  ngOnInit() {
    this.product = this.data.product;
  }

  save() {
    this.dialogRef.close(this.product);
  }
}
