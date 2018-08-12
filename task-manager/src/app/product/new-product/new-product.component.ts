import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material';
import { OverlayContainer } from '../../../../node_modules/@angular/cdk/overlay';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

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
