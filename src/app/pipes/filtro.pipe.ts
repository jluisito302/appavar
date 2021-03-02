import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: any, columna: string): any[] {
    if( texto === ''){
      return arreglo;
    }
    if(columna === 'folio'){
      return arreglo.filter(item =>{
        return item[columna] == texto;
        //return item[columna].prototype.includes(texto);
      });
    }else{
      texto= texto.toLowerCase();

      return arreglo.filter(item =>{
        return item[columna].toLowerCase().includes(texto);
      });
    }
    
    
  }

}
