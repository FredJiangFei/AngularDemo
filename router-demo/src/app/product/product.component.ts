import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public snapshotId: number;
  public subscribeId: number;

  constructor(private activedRouter: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.snapshotId = this.activedRouter.snapshot.params['id'];
    this.activedRouter.params.subscribe((param: Params) => this.subscribeId = Number.parseInt(param['id']));
  }

  goPre() {
    this.router.navigate(['/products', this.subscribeId - 1]);
    return false;
  }

  goNext() {
    this.router.navigate(['/products', this.subscribeId + 1]);
    return false;
  }
}
