import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  // imports: [
  //   RouterModule.register([
  //     {
  //       path: '/admin',
  //       module: AdminModule,
  //     },
  //     {
  //       path: '/user',
  //       module: UserModule,
  //     }])],
  imports: [AdminModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
