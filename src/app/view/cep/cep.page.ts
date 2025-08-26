import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

import { Invertexto } from 'src/app/service/invertexto';

addIcons({ arrowBack });

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel
  ]
})
export class CepPage implements OnInit {
  cep: string = '';
  dadosCep: any = null;
  errorMessage: string = '';

  constructor(
    private invertextoService: Invertexto,
    private router: Router
  ) {
      addIcons({arrowBack});}

  ngOnInit() {}

  buscarCep() {
    if (this.cep && this.cep.length === 8) {
      this.invertextoService.getByCep(this.cep).subscribe(
        (response) => {
          console.log(response);
          this.dadosCep = response;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Erro na requisição', error);
          this.dadosCep = null;
          this.errorMessage = 'Erro ao buscar CEP, tente novamente';
        }
      );
    } else {
      this.dadosCep = null;
      this.errorMessage = 'Por favor, insira um CEP válido com 8 dígitos';
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}