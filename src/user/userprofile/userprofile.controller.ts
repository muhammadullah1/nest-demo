import { Controller, Patch, Delete, Get, Post, Param, Body, ParseUUIDPipe, UsePipes } from "@nestjs/common";
import { UserProfileService } from './userprofile.services';
import { User } from './data/user.dto';
// import { JoiValidationPipe } from "./pipes/user.pipe";
import { JoiPipeModule, JoiSchema, JoiSchemaOptions, CREATE, UPDATE, JoiPipe } from 'nestjs-joi';
import * as Joi from 'joi';;

@Controller('/user')
export class UserprofileController {
        constructor(private readonly customerService: UserProfileService) {}
    
        @Get()
        getAll(): User[] { 
            console.log('All customers controller called')
            return this.customerService.getAllCustomers();
        }
    
        @Get(':id')
        getById(@Param('id', ParseUUIDPipe) id: string): User {
            return this.customerService.getCustomerById(id);
        }
        @Post()
        // @UsePipes(new JoiPipe({
        //     name: Joi.string().required(),
        //     email: Joi.string().email().required(),
        //     phone: Joi.string().required(),
        //     address: Joi.string().required().min(20)
        // }))
        addCustomer(@Body() customer: User) {
            return this.customerService.addCustomer(customer);
        }
    
        @Patch(':id')
        updateCustomer(@Body() customer: User) {
            return this.customerService.updateCustomer(customer);
        }
    
        @Delete(':id')
        deleteCustomer(@Param('id', ParseUUIDPipe) id: string) {
            return this.customerService.deleteCustomer(id);;
        }
    }
