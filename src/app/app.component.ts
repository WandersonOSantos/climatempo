import { Component } from '@angular/core';
import { PrevisionService } from './service/prevision.service';
import { FunctionsService } from './service/functions.service';
import { DataService } from './model/data-service';
import { TestBed } from '@angular/core/testing';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public citiesService: PrevisionService, public functions: FunctionsService,public dataService: DataService){

  }

  title = 'climatempo';
  public cities: any;
  public previsions: any;

  trataRetornoCidades(js){
    js = js.cidades.cidade;
    return js;
  }

  trataRetornoPrevisoes(js){
    js = js.cidade;
    return js;
  }

  public getCity(){
    return new Promise((resolve,reject) => {
      let search = (<HTMLInputElement>document.getElementById("find")).value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      let city = search.split(',')[0]
    
      if(city){
        this.citiesService.getCities(city).subscribe(res => {
          this.cities = this.trataRetornoCidades(this.functions.convertXmlToJson(res));
          resolve();
        })
      }else{ 
        this.cities = [];
        reject();
      }
    }); 
  }

  public getPrevision(){
    let cidadeUf = (<HTMLInputElement>document.getElementById("find")).value;
    let spl = cidadeUf.split(',');
    let cidade = spl[0];
    let uf = spl[1];
    let codCity;
    
    try {
      codCity = this.cities.filter( city => ( city.nome[0] == cidade && city.uf == uf ))[0].id[0];
    } catch (error) {
      alert('Cidade ou estado inexistente!\nTente algo como: "Vila Velha, ES"')
    }

    if(codCity){
      this.citiesService.getPrevision(codCity).subscribe(res => {
        let js = this.trataRetornoPrevisoes(this.functions.convertXmlToJson(res));
        this.previsions = js.previsao;
        this.previsions.forEach(prevision => {
          prevision['condition'] = [...this.dataService.getConditions().filter(e=> (e.sigla == prevision.tempo))];
          prevision.dia[0] = this.functions.convertDate(prevision.dia[0]);
          
        });
      })
    }else{ 
      this.previsions = [];
    }

  }

  async ngOnInit(){
    await this.getCity();
    document.getElementById("searchPrevision").click();
  }
  
}