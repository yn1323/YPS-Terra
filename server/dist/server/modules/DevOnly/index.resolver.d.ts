import { DevOnlyService } from '@/modules/DevOnly/index.service';
export declare class DevOnlyResolver {
    private DevOnlyService;
    constructor(DevOnlyService: DevOnlyService);
    deleteAllCollections(): Promise<{
        succeeded: boolean;
    }> | {
        succeeded: boolean;
    };
}
