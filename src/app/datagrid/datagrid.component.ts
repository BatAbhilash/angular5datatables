import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer'

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  
  @Input() tableContent: {
    headers: string[],
    data: any[],
  };

  constructor() { }

  ngOnInit() {
    
  }

}
