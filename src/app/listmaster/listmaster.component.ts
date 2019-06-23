import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../common/services/grid-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listmaster',
  templateUrl: './listmaster.component.html',
  styleUrls: ['./listmaster.component.css']
})
export class ListmasterComponent implements OnInit {

  constructor(private griddata: GridDataService, private route: ActivatedRoute) { }
  selected = 'employee';
  data: any[];

  cols: any[];
  ngOnInit() {
    this.onDataSourceChange(this.selected);
    console.log('ngonint');
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
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
