import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    public mobile: boolean = false;
    public ipActual: string | null = null;
    public primeraColumna: string = '7';
    public segundaColumna: string = '5';
    public loadingAPI: string = 'none';
    public cubierta: boolean = true;
}
