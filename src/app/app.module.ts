import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AddInfoComponent } from './add-info/add-info.component';
import { ListingComponent } from './listing/listing.component';
import { GooglesigninComponent } from './googlesignin/googlesignin.component';
import { SocketComponent } from './socket/socket.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    AddInfoComponent,
    SocketComponent,
    GooglesigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
