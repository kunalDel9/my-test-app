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
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      const type = params.get('id');
      if(type){
        this.onDataSourceChange(type);
      }
    });
  }
  onDataSourceChange(type){
    this.griddata.getColData(type).subscribe(data =>{
      this.columnDefs = data;
      } );
    this.griddata.getRowData(type).subscribe(rdata => {
        this.rowData = rdata;
        } );
  }
}
