import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { EjtwowaybindingComponent } from './ejtwowaybinding/ejtwowaybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { EjarrayobjetosComponent } from './ejarrayobjetos/ejarrayobjetos.component';
import { EjngswitchComponent } from './ejngswitch/ejngswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EuroformaterPipe } from './euroformater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    EjtwowaybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    EjarrayobjetosComponent,
    EjngswitchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent,
    EuroformaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
