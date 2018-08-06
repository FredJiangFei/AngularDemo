import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public snapshotId: string;
  public subscribeId: string;

  constructor(private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.snapshotId = this.activedRouter.snapshot.params['id'];
    this.activedRouter.params.subscribe((param: Params) => this.subscribeId = param['id']);
  }

  
}
