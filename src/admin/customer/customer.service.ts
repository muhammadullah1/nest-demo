import { Injectable } from "@nestjs/common";
import { Customer } from "./data/customer.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CustomerService {
    public Customer : Customer[] = [];

    // Get all customers
    getAllCustomers(): Customer[] {
        return this.Customer;
    }

    // Get customer by id
    getCustomerById(id: string): Customer {
        return this.Customer.find(customer => customer.id === id);
    }

    // Add new customer
    addCustomer(customer: Customer): string {
        customer.id = uuidv4();
        this.Customer.push(customer);
        return 'Customer added successfully';
    }

    // Update customer
    updateCustomer(customer: Customer): string {
        const index = this.Customer.findIndex(c => c.id === customer.id);
        this.Customer[index] = customer;
        return 'Customer updated successfully';
    }

    // Delete customer
    deleteCustomer(id: string): string {
        const index = this.Customer.findIndex(c => c.id === id);
        this.Customer.splice(index, 1);
        return 'Customer deleted successfully';
    }

}