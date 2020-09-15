import { Condition } from './condition'

export class DataService {
    getConditions(){
        return [
            new Condition('../assets/images/icons/partly_cloudy.png' ,'ec' ,'Encoberto com Chuvas Isoladas'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ci' ,'Chuvas Isoladas'),
            new Condition('../assets/images/icons/rain.png'          ,'c'  ,'Chuva'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'in' ,'Instável'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pp' ,'Poss. de Pancadas de Chuva'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'cm' ,'Chuva pela Manhã'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'cn' ,'Chuva a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pt' ,'Pancadas de Chuva a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pm' ,'Pancadas de Chuva pela Manhã'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'np' ,'Nublado e Pancadas de Chuva'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pc' ,'Pancadas de Chuva'),
            new Condition('../assets/images/icons/partly_cloudy.png' ,'pn' ,'Parcialmente Nublado'),
            new Condition('../assets/images/icons/partly_cloudy.png' ,'cv' ,'Chuvisco'),
            new Condition('../assets/images/icons/rain_light.png'    ,'ch' ,'Chuvoso'),
            new Condition('../assets/images/icons/thunderstorms.png' ,'t'  ,'Tempestade'),
            new Condition('../assets/images/icons/sunny_s_cloudy.png','ps' ,'Predomínio de Sol'),
            new Condition('../assets/images/icons/partly_cloudy.png' ,'e ' ,'Encoberto'),
            new Condition('../assets/images/icons/cloudy.png'        ,'n'  ,'Nublado'),
            new Condition('../assets/images/icons/sunny.png'         ,'cl' ,'Céu Claro'),
            new Condition('../assets/images/icons/cloudy.png'        ,'nv' ,'Nevoeiro'),
            new Condition('../assets/images/icons/cloudy.png'        ,'g'  ,'Geada'),
            new Condition('../assets/images/icons/cloudy.png'        ,'ne' ,'Neve'),
            new Condition('../assets/images/icons/cloudy.png'        ,'nd' ,'Não Definido'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pnt','Pancadas de Chuva a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'psc','Possibilidade de Chuva'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pcm','Possibilidade de Chuva pela Manhã'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pct','Possibilidade de Chuva a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'pcn','Possibilidade de Chuva a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'npt','Nublado com Pancadas a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'npn','Nublado com Pancadas a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ncn','Nublado com Poss. de Chuva a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'nct','Nublado com Poss. de Chuva a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ncm','Nubl. c/ Poss. de Chuva pela Manhã'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'npm','Nublado com Pancadas pela Manhã'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'npp','Nublado com Possibilidade de Chuva'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'vn' ,'Variação de Nebulosidade'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ct' ,'Chuva a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ppn','Poss. de Panc. de Chuva a Noite'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ppt','Poss. de Panc. de Chuva a Tarde'),
            new Condition('../assets/images/icons/rain_s_cloudy.png' ,'ppm','Poss. de Panc. de Chuva pela Manhã')
        ];
    }
}
