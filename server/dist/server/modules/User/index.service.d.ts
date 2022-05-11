import { BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from '@/models/User';
import { OrganizationService } from '@/modules/Organization/index.service';
import { ShopService } from '@/modules/Shop/index.service';
import { CreateUserArgs, GetUserArgs, GetUserByTokenArgs, RegisterAdminArgs, RegisterUserArgs } from '@/modules/User/args';
export declare class UserService {
    private shopService;
    private origanizationService;
    constructor(shopService: ShopService, origanizationService: OrganizationService);
    createUserData(args: CreateUserArgs): {
        userId: string;
        userName: string;
        avatar: string;
        memberOf: string[];
    };
    createUser(args: CreateUserArgs): Promise<BadRequestException | {
        userId: string;
        userName: string;
        avatar: string;
        memberOf: string[];
    }>;
    findOneByUserId(args: GetUserArgs): Promise<BadRequestException | NotFoundException | User>;
    findOneByToken(args: GetUserByTokenArgs): Promise<BadRequestException | NotFoundException | User | UnauthorizedException>;
    registerAdminUserAndShop(args: RegisterAdminArgs): Promise<void | NotFoundException | {
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
    registerUser(args: RegisterUserArgs): Promise<void | NotFoundException | {
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
    addMemberOf(args: {
        userId: string;
        shopId: string;
    }): Promise<void | any[] | NotFoundException>;
    getLoginInfo({ userId }: {
        userId: string;
    }): Promise<void | NotFoundException | {
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
