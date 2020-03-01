import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../rest/api.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.html",
  styleUrls: ["./posts.css"]
})
export class PostsComponent implements OnInit {
  constructor(private api: ApiService) {}

  // posts: Post;
  // userId: number;

  @Input() posts: any;

  ngOnInit() {}
}
