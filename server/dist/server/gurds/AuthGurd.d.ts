import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGurd implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
