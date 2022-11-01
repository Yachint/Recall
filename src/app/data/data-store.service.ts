import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CredModel } from './models/cred.model';
import { DocumentModel } from './models/document.model';
import { NoteModel } from './models/note.model';
import { notes, creds, documents, allData } from './test-data';

@Injectable({
    providedIn: 'root',
})
export class DataStoreService {
    public notesData = new BehaviorSubject<NoteModel[]>(null);
    public credsData = new BehaviorSubject<CredModel[]>(null);
    public documentsData = new BehaviorSubject<DocumentModel[]>(null);
    public userData = new BehaviorSubject<any[]>(null);

    public fetchNotes(): Promise<void> {
        console.log('Preparing to fetch notes...');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.notesData.next(notes);
                resolve();
            }, 700);
        });
    }

    public fetchCreds(): Promise<void> {
        console.log('Preparing to fetch Creds...');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.credsData.next(creds);
                resolve();
            }, 700);
        });
    }

    public fetchDocuments(): Promise<void> {
        console.log('Preparing to fetch Documents...');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.documentsData.next(documents);
                console.log(documents);
                resolve();
            }, 700);
        });
    }

    public fetchAll(): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.userData.next(allData);
                resolve();
            }, 700);
        });
    }
}
