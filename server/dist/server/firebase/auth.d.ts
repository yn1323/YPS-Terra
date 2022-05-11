import { DecodedIdToken } from 'firebase-admin/auth';
export declare const getAuthFromToken: (authorization: string) => Promise<DecodedIdToken | void>;
