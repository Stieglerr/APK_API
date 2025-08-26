import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Invertexto {
  private _token : string ='21235|e8JnsDTRWZkfNoGc70ocLUCdTMVkWnOa';

  constructor (private http: HttpClient){}

  getPessoa(): Observable<any>{
    const url = `https://api.invertexto.com/v1/faker?token=${this._token}&fields=name,cpf&locale=pt_BR`;
    return this.http.get<any>(url).pipe(
      catchError((error)=> {
        console.error('Erro na requisiçõa: ', error);
        return throwError(() => new Error('Erro ao buscar os dados'));
      })
    );
  }

  getByCep(cep: string): Observable<any>{
    const url = `https://api.invertexto.com/v1/cep/${cep}?token=${this._token}`;
    return this.http.get<any>(url).pipe(
      catchError((error)=> {
        console.error('Erro na requisiçõa: ', error);
        return throwError(() => new Error('Erro ao buscar os dados'));
      })
    );
  }
  
}
