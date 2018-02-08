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
    ];
    this.customerService.getCustomers().subscribe(
      res => {
        this.tableContent.data = res;
        this.tableContent.totalRecords = res.length;
        console.log(res.length);
      }
    );
  }

}
