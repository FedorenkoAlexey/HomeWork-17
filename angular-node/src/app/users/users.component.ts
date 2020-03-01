import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { NgForm } from "@angular/forms";
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
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log("user.id", user.id);
  }

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

  deleteUsers = async (id: number | string) => {
    await this.api.deleteUser(id);
    console.log("TEST", id);
  };

  testPost() {
    this.api.postTestData().subscribe(
      response => {
        console.log("response from POST API is ", response);
      },
      error => {
        console.log("error during post is ", error);
      }
    );
  }

  ngOnInit() {
    this.api.getUsers();
    this.testPost();
  }

  // delUser(form: NgForm) {
  //   console.log("SUBMIT", this.data.id);
  //   console.log(form.value);
  // }

  // getPost(id: any) {
  //   this.api.getPosts(id).subscribe((posts: Post) => {
  //     this.posts = posts;
  //   });
  // }
}
