import { Component, OnInit, Input } from "@angular/core";
import { postService } from "../rest/post.service";
import { Post } from "../rest/post/post.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.html",
  styleUrls: ["./posts.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postService: postService) {}

  postData: Post = {
    userId: null,
    id: null,
    title: ""
  };

  selected: Post;

  addPost(form: NgForm) {
    this.postData.userId = this.posts[0].userId;
    this.postService.createPost(this.postData).subscribe(
      response => {
        console.log("response from GET API is ", response);
      },
      error => {
        console.log("error is ", error);
      }
    );
    console.log("ADD_POST", form.value, "POST_DATA: ", this.postData);
  }

  onSelect(post: Post) {
    this.selected = post;
    console.log(this.selected);
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      console.log(`deleted post id: ${id}`);
    });
  }

  @Input() posts: Post;

  ngOnInit() {}
}
