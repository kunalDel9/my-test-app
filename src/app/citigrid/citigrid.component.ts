import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citigrid',
  templateUrl: './citigrid.component.html',
  styleUrls: ['./citigrid.component.css']
})
export class CitigridComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  data: any[];

  cols: any[];
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }
  onDataSourceChange(type){
    // this.griddata.getColData(type).subscribe(data =>{
    //   this.cols = data;
    //   } );
    // this.griddata.getRowData(type).subscribe(rdata => {
    //     this.data = rdata;
    //     } );
  }
}
