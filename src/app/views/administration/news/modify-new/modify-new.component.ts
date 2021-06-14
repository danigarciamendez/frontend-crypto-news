import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';
import { PreviewNewComponent } from '../preview-new/preview-new.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "src/app/components/dialogo-confirmacion/dialogo-confirmacion.component"

@Component({
  selector: 'app-modify-new',
  templateUrl: './modify-new.component.html',
  styleUrls: ['./modify-new.component.css']
})
export class ModifyNewComponent implements OnInit {

  id : any;
  news : any;
  crypto: any;
  visibility: boolean;
  formulario: FormGroup;
  _new : New;

  constructor(private route: ActivatedRoute,public newsServices: NewsService,private router: Router, public dialogo: MatDialog) {
    this.visibility = false;
    this.formulario = new FormGroup({
      title : new FormControl('',[Validators.required, Validators.minLength(5)]),
      resume : new FormControl('',[Validators.required, Validators.minLength(10)]),
      description : new FormControl('',Validators.required),
      image : new FormControl(''),
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.newsServices.findNew(this.id).subscribe(data => {
      this.news = data
      this.crypto = this.news.crypto
      this._new = this.news.news
      
    })
  }

  enviarFormulario(){
    
    this.newsServices.modifyNew(this._new).subscribe(data => {
      console.log(data)
    })
  }

  previsualizar(){
    this.visibility = true
  }

  mostrarDialogo(): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `Seguro que quieres actualizar el registro?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.enviarFormulario()
        } else {
          
        }
      });
  }
  

}
