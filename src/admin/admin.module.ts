import {  MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { CustomerController } from './customer/customer.controller';
import { PostsService } from './posts/posts.service';
import { CustomerService } from './customer/customer.service';
import { AdminMiddleware } from './admin.middleware';
@Module({
    imports: [],
    controllers: [PostsController, CustomerController],
    providers: [PostsService, CustomerService],
    exports: [],
})
export class AdminModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AdminMiddleware)
            .forRoutes(PostsController);
    }
}
