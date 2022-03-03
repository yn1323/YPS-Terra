import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// import { initializeApp,  applicationDefault, cert } from 'firebase-admin/app';
// import admin from 'firebase-admin';
// import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

// // initializeApp({
// //   credential: cert(serviceAccount)
// // });
// initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


// const db = getFirestore();


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  async getHello() {
    // const docRef = db.collection('users').doc('alovelace');
    // await docRef.set({
    //   first: 'Ada',
    //   last: 'Lovelace',
    //   born: 1815
    // });
    return process?.env?.token_uri ?? 'no';
  }
}
