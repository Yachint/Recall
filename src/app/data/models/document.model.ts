export interface DocumentModel {
    _id: string;
    name: string;
    type: 'PDF' | 'Image';
    url: string;
    createdAt: string;
    updatedAt: string;
}
