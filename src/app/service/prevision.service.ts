import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PrevisionService { 
  constructor(private http: HttpClient) { 
  }

  public getCities(city): Observable<any>{
    let apiUrl ='http://servicos.cptec.inpe.br/XML/listaCidades?';
    return this.http.get(apiUrl + 'city=' + city, { responseType: 'text' })
  }

  public getPrevision(codCity): Observable<any>{
    let apiUrl ='http://servicos.cptec.inpe.br/XML/cidade/7dias/'+ codCity +'/previsao.xml';
    return this.http.get(apiUrl, { responseType: 'text' })
  }

}


