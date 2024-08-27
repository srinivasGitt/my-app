import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-change',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  domaines: any[] = [
    { id: "1", libelle: "MONETIQUE", responsableQualification: "usertest20", responsableEntiteTraitement: "usertest10" },
    { id: "2", libelle: "BBM", responsableQualification: "usertest10", responsableEntiteTraitement: "usertest12" },
    { id: "3", libelle: "CC", responsableQualification: "userTest12", responsableEntiteTraitement: "userTest1" },
    { id: "4", libelle: "FLUX DE MASSE", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "5", libelle: "COMPENSATION", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "6", libelle: "CEN", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "7", libelle: "BANCASSURANCE", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "8", libelle: "TRANSFERTS NATIONAUX", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "9", libelle: "TRANSFERTS INTERNATIONAUX", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "10", libelle: "CREDIT IMMOBILIER", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "11", libelle: "CREDIT CONSOMMATION", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "12", libelle: "SUPPORT", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "13", libelle: "GESTION DES TITRES", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "14", libelle: "QUALITE DE SERVICE", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest3" },
    { id: "15", libelle: "SRC", responsableQualification: "userTest13", responsableEntiteTraitement: "userTest4" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadDomaines();
  }

  loadDomaines(): void {
    if (this.domaines.length > 0) {
      this.formData.domaine = this.domaines[0].libelle;
      this.updateFormData(this.domaines[0]);
    }
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
}
