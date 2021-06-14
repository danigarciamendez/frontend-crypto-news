import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DialogoConfirmacionComponent } from '../../dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-noticias',
  templateUrl: './tabla-noticias.component.html',
  styleUrls: ['./tabla-noticias.component.css']
})
export class TablaNoticiasComponent implements OnInit {

  news : any;
  faEye = faEye
  faEdit = faEdit
  faTrashAlt = faTrashAlt
  public page: number;
  response : any
  constructor(private newsService : NewsService, public router: Router,  public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.newsService.getAll().subscribe(data => {
      this.news = data
      
    })
  }

  verNoticia(id){
    this.router.navigate(['/noticias',id]);
  }

  editarNoticia(id){
    this.router.navigate(['/administracion/modificar-noticia',id]);
  }

  eliminarNoticia(id){
    this.newsService.deleteNew(id).subscribe(data => {
      this.response = data
      
    })
  }

  mostrarDialogoEliminar(id): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `Seguro que quieres eliminar esta noticia?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.eliminarNoticia(id)
          this.ngOnInit()
        } else {
          
        }
      });
  }
}
