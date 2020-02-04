import { Component, OnInit, Input } from "@angular/core";
import { View } from "../view.model";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() project: View;

  constructor(private appService: AppService) {}

  ngOnInit() {
    // this.appService.currentCardId = this.project.id;
  }

  onHate(projectId: number) {
    this.appService.onHate(projectId);
    console.log("hate: ", this.appService.hate);
  }

  onLike(projectId: number) {
    this.appService.onLike(projectId);

    console.log("like IN CHILD: ", this.appService.like);
  }

  getDuration() {
    this.appService.getDuration();
  }
}
