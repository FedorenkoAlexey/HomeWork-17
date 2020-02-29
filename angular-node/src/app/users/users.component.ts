import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../rest/api.service";
// import { NgForm } from "@angular/forms";
import { User } from "../rest/user/user.model";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.html",
  styleUrls: ["./users.css"]
})
export class UsersComponent implements OnInit {
  constructor(private api: ApiService) {}

  users: User;
  posts: Post;
  isActive: boolean = false;

  data: User = {
    id: null,
    username: "",
    firstname: "",
    lastname: "",
    sex: "",
    age: null
  };

  @Input() user: User;

  getUsers(): void {
    this.api.getUsers();
    this.users = this.api.users;
    this.isActive = true;
    console.log(this.users);
  }
  getUserId(id: number) {
    console.log(id);
  }

  onSubmit() {
    console.log("SUBMIT");
  }

  ngOnInit() {
    this.api.getUsers();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   form.resetForm("");
  // }

  // getPost(id: any) {
  //   this.api.getPosts(id).subscribe((posts: Post) => {
  //     this.posts = posts;
  //   });
  // }
}
