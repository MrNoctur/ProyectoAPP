import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async presentLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    console.log('Usuario cerrado sesión');
    this.router.navigate(['/login']);
  }


  navigateToProfile() {
    
    this.router.navigate(['/perfil']);
  }

  navigateToCart() {
    this.router.navigate(['/carrito']);
  }

  navigateToPerfumes() {
    this.router.navigate(['/perfumes']);
  }
}
