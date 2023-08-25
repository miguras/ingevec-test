import { Component } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'obtener-ip',
  templateUrl: './obtener-ip.component.html',
  styleUrls: ['./obtener-ip.component.scss']
})

export class ObtenerIpComponent {

  public mostrarOpcionesAvanzadas: boolean = false;
  
  constructor(public sharedService: SharedService) {}
  


  

  // Funcion para mostrar opciones avanzadas
  mostrarAvanzadas(): void {
    this.mostrarOpcionesAvanzadas = !this.mostrarOpcionesAvanzadas;
  }


  // Funcion para reemplazar ip a traves de expresion regular
  modificarIP(ip: string): string {
    
    const modificacionIP = ip.replace(/^(\d{1,3}\.\d{1,3}\.)/, 'XXX.XXX.');
  
    return modificacionIP;
  }
  

  borrarIP(): void {
    this.sharedService.primeraColumna = '7';
    this.sharedService.segundaColumna = '5';
    this.sharedService.ipActual = null;
  }




  get mostrarBorrar(): boolean {
    return this.sharedService.ipActual ? false : true;
  }

  get avanzadasTexto(): string {
    return this.mostrarOpcionesAvanzadas ? 'Ocultar Opciones' : 'Opciones Avanzadas';
  }

  get desactivarBoton(): string | null { 
    return  this.sharedService.loadingAPI === 'block' ? 'disabled' : null;
  }
  


  
  preloadAPI(protegida: boolean = true): void {
    // este metodo se encarga de dar sensacion de fluidez para posteriormente llamar a la API -- mejora de UX
    
    if(!this.sharedService.mobile) { // si la pantalla es menor a 768, evitamos el efecto de desplazamiento
      this.sharedService.primeraColumna = '6';
      this.sharedService.segundaColumna = '6';
    }

    this.sharedService.loadingAPI = 'block'; //mostramos el loader
    
    // limpiamos para asegurar que el campo este vacio en caso de recarga
    this.sharedService.ipActual = null;
    
    setTimeout(() => {
      this.realizarLlamadaAPI(protegida);
    }, 1000);

  }


  async realizarLlamadaAPI(protegida: boolean = true): Promise<void> {
     

    
    try {
      // endpoint propuesto por examinador 
      const response = await fetch('https://api.ipify.org/?format=json'); 
    

      //Verificacion errores
      if (!response.ok) {

        throw new Error('Error al obtener los datos'); 
      }
      
     
      const data = await response.json(); // A objeto
      
      // Verificacion y modificacion de dato relevante 
      if(data.ip){


        // asignamos segun sea requerido, IP cubierta/descubierta
        let ipModificada = protegida? this.modificarIP(data.ip) : data.ip;

        (ipModificada.startsWith('X'))? this.sharedService.cubierta = true : this.sharedService.cubierta = false;

        // actualizamos el valor de la ip para imprimir resultado en pantalla
        this.sharedService.ipActual = ipModificada;

        //ocultamos el loader
        this.sharedService.loadingAPI = 'none';

        // scroll para ver el resultado en mobile
        if(window.innerWidth < 768){
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' 
          });  
        }
    


        // Resultado por consola
        // console.log('IP: ', ipModificada);

      }
  
     
    } catch (error) {
      //ocultamos el loader
      this.sharedService.loadingAPI = 'none';
      

      // En Consola
      console.error('Hubo un error:', error);
    }

    
    
  }
}
