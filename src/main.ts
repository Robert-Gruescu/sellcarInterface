// filepath: c:\Users\robij\OneDrive\Desktop\Proiecte JAVA\SellCar Project\SellCar\sellcar_angular\src\main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));