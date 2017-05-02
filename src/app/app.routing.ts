import { Routes, RouterModule} from '@angular/router';

// Import our components
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { NotFoundComponent} from "./not-found/not-found.component";
import { ArmoryComponent } from "./armory/armory.component";
import { ItemSubmissionComponent } from "./item-submission/item-submission.component"


import { AuthGuard } from "./auth-guard.service";



const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "armory",
    component: ArmoryComponent
  },
  {
    path: "submission",
    component: ItemSubmissionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "notfound",
    component: NotFoundComponent
  },

  // {
  //   path: 'deals',
  //   component: PublicDealsComponent
  // },
  // {
  //   path: 'special',
  //   component: PrivateDealsComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: "**", redirectTo: "notfound", pathMatch: "full"
  }
];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [HomeComponent, InfoComponent, ArmoryComponent, NotFoundComponent];