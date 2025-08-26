import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonIcon,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Invertexto } from 'src/app/service/invertexto';
import { Router } from '@angular/router';

addIcons({
  arrowBack: arrowBack
})

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonIcon,
    IonButtons,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    CommonModule, 
    FormsModule
  ]
})  
export class PessoaPage implements OnInit {
  pessoa: any = null;
  errorMessage: string = '';

  constructor(private invertextoService: Invertexto,
    private router: Router
  ) {
      addIcons({arrowBack}); }

  ngOnInit() {
    this.getPessoa();
  }

  getPessoa(){
    this.invertextoService.getPessoa().subscribe(
      (response) => {
        this.pessoa = response;
        this.errorMessage = ''
      },
      (error) => {
        console.error('Erro na requisição', error);
        this.errorMessage = 'Erro ao gerar pessoa, tente novamente';
      }
    );
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}