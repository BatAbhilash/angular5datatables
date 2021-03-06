import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { TableContent } from '../tablecontent';
import { OrderByPipe } from '../directives/orderby.pipe';
import { SearchCategory } from '../directives/searchcategory.pipe';
import { SearchByCategory } from '../directives/searchbycategory.pipe';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],
  providers: [OrderByPipe, SearchCategory, SearchByCategory]
})
export class DatagridComponent implements OnInit, OnChanges {
  @Input() tableContent: TableContent;
  @Input() count: number;

  // for sorting
  isDesc: boolean;

  // for searching
  searchText: string;

  // for pagination
  page: number;
  perPage: number;
  loading: boolean;
  pagesToShow: number;
  total: number;
  pageSizes: any;
  minPageNum: number;
  maxPageNum: number;
  totalPageNum: number;

  // original records
  tableFields: TableContent;

  constructor(private orderByPipe: OrderByPipe, private searchCategory: SearchCategory, private searchByCategory: SearchByCategory) { }

  ngOnInit() {
    this.page = 1;
    this.perPage = 25;
    this.pagesToShow = 2;
    this.loading = false;
  }

  ngOnChanges() {
    this.tableFields = Object.assign({}, this.tableContent);
    this.pageSizes = [['5', '5'], ['10', 10], ['25', 25], ['50', 50], ['All', this.count]];
    // this.getRecords();
    this.getRecords();
  }

  sortColumn(sortColName: string, childColName?: string, index?: number): void {
    this.isDesc = !this.isDesc;
    const direction = this.isDesc ? 1 : -1;
    if (childColName) {
       this.orderByPipe.transform(this.tableFields.data, { 'property': sortColName, 'direction': direction,
        'childProperty': childColName, 'index': index });
    } else {
      this.orderByPipe.transform(this.tableFields.data, { 'property': sortColName, 'direction': direction });
    }
  }


  // pagination

  getMin(): void {
    this.minPageNum = ((this.perPage * this.page) - this.perPage) + 1;
    // return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): void {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    this.maxPageNum = max;
    //    return max;
  }

  onPage(n: number): void {
    this.page = n;
    this.getRecords();
  }

  onPrev(): void {
    this.page--;
    this.getRecords();
  }

  onNext(next: boolean): void {
    this.page++;
    this.getRecords();
  }

  totalPages(): void {
    this.totalPageNum = Math.ceil(this.count / this.perPage) || 0;
    // return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  getPages(): number[] {
    const c = Math.ceil(this.count / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

  getRecords(): void {
    if (!this.tableContent) {
      return;
    }
    this.getMin();
    this.getMax();
    this.totalPages();
    this.loading = true;
    const startIndex = (this.page - 1) * this.perPage;
    const fetchRecords = Number(startIndex) + Number(this.perPage);
    this.tableFields.data = this.tableContent.data.slice(startIndex, fetchRecords);
    this.total = this.tableFields.data.length;
    this.loading = false;
  }

  getDisplayRecords(): void {
    this.page = 1;
    this.getRecords();
  }

  searchByColumnId(searchColumnId: string, searchText: string): void {
    console.log(searchText);
    // this.searchbyCategory.transform(this.tableFields.data, { 'property': searchColumnId });
  }

}
