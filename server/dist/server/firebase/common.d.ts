declare type Collections = {
    [key in string]: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
};
export declare const collections: Collections;
export declare let db: FirebaseFirestore.Firestore;
export declare const firebaseInit: () => void;
export declare const getRandomId: () => string;
export {};
