import { Component, OnInit } from "@angular/core";
import { View } from "./view.model";
import { AppService } from "../app.service";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  currentProjectId: number;
  projects: View[];

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.currentProjectId = params["projectId"];
    });

    this.setCurrentProjectId(this.currentProjectId);
  }

  ngOnInit() {
    this.projects = this.appService.projects;
  }

  // onHate(projectId: number) {
  //   this.appService.onHate(projectId);
  //   console.log("hate: ", this.appService.hate);

  //   console.log("CURRENT project ID after HATE: ", this.currentProjectId);
  // }

  // onLike(projectId: number) {
  //   this.appService.onLike(projectId);
  //   this.currentProjectId = this.appService.getNextCard(projectId);
  //   console.log("like IN CHILD: ", this.appService.like);

  //   console.log("CURRENT project ID after Like: ", this.currentProjectId);
  // }

  setCurrentProjectId(id: number) {
    this.appService.currentCardId = id;
  }
}
