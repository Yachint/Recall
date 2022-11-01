import { CredModel } from './models/cred.model';
import { DocumentModel } from './models/document.model';
import { NoteModel } from './models/note.model';

const notes: NoteModel[] = [
    {
        _id: '8b7eaab5-db66-40ff-878f-d300dc745353',
        name: 'My secret list',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue.',
        createdAt: '2022-09-05T13:07:32.615+00:00',
        updatedAt: '2022-09-05T13:07:32.615+00:00',
    },
    {
        _id: '3abb2173-677f-48ce-9035-99d093fe4bf2',
        name: 'Notes of my Pysch class',
        content:
            'Viverra suspendisse potenti nullam ac tortor vitae purus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.',
        createdAt: '2022-08-03T13:07:32.615+00:00',
        updatedAt: '2022-09-05T13:07:32.615+00:00',
    },
];

const creds: CredModel[] = [
    {
        _id: '9aa6d172-f86c-434e-9a52-f3993871210a',
        name: 'My password for XYZ',
        type: 'password',
        content: 'ThisIsSupeerSecurrreeee!!!',
        createdAt: '2022-03-03T13:07:32.615+00:00',
        updatedAt: '2022-04-05T13:07:32.615+00:00',
    },
    {
        _id: '7a7d9060-6155-46f5-90e2-72504f137e7a',
        name: 'My PIN for Credit Card XXXX90008',
        type: 'PIN',
        content: '998713',
        createdAt: '2022-06-03T13:07:32.615+00:00',
        updatedAt: '2022-07-05T13:07:32.615+00:00',
    },
    {
        _id: 'e74e90e7-a067-448c-b46e-9c5ac820f6e8',
        name: 'My Pubkey for random Server I Own',
        type: 'passphrase',
        content:
            'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDtG9aYx05Rz/UfXzUpKWBJEtyBog2kpf/1eYsveJhrPVO0fM3x6age0/LJs0p8+htx1FMXI14Jzck5kpvscsdvH4U6Oa90Xxk4Kl8ceIeGOP/rJWYZthMnjlJLQQHRcGrc+3OZ/tqpspLug3AeYeTcR4yJ9Qb9ZDzOqTH0Rx8xC1hu5hTrzOkVItuzmna3kmrAJjOa0dno3kVHyQqr/BVkzGFAzSqRgPyMvl0K6C9NmebOxxFh6DE1Dhj3ALQexzx2/N8uOOjNEdfCZdhDs6fhSrR/l2kCinVqualuwmkRCaMAHJIRKdlWV1uQZF7zjN29w5cLVfzv5g9YrTyVRDc+48nYDeUtRgzr/bw0U77JeUSKyfstyF1r5G6Gs+ffm3KzcdT0qCQwFqyXNIoGTjRI+Fo/y7Jwe2XXO+g+/cV4CdSLuVByYbI2CRhK1SIyTdNE8CYfQwGjBVC684GT4oL1vKcU/CCmjsZG/bEzZUL5cYOyHckxacMS/25sGtbfsJIcA0bm4HPhLJ57JoDs47vEn36+Fcb5zmFnFI/2cFUps9nNJ5zteR+fDKKpWPUJAfKOzH7dpb5q1YN/YTaJjLRuYvaLRcbfCx9a/69/SKd4SOD0aX4KRToxA+/pJlCR4EpaWuCHOYPG90icWQ8OVOOyhKv89hV57NMb24ZtniT3xw== yachintmacbook@Yachints-MacBook-Air.local',
        createdAt: '2022-01-03T13:07:32.615+00:00',
        updatedAt: '2022-01-05T13:07:32.615+00:00',
    },
];

const documents: DocumentModel[] = [
    {
        _id: '3f09c200-ff23-4a47-a3fd-2e636ff27df8',
        name: 'Birth certificate',
        type: 'PDF',
        url: 'https://www.orimi.com/pdf-test.pdf',
        createdAt: '2022-02-03T13:07:32.615+00:00',
        updatedAt: '2022-04-05T13:07:32.615+00:00',
    },
    {
        _id: 'ea0c6755-a1ee-4e16-b378-c907c5a276c5',
        name: 'Driving License Photocopy',
        type: 'Image',
        url: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt55635225_quantized.png',
        createdAt: '2022-05-13T13:07:32.615+00:00',
        updatedAt: '2022-07-25T13:07:32.615+00:00',
    },
];

const allData = [...notes, ...documents, ...creds];

export { notes, creds, documents, allData };
