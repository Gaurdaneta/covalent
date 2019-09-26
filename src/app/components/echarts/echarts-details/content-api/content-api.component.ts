import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { echartsContentDetails } from '../../echarts-content';

@Component({
  selector: 'app-content-api',
  templateUrl: './content-api.component.html',
  styleUrls: ['./content-api.component.scss'],
})
export class ContentApiComponent implements OnInit {
  resourceUrl: string;

  componentJson: any[];

  constructor(private _route: ActivatedRoute) {
    this.componentJson = echartsContentDetails;
  }

  ngOnInit() {
    this._route.parent.paramMap.subscribe((params) => {
      this.resourceUrl = this.componentJson.find((e) => e.id === params.get('id')).apiDocUrl;
    });
  }
}