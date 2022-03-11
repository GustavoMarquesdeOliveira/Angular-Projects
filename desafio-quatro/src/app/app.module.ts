import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { ContatoComponent } from './contato/contato.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { AgendarComponent } from './agendar/agendar.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    ContatoComponent,
    AgendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTabsModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
