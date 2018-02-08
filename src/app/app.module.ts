import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './/app-routing.module';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DatagridService } from './datagrid.service';
import { OrderByPipe } from './directives/orderby.pipe';
import { SearchCategory } from './directives/searchcategory.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DatagridComponent,
    OrderByPipe,
    SearchCategory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, DatagridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
