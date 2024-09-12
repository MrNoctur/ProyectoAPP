import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  username: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async onRegistro() {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      await this.presentAlert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (!this.isValidUsername() || !this.isValidPhoneNumber() || !this.isValidPassword()) {
      await this.presentAlert('Error', 'Por favor, corrija los errores en el formulario.');
      return;
    }

    const user = {
      email: this.email,
      username: this.username,
      phoneNumber: this.phoneNumber,
      password: this.password,
    };

    // Aquí deberías hacer la llamada al servicio para registrar el usuario

    console.log('Registro exitoso', user);
    await this.presentAlert('Éxito', 'Registro exitoso');
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

  isValidUsername(): boolean {
    const usernamePattern = /^[A-Z][A-Za-z]*$/;
    return usernamePattern.test(this.username);
  }

  isValidPhoneNumber(): boolean {
    const phonePattern = /^[0-9]{8}$/;
    return phonePattern.test(this.phoneNumber);
  }

  isValidPassword(): boolean {
    return this.password.length <= 10;
  }
}
