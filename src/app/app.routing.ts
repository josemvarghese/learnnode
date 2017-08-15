import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './add-info/add-info.component';
import { ListingComponent } from './listing/listing.component';

const appRoutes:Routes = [
  
  {
    path:"add",
    component:AddInfoComponent,
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
