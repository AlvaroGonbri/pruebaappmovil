import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  items:any = [];

  constructor(private ApiServicio : ApiService) {}


  ngOnInit(){
    const peliculas = localStorage.getItem('peliculas')
    if(peliculas){
      this.items = JSON.parse(peliculas)
      console.log('Datos desde la LS')




    }else{

      this.ApiServicio.obtieneDatos().subscribe((peliculas)=>{
        this.items = peliculas;
        localStorage.setItem('peliculas', JSON.stringify(this.items));
        console.log('datos desde API')
      });

    };

    
  }

}
