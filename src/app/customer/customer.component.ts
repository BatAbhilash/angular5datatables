import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  tableContent: {
    headers: string[],
    data: any[],
  } = {
    headers: null,
    data: null,
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    this.tableContent.headers = ['customerID','contactName','contactTitle','companyName',
    'country','city','address','postalCode'];
    this.customerService.getCustomers().subscribe(
      customer => {
        //this.customers = customer;
        this.tableContent.data = customer;
        console.log(customer)
      }
    );
    
  }

}
