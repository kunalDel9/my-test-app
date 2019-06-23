import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridDataService } from 'src/grid/common/services/grid-data.service';
@Component({
  selector: 'app-configurable-grid',
  templateUrl: './configurable-grid.component.html',
  styleUrls: ['./configurable-grid.component.css']
})
export class ConfigurableGridComponent implements OnInit {

  constructor(private griddata: GridDataService, private route: ActivatedRoute) { }
  data: any[];

  cols: any[];
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }
  onDataSourceChange(type){
    this.griddata.getColData(type).subscribe(data =>{
      this.cols = data;
      } );
    this.griddata.getRowData(type).subscribe(rdata => {
        this.data = rdata;
        } );
  }
}
