import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../Models/reclamation';
import { StatusReclamation } from '../Models/status-reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationBackService {

  readonly apiUrl: string = 'http://localhost:8089/work-mood/Reclamation';
  
  constructor(private http:HttpClient) { }

  listReclamations():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowAllReclamations');
  }
  showById(id:any):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/ShowReclamation/'+id);
  }
  addReclamation(b:any, id:any):Observable<Reclamation[]>{
    return this.http.post<Reclamation[]>(this.apiUrl+'/AddReclamation/'+id,b);
  }
  deleteReclamation(id:any):Observable<Reclamation[]>{
    return this.http.delete<Reclamation[]>(this.apiUrl+'/DeleteReclamation/'+id);
  }

  findByType(status: StatusReclamation, id: number):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByType?idUser='+id+'&status='+ status);
  }
  findByCreationDateAsc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByCreationDateAsc');
  }
  findByCreationDateDesc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByCreationDateDesc');
  }
  findByProcessingDateAsc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByProcessingDateAsc');
  }
  findByProcessingDateDesc():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiUrl+'/FindReclamationByProcessingDateDesc');
  }
  treatReclamation(idUSer: number, id: number, r: Reclamation):Observable<Reclamation[]>{
    return this.http.put<Reclamation[]>(this.apiUrl+'/TreatReclamation/'+idUSer+'/'+id, r);
  }
}
