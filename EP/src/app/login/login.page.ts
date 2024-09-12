import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  identifier: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async onLogin() {
    if (!this.identifier || !this.password) {
      await this.presentAlert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    // Simular un login exitoso
    console.log('Login exitoso', { identifier: this.identifier, password: this.password });
    await this.presentAlert('Éxito', 'Login exitoso');
    this.router.navigate(['/home']);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
