import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';
import { OverlayContainer } from '../../../../node_modules/@angular/cdk/overlay';
import { Category } from '../../domain/category.domain';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  categories: Category[] = [
    new Category(1, 'fruit'),
    new Category(2, 'mobile phone'),
    new Category(3, 'car')
  ];

  constructor(@Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProductComponent>,
    private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    console.log(this.data);
    this.overlayContainer.getContainerElement().className = null;
  }

  create() {
    this.dialogRef.close('create product succesfully');
  }
}
