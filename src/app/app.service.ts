import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { View } from "./view/view.model";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class AppService {
  currentCardId: number;

  like: number[] = [];
  hate: number[] = [];

  likeEmitter = new EventEmitter<void>();
  hateEmitter = new EventEmitter<void>();

  buzzWords: string[] = [
    "Angular",
    "JavaScript",
    "Api Management",
    "Spring-boot",
    "JPA",
    "JDBC"
  ];

  projects: View[] = [
    new View(
      1,
      "Forbedring av flytoget appen",
      "Flytoget",
      "Vi trenger en god utvikler som kan alt sammen hehe",
      "Grefsenveien 30b",
      "https://flytoget.no/globalassets/bilder/logo/kvadratisk-farge-engelsk.jpg",
      "Superman, 91759568",
      this.buzzWords
    ),
    new View(
      2,
      "Forbedring av ruter appen",
      "Ruter",
      "Erfaren JavaScript utvikler vi trenger den",
      "Ullern 50c",
      "https://www.flybussen.no/website/var/tmp/image-thumbnails/0/586/thumb__HeaderImage/500x350-ruter_1.png",
      "Batman, 7857595",
      this.buzzWords
    ),
    new View(
      3,
      "WCAG support",
      "Sparebanken sør",
      "Erfaren WCAG utvikler",
      "Storo 50c",
      "https://oifarendal.no/wp-content/uploads/sites/27/2019/07/sparebankens%C3%B8r.png",
      "Robin, 7857595",
      this.buzzWords
    )
  ];

  constructor(
    private router: Router,
    private http: HttpClient,
    private apollo: Apollo
  ) {}

  onHate(projectId: number) {
    this.hate.push(projectId);
    this.hateEmitter.emit();
    console.log(this.hate);

    this.getNextCard();
  }

  onLike(projectId: number) {
    this.like.push(projectId);
    console.log(this.like);
    this.likeEmitter.emit();

    this.getNextCard();
  }

  getNextCard() {
    console.log("CURRENT ID: ", this.currentCardId);

    //Where am i in the array?
    let currentCardIdx = this.projects.findIndex((x, i) => {
      return x.id == this.currentCardId;
    });

    console.log("Current card idx: ", currentCardIdx);

    //Can i go forward?
    if (currentCardIdx >= 0) {
      if (currentCardIdx + 1 <= this.projects.length - 1) {
        this.currentCardId = this.projects[currentCardIdx + 1].id;
        this.router.navigate(["/project", this.currentCardId]);
      } else {
        this.router.navigate(["/no-card"]);
      }
    }
  }

  // projectLocation?: { lat: number; long: number }
  getDuration() {
    // this.apollo
    //   .mutate({
    //     mutation: gql`
    //       mutation {
    //         trip(
    //           from: {
    //             name: "Jobb"
    //             coordinates: { latitude: 59.9011623, longitude: 10.6293047 }
    //           }

    //           to: {
    //             name: "annenJobb"
    //             coordinates: { latitude: 59.9109123, longitude: 10.747153 }
    //           }
    //         )
    //       }
    //     `
    //   })
    //   .subscribe(data => {
    //     console.log("RESPONSE: ", data);
    //   });

    this.apollo
      .watchQuery({
        query: gql`
          {
            trip(
              from: {
                name: "Jobb"
                coordinates: { latitude: 59.9011623, longitude: 10.6293047 }
              }

              to: {
                name: "annenJobb"
                coordinates: { latitude: 59.9109123, longitude: 10.747153 }
              }
            )
          }
        `
      })
      .valueChanges.subscribe(result => {
        console.log("RESPONSE: ", result);
      });

    // this.http.post("https://api.entur.io/journey-planner/v2/graphql", {});
  }
}
