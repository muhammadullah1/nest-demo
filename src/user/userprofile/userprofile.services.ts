import { Injectable } from "@nestjs/common";
import { User } from "./data/user.dto";
import { v4 as uuidv4 } from 'uuid';
import { ObjectSchema } from 'joi';

@Injectable()
export class UserProfileService {
    public User : User[] = [];

    // Get all customers
    getAllCustomers(): User[] {
        return this.User;
    }

    // Get customer by id
    getCustomerById(id: string): User {
        return this.User.find(customer => customer.id === id);
    }

    // Add new customer
    addCustomer(customer: User): string {
        customer.id = uuidv4();
        this.User.push(customer);
        return 'user added successfully';
    }

    // Update customer
    updateCustomer(customer: User): string {
        const index = this.User.findIndex(c => c.id === customer.id);
        this.User[index] = customer;
        return 'user updated successfully';
    }

    // Delete customer
    deleteCustomer(id: string): string {
        const index = this.User.findIndex(c => c.id === id);
        this.User.splice(index, 1);
        return 'user deleted successfully';
    }

}