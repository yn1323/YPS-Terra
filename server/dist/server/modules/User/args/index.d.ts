import { ShopArgs } from '@/models/Shop';
import { UserArgs } from '@/models/User';
declare const CreateUserArgs_base: import("@nestjs/common").Type<Pick<UserArgs, "userId" | "userName">>;
export declare class CreateUserArgs extends CreateUserArgs_base {
    shopId: string;
}
declare const GetUserArgs_base: import("@nestjs/common").Type<Pick<UserArgs, "userId">>;
export declare class GetUserArgs extends GetUserArgs_base {
}
export declare class GetUserByTokenArgs {
    token: string;
}
declare const _RegisterAdminArgsUser_base: import("@nestjs/common").Type<Pick<UserArgs, "userId" | "userName">>;
declare class _RegisterAdminArgsUser extends _RegisterAdminArgsUser_base {
}
declare const _RegisterAdminArgsShop_base: import("@nestjs/common").Type<Pick<ShopArgs, "shopName" | "openTime" | "closeTime" | "timeUnit" | "submitFrequency" | "useTimeCard">>;
declare class _RegisterAdminArgsShop extends _RegisterAdminArgsShop_base {
}
declare const RegisterAdminArgs_base: import("@nestjs/common").Type<_RegisterAdminArgsShop & _RegisterAdminArgsUser>;
export declare class RegisterAdminArgs extends RegisterAdminArgs_base {
}
declare const _RegisterUserArgsUser_base: import("@nestjs/common").Type<Pick<UserArgs, "userId" | "userName">>;
declare class _RegisterUserArgsUser extends _RegisterUserArgsUser_base {
}
declare const _RegisterUserArgsShop_base: import("@nestjs/common").Type<Pick<ShopArgs, "shopId">>;
declare class _RegisterUserArgsShop extends _RegisterUserArgsShop_base {
}
declare const RegisterUserArgs_base: import("@nestjs/common").Type<_RegisterUserArgsUser & _RegisterUserArgsShop>;
export declare class RegisterUserArgs extends RegisterUserArgs_base {
}
declare const LoginInfoArgs_base: import("@nestjs/common").Type<Pick<UserArgs, "userId">>;
export declare class LoginInfoArgs extends LoginInfoArgs_base {
}
export {};
