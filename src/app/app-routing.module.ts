import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { NoCardComponent } from "./no-card/no-card.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "project/:projectId", component: ViewComponent },

  { path: "no-card", component: NoCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
