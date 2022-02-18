import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  // response Loader
  startLoader() {
    this.loadingController
      .create({
        message: 'Please Wait....',
        cssClass: 'loader-css-class',
        backdropDismiss: true,
      })
      .then((response) => {
        response.present();
      });
  }

  dismissLoader() {
    this.loadingController
      .dismiss()
      .then((response) => {
        console.log('Loader closed!', response);
      })
      .catch((err) => {
        console.log('Error occured : ', err);
      });
  }
}
