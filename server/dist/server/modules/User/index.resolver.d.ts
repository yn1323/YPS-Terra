import { User } from '@/models/User';
import { CreateUserArgs, GetUserArgs, GetUserByTokenArgs, LoginInfoArgs, RegisterAdminArgs, RegisterUserArgs } from '@/modules/User/args/index';
import { UserService } from '@/modules/User/index.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(args: CreateUserArgs): Promise<import("@nestjs/common").BadRequestException | {
        userId: string;
        userName: string;
        avatar: string;
        memberOf: string[];
    }>;
    findOneByUserId(args: GetUserArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | User>;
    findOneByToken(args: GetUserByTokenArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | User | import("@nestjs/common").UnauthorizedException>;
    registerAdminUserAndShop(args: RegisterAdminArgs): Promise<void | import("@nestjs/common").NotFoundException | {
        user: User;
        shops: import("../../models/Shop").Shop[];
        organizations: import("../../models/Organization").Organization[];
        structure: import("../../models/StructureCombination").StructureCombination[];
        names: {
            user: {
                id: string;
                name: string;
            }[];
            shop: {
                id: string;
                name: string;
            }[];
            organization: {
                id: string;
                name: string;
            }[];
        };
    }>;
    registerUser(args: RegisterUserArgs): Promise<void | import("@nestjs/common").NotFoundException | {
        user: User;
        shops: import("../../models/Shop").Shop[];
        organizations: import("../../models/Organization").Organization[];
        structure: import("../../models/StructureCombination").StructureCombination[];
        names: {
            user: {
                id: string;
                name: string;
            }[];
            shop: {
                id: string;
                name: string;
            }[];
            organization: {
                id: string;
                name: string;
            }[];
        };
    }>;
    getLoginInfo(args: LoginInfoArgs): Promise<void | import("@nestjs/common").NotFoundException | {
        user: User;
        shops: import("../../models/Shop").Shop[];
        organizations: import("../../models/Organization").Organization[];
        structure: import("../../models/StructureCombination").StructureCombination[];
        names: {
            user: {
                id: string;
                name: string;
            }[];
            shop: {
                id: string;
                name: string;
            }[];
            organization: {
                id: string;
                name: string;
            }[];
        };
    }>;
}
