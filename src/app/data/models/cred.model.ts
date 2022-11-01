export interface CredModel {
    _id: string;
    name: string;
    type: 'password' | 'PIN' | 'passphrase';
    content: string;
    createdAt: string;
    updatedAt: string;
}
