import { Component, HostListener } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(public sharedService: SharedService) {}

  title = 'ingevec-ejercicio';
  windowHeight: number | null = null;
  windowWidth: number | null = null;
  
  //Imagenes
  logoIngevec = 'assets/logo_ingevec_blanco.svg'; 
 

  ngOnInit(): void {
    // Calcula la altura de la ventana al cargar el componente
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    (window.innerWidth < 768)? this.sharedService.mobile = true :  this.sharedService.mobile = false; 
  
  }

  // Metodo para manejar cambios de tamaño de pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    
    (window.innerWidth < 768)? this.sharedService.mobile = true :  this.sharedService.mobile = false;

  }

 
}
