import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  convertXmlToJson(xml){
    let json : JSON;
        
    let parseString = require('xml2js').parseString;
    parseString(xml, function (err, result) {
      json = result;
    }); 
    return json;
  }

  convertDate(dt){
    let date = new Date(dt);
    var dias = new Array(
      'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'
     );

    return dias[date.getDay()];

  }
}
