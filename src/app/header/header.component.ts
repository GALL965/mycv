import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { Header } from '../models/header/header.model';
import { WorkExperience } from '../models/work-experience/work-experience.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: Header = new Header();
  workExperience: WorkExperience[] = [];

  constructor(
    public headerService: HeaderService,
    public workExperienceService: WorkExperienceService
  ) {
    // Cargar header
    this.headerService.getHeader().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(data => {
      this.header = data[0];
      console.log('Header:', this.header);
    });

    // Cargar experiencia laboral
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(data => {
      this.workExperience = data;
      console.log('Experiencia Laboral:', this.workExperience);
    });
  }
}
