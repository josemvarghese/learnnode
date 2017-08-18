import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './add-info/add-info.component';
import { ListingComponent } from './listing/listing.component';
import { GooglesigninComponent } from './googlesignin/googlesignin.component';
import { SocketComponent } from './socket/socket.component';

const appRoutes:Routes = [
  
  {
    path:"",
    component:GooglesigninComponent,
  },
  {
    path:"add",
    component:AddInfoComponent,
  },
  {
    path:"message",
    component:SocketComponent,
  },
  {
    path:"list",
    component:ListingComponent,
  },
]
@NgModule({

  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports:[
      RouterModule
  ]

})
export class AppRoutingModule {}
