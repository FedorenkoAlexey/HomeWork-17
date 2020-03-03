import { Component, OnInit } from "@angular/core";
import { userService } from "../rest/user.service";
import { NgForm } from "@angular/forms";
import { User } from "../rest/user/user.model";
import { Post } from "../rest/post/post.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.html",
  styleUrls: ["./users.css"]
})
export class UsersComponent implements OnInit {
  constructor(private userService: userService) {}

  users: User;
  posts: Post;
  isActive: boolean = false;
  isShow: boolean = true;

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  data: User = {
    id: null,
    userName: "",
    firstname: "",
    lastname: "",
    sex: "",
    age: null
  };

  getUsers(): void {
    this.userService.getUsers().subscribe((user: User) => {
      this.users = user;
    });
    console.log(this.users);
  }

  editUser(form: NgForm) {
    let data = this.data;
    data = { ...this.selectedUser };
    data.userName = form.value.username;
    console.log("T_D: ", data);
    console.log("DATA: ", this.data);
    this.userService.editUserName(data).subscribe(
      response => {
        this.getUsers();
        console.log("response from GET API is ", response);
      },
      error => {
        console.log("error is ", error);
      }
    );
  }

  deleteUsers = (id: number | string) => {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();

      console.log(`deleted user id: ${id}`);
    });
    // console.log(`deleted user id: ${id}`);
    // console.log("TEST", id);
  };

  getPosts(id: number) {
    this.userService.getUserPost(id).subscribe((posts: Post) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  ngOnInit() {}
}
