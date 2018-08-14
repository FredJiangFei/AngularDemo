import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private def: MatDialogRef<DeleteProductComponent>) { }

  ngOnInit() {
  }

  delete(){
    this.def.close(true);
  }
}
