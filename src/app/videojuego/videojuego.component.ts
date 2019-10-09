import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos más populares";
        
        console.log("Se ha cargado el componente: videojuego.componente");
    }
    ngOnInit(){
        console.log("OnInit ejecutado!!");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado!");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado!");
    }
}