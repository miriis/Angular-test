import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './core/container/container.component';
import { CardComponent } from './core/components/card/card.component';
import { DetailsComponent } from './core/components/details/details.component';
import { ListComponent } from './core/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CardComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
