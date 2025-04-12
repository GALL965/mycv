import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../education/education.model'; // correcto si el servicio está en la carpeta services

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private dbPath = '/education';
  educationRef: AngularFirestoreCollection<Education>;

  constructor(private db: AngularFirestore) {
    this.educationRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Education> {
    return this.educationRef;
  }
}
