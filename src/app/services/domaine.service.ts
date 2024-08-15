import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {


  private baseUrl = 'https://virtserver.swaggerhub.com/SRINIVASGOLLAPALLI91/reclamation-api/1.0';

  constructor(private http: HttpClient) { }

  // Fetch all domaines
  getDomaines(): Observable<any> {
    return this.http.get(`https://virtserver.swaggerhub.com/SRINIVASGOLLAPALLI91/reclamation-api/1.0/getDomaines`);
  }

  // Update Responsable Qualification and Traitement
  updateResponsable(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateResponsableQualificationAndTraitement`, data);
  }
}
