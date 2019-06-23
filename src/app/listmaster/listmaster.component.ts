import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmaster',
  templateUrl: './listmaster.component.html',
  styleUrls: ['./listmaster.component.css']
})
export class ListmasterComponent implements OnInit {

  constructor() { }
  data: any[];

  cols: any[];
  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.getdata();
  }
  getdata() {
    this.data = [{ vin: 'a', year: 'b', brand: 'c', color: 'd' }, { vin: 'a', year: 'b', brand: 'c', color: 'd' }]
  }


}
