import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { TableContent } from '../tablecontent';
import { OrderByPipe } from '../directives/orderby.pipe';
import { SearchCategory } from '../directives/searchcategory.pipe';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],
  providers : [OrderByPipe, SearchCategory]
})
export class DatagridComponent implements OnInit {
  @Input() tableContent: TableContent;
  isDesc: boolean;
  searchText: string;

  constructor(private orderByPipe: OrderByPipe, private searchCategory: SearchCategory) { }

  ngOnInit() {
  }

  sortColumn(sortColName: string) {
    this.isDesc = !this.isDesc;
    const direction = this.isDesc ? 1 : -1;
    this.orderByPipe.transform(this.tableContent.data, { 'property': sortColName, 'direction': direction });
  }
}
