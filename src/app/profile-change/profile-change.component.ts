// profile-change.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomaineService } from '../services/domaine.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-change',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [DomaineService],
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent {
  formData = {
    domaine: '',
    responsableQualification: '',
    responsableTraitement: ''
  };

  editableFields: { qualification: boolean; traitement: boolean } = {
    qualification: false, // Initially disabled
    traitement: false    // Initially disabled
  };

  domaines: any[] = [];

  constructor(private domaineService: DomaineService) { }

  ngOnInit(): void {
    this.loadDomaines();
  }

  loadDomaines(): void {
    this.domaineService.getDomaines().subscribe(data => {
      this.domaines = data.results;  // Assuming results is the array of domaines

      if (this.domaines.length > 0) {
        this.formData.domaine = this.domaines[0].libelle;
        this.updateFormData(this.domaines[0]);
      }
    });
  }

  onDomaineChange(): void {
    const selectedDomaine = this.domaines.find(d => d.libelle === this.formData.domaine);
    if (selectedDomaine) {
      this.formData.responsableQualification = selectedDomaine.responsableQualification;
      this.formData.responsableTraitement = selectedDomaine.responsableEntiteTraitement;
    }
  }

  updateFormData(selectedDomaine: any): void {
    this.formData.responsableQualification = selectedDomaine.responsableQualification;
    this.formData.responsableTraitement = selectedDomaine.responsableEntiteTraitement;
  }


  toggleEdit(field: 'qualification' | 'traitement') {
    this.editableFields[field] = !this.editableFields[field];
  }


 // edit responsableQualificati and responsableEntiteTraitement
  // updateResponsable() {
  //   const updateData = {
  //     id: this.formData.domaine, // Assuming domaine name is unique
  //     responsableQualification: this.formData.responsableQualification,
  //     responsableEntiteTraitement: this.formData.responsableTraitement
  //   };

  //   this.domaineService.updateResponsable(updateData).subscribe(response => {
  //     console.log('Update successful', response);
  //   });
  // }

}
