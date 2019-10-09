import {
  Injectable
} from '@angular/core';
import {
  Zapatilla
} from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla> ;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
      new Zapatilla('Nike Predator', 'Nike', 'Amarillo', 50, false),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 69, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, true)
    ];
  }

  getTexto(){
      return "EL RETURN DEL SERVICIO DE ZAPATILLAS";
  }

  getZapatillas(): Array<Zapatilla>{
      return this.zapatillas;
  }
}
