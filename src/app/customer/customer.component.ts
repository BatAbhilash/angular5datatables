import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { TableContent } from '../tablecontent';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  tableContent: TableContent = {
    headers: null,
    data: null,
    totalRecords: 0
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    this.tableContent.headers = [
      { 'id': 'customerID', 'name': 'Cust Id' },
      { 'id': 'contactName', 'name': 'Name' },
      { 'id': 'contactTitle', 'name': 'Title' },
      { 'id': 'companyName', 'name': 'Company' },
      { 'id': 'country', 'name': 'Country' },
      { 'id': 'city', 'name': 'City' },
      { 'id': 'address', 'name': 'Address' },
      { 'id': 'postalCode', 'name': 'PIN' },
      {
        'id': 'parentCol', 'name': 'Parent', 'hasChildren': true,
        'children': [
          { 'id': 'child1', 'name': 'child1' },
          { 'id': 'child2', 'name': 'child2' },
          { 'id': 'child3', 'name': 'child3' },
        ]
      },
    ];
    this.customerService.getCustomers().subscribe(
      res => {
        this.tableContent.data = res;
        this.tableContent.totalRecords = res.length;
        for (let i = 0; i <= res.length; i++) {
          this.tableContent.data[i]['parentCol'] = [
            { 'child1': 'Child1' },
            { 'child2': 'Child2' },
            { 'child3': 'Child3' },
          ];
        }
      }
    );
  }

}
