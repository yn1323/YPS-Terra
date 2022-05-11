import { Organization } from '@/models/Organization';
import { Shop } from '@/models/Shop';
import { StructureCombination } from '@/models/StructureCombination';
import { User } from '@/models/User';
declare class NameObject {
    id: string;
    name: string;
}
declare class Names {
    user: NameObject;
    shop: NameObject;
    organization: NameObject;
}
export declare class LoginInfo {
    user: User;
    shops: Shop[];
    organizations: Organization[];
    structure: StructureCombination;
    names: Names;
}
export {};
