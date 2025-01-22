import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  widocznoscTak: boolean = false
  widocznoscNie:boolean = false
  lokalizacja: string = 'Zamość';
  szansaNaOpady?: number
  maksymalnaTemperatura?: number
  temperatura0?: number
  temperatura1?: number
  temperatura2?: number
  temperatura3?: number
  temperatura4?: number
  temperatura5?: number
  temperatura6?: number
  temperatura7?: number
  temperatura8?: number
  temperatura9?: number
  temperatura10?: number
  temperatura11?: number
  temperatura12?: number
  temperatura13?: number
  temperatura14?: number
  temperatura15?: number
  temperatura16?: number
  temperatura17?: number
  temperatura18?: number
  temperatura19?: number
  temperatura20?: number
  temperatura21?: number
  temperatura22?: number
  temperatura23?: number
  temperaturaAktualna?: number
  temperaturaOdczuwalna?: number
  silaWiatru?: number
  uvIndex?: number
  temperaturaDzisiajRano?: number
  temperaturaDzisiajWieczorem?: number
  temperaturaJutroRano?: number
  temperaturaJutroWieczorem?: number
  temperaturaZaDwaDniRano?: number
  temperaturaZaDwaDniWieczorem?: number
  temperaturaZaTrzyDniRano?: number
  temperaturaZaTrzyDniWieczorem?: number
  temperaturaZaCzteryDniRano?: number
  temperaturaZaCzteryDniWieczorem?: number
  temperaturaZaPiecDniRano?: number
  temperaturaZaPiecDniWieczorem?: number
  temperaturaZaSzescDniRano?: number
  temperaturaZaSzescDniWieczorem?: number
  opisDzisiaj?: string
  opisJutro?: string
  opisZaDwaDni?: string
  opisZaTrzyDni?: string
  opisZaCzteryDni?: string
  opisZaPiecDni?: string
  opisZaSzescDni?: string
  zdjecieGlownePogody?: string
  zdjeciePogody6?: string
  zdjeciePogody12?: string
  zdjeciePogody18?: string
  zdjeciePogody24?: string
  zdjecieDzisiaj?: string
  zdjecieJutro?: string
  zdjecieZaDwaDni?: string
  zdjecieZaTrzyDni?: string
  zdjecieZaCzteryDni?: string
  zdjecieZaPiecDni?: string
  zdjecieZaSzescDni?: string
  tydzien: string[]=[]
  chart1: any
  chart2: any
  constructor(private weatherApiService: WeatherApiService) { }
  ngOnInit(): void {
    this.widocznoscNie=false
    this.widocznoscTak=false
    this.weatherApiService.getWeatherData(this.lokalizacja).subscribe({
      next: dane => {
        this.widocznoscTak = true
        console.log(dane)
        this.getWeekArray()
        this.szansaNaOpady = dane.currentConditions.precipprob;
        this.maksymalnaTemperatura = dane.days[0].tempmax;
        this.temperatura0 = dane.days[0].hours[0].temp;
        this.temperatura1 = dane.days[0].hours[1].temp;
        this.temperatura2 = dane.days[0].hours[2].temp;
        this.temperatura3 = dane.days[0].hours[3].temp;
        this.temperatura4 = dane.days[0].hours[4].temp;
        this.temperatura5 = dane.days[0].hours[5].temp;
        this.temperatura6 = dane.days[0].hours[6].temp;
        this.temperatura7 = dane.days[0].hours[7].temp;
        this.temperatura8 = dane.days[0].hours[8].temp;
        this.temperatura9 = dane.days[0].hours[9].temp;
        this.temperatura10 = dane.days[0].hours[10].temp;
        this.temperatura11 = dane.days[0].hours[11].temp;
        this.temperatura12 = dane.days[0].hours[12].temp;
        this.temperatura13 = dane.days[0].hours[13].temp;
        this.temperatura14 = dane.days[0].hours[14].temp;
        this.temperatura15 = dane.days[0].hours[15].temp;
        this.temperatura16 = dane.days[0].hours[16].temp;
        this.temperatura17 = dane.days[0].hours[17].temp;
        this.temperatura18 = dane.days[0].hours[18].temp;
        this.temperatura19 = dane.days[0].hours[19].temp;
        this.temperatura20 = dane.days[0].hours[20].temp;
        this.temperatura21 = dane.days[0].hours[21].temp;
        this.temperatura22 = dane.days[0].hours[22].temp;
        this.temperatura23 = dane.days[0].hours[23].temp;
        this.temperaturaAktualna = dane.currentConditions.temp;
        this.temperaturaOdczuwalna = dane.currentConditions.feelslike;
        this.silaWiatru = dane.currentConditions.windspeed;
        this.uvIndex = dane.currentConditions.uvindex;
        this.temperaturaDzisiajRano = dane.days[0].hours[7].temp;
        this.temperaturaDzisiajWieczorem = dane.days[0].hours[18].temp;
        this.temperaturaJutroRano = dane.days[1].hours[7].temp;
        this.temperaturaJutroWieczorem = dane.days[1].hours[18].temp;
        this.temperaturaZaDwaDniRano = dane.days[2].hours[7].temp;
        this.temperaturaZaDwaDniWieczorem = dane.days[2].hours[18].temp;
        this.temperaturaZaTrzyDniRano = dane.days[3].hours[7].temp;
        this.temperaturaZaTrzyDniWieczorem = dane.days[3].hours[18].temp;
        this.temperaturaZaCzteryDniRano = dane.days[4].hours[7].temp;
        this.temperaturaZaCzteryDniWieczorem = dane.days[4].hours[18].temp;
        this.temperaturaZaPiecDniRano = dane.days[5].hours[7].temp;
        this.temperaturaZaPiecDniWieczorem = dane.days[5].hours[18].temp;
        this.temperaturaZaSzescDniRano = dane.days[6].hours[7].temp;
        this.temperaturaZaSzescDniWieczorem = dane.days[6].hours[18].temp;
        this.opisDzisiaj = dane.days[0].conditions;
        this.opisJutro = dane.days[1].conditions;
        this.opisZaDwaDni = dane.days[2].conditions;
        this.opisZaTrzyDni = dane.days[3].conditions;
        this.opisZaCzteryDni = dane.days[4].conditions;
        this.opisZaPiecDni = dane.days[5].conditions;
        this.opisZaSzescDni = dane.days[6].conditions;
        this.zdjecieGlownePogody = dane.currentConditions.icon + '.png';
        this.zdjecieGlownePogody = 'assets/' + this.zdjecieGlownePogody;
        this.zdjeciePogody6 = dane.days[0].hours[6].icon + '.png';
        this.zdjeciePogody6 = 'assets/' + this.zdjeciePogody6;
        this.zdjeciePogody12 = dane.days[0].hours[12].icon + '.png';
        this.zdjeciePogody12 = 'assets/' + this.zdjeciePogody12;
        this.zdjeciePogody18 = dane.days[0].hours[18].icon + '.png';
        this.zdjeciePogody18 = 'assets/' + this.zdjeciePogody18;
        this.zdjeciePogody24 = dane.days[0].hours[23].icon + '.png';
        this.zdjeciePogody24 = 'assets/' + this.zdjeciePogody24;
        this.zdjecieDzisiaj = dane.currentConditions.icon + '.png';
        this.zdjecieDzisiaj = 'assets/' + this.zdjecieDzisiaj;
        this.zdjecieJutro = dane.days[1].icon + '.png';
        this.zdjecieJutro = 'assets/' + this.zdjecieJutro;
        this.zdjecieZaDwaDni = dane.days[2].icon + '.png';
        this.zdjecieZaDwaDni = 'assets/' + this.zdjecieZaDwaDni;
        this.zdjecieZaTrzyDni = dane.days[3].icon + '.png';
        this.zdjecieZaTrzyDni = 'assets/' + this.zdjecieZaTrzyDni;
        this.zdjecieZaCzteryDni = dane.days[4].icon + '.png';
        this.zdjecieZaCzteryDni = 'assets/' + this.zdjecieZaCzteryDni;
        this.zdjecieZaPiecDni = dane.days[5].icon + '.png';
        this.zdjecieZaPiecDni = 'assets/' + this.zdjecieZaPiecDni;
        this.zdjecieZaSzescDni = dane.days[6].icon + '.png';
        this.zdjecieZaSzescDni = 'assets/' + this.zdjecieZaSzescDni;
        console.log(this.szansaNaOpady, this.maksymalnaTemperatura, this.temperatura6, this.temperatura12, this.temperatura18, this.temperatura23, this.temperaturaOdczuwalna, this.silaWiatru, this.uvIndex, this.temperaturaDzisiajRano, this.temperaturaDzisiajWieczorem, this.temperaturaJutroRano, this.temperaturaJutroWieczorem, this.temperaturaZaDwaDniRano, this.temperaturaZaDwaDniWieczorem, this.temperaturaZaTrzyDniRano, this.temperaturaZaTrzyDniWieczorem, this.temperaturaZaCzteryDniRano, this.temperaturaZaCzteryDniWieczorem, this.temperaturaZaPiecDniRano, this.temperaturaZaPiecDniWieczorem, this.temperaturaZaSzescDniRano, this.temperaturaZaSzescDniWieczorem, this.zdjecieGlownePogody, this.zdjeciePogody6, this.zdjeciePogody12, this.zdjeciePogody18, this.zdjeciePogody24);
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;
        this.chart1 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['0:00','1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            datasets: [{
              label: 'Temperatura',
              data: [this.temperatura0, this.temperatura1, this.temperatura2, this.temperatura3, this.temperatura4, this.temperatura5, this.temperatura6, this.temperatura7, this.temperatura8, this.temperatura9, this.temperatura10, this.temperatura11, this.temperatura12, this.temperatura13, this.temperatura14, this.temperatura15, this.temperatura16, this.temperatura17, this.temperatura18, this.temperatura19, this.temperatura20, this.temperatura21, this.temperatura22, this.temperatura23],
              borderWidth: 1,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Pogoda Godzinowa'
              }
            }
          }
        });
        const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement;
        this.chart2 = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: [this.tydzien[0], this.tydzien[1], this.tydzien[2], this.tydzien[3], this.tydzien[4], this.tydzien[5], this.tydzien[6]],
            datasets: [{
              label: 'Temperatura',
              data: [this.temperaturaAktualna, this.temperaturaJutroRano, this.temperaturaZaDwaDniRano, this.temperaturaZaTrzyDniRano, this.temperaturaZaCzteryDniRano, this.temperaturaZaPiecDniRano, this.temperaturaZaSzescDniRano],
              borderWidth: 1,
              borderColor: 'blue',
              backgroundColor: 'rgba(102, 99, 255, 0.2)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Pogoda Tygodniowa'
              }
            }
          }
        });
      },
      error: err => {this.widocznoscNie=true; alert('Nie znaleziono miasta o podanej nazwie')},
      complete: () => {console.log('Zakończono pobieranie danych')}
    });
  }
  getNewWeather(arg: string):void{
    if (arg == ''){
      alert('Wpisz nazwę miasta')
      return
    }
    this.widocznoscNie = false
    this.widocznoscTak = false
    this.chart1.destroy()
    this.chart2.destroy()
    this.lokalizacja = arg
    this.ngOnInit()
  }
  getWeekArray(): any{
    const tydzienDzien = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
    const dzisiaj = new Date().getDay()
    for(let i=0; i<7; i++){
      this.tydzien.push(tydzienDzien[(dzisiaj+i)%7])
    }
    console.log(this.tydzien)
  }
}