import { Module } from '@nestjs/common';
import { UserprofileController } from './userprofile/userprofile.controller';
import { UserProfileService } from './userprofile/userprofile.services';

@Module({
    imports: [],
    controllers: [UserprofileController],
    providers: [UserProfileService],
    exports: [],
})
export class UserModule {
    constructor() {
        console.log('User Module');
    }
}
