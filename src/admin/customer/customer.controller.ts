import { Controller, Patch, Delete, Get, Post, Param, Body } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Customer } from "./data/customer.dto";

@Controller('/customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get('/all')
    getAll(): Customer[] { 
        console.log('All customers controller called')
        return this.customerService.getAllCustomers();
    }

    @Get('/:id')
    getById(@Param('id') id: string): Customer {
        return this.customerService.getCustomerById(id);
    }

    @Post('/add')
    addCustomer(@Body() customer: Customer) {
        return this.customerService.addCustomer(customer);
    }

    @Patch('/update/:id')
    updateCustomer(@Body() customer: Customer) {
        return this.customerService.updateCustomer(customer);
    }

    @Delete('/delete/:id')
    deleteCustomer(@Param('id') id: string) {
        return this.customerService.deleteCustomer(id);;
    }
}