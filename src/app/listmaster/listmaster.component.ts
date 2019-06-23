import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../common/services/grid-data.service';

@Component({
  selector: 'app-listmaster',
  templateUrl: './listmaster.component.html',
  styleUrls: ['./listmaster.component.css']
})
export class ListmasterComponent implements OnInit {

  constructor(private griddata: GridDataService) { }
  selected = 'employee';
  data: any[];

  cols: any[];
  ngOnInit() {
    
    this.onDataSourceChange(this.selected);
    // this.getdata();
  }
  // getdata() {
  //   this.data = [{ vin: 'a', year: 'b', brand: 'c', color: 'd' }, { vin: 'a', year: 'b', brand: 'c', color: 'd' }]
  // }
  onDataSourceChange(type){
    this.griddata.getColData(type).subscribe(data =>{
      this.cols = data;
      } );
    this.griddata.getRowData(type).subscribe(rdata => {
        this.data = rdata;
        } );
  }

}
