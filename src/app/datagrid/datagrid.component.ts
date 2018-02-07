import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { TableContent } from '../tablecontent';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  @Input() tableContent: TableContent;

  constructor() { }

  ngOnInit() {
  }

}
