import { Component, OnInit } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { NgForm } from "@angular/forms";
import { User } from "../rest/user/user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.html",
  styleUrls: ["./users.css"]
})
export class UsersComponent implements OnInit {
  constructor(private api: ApiService) {}

  users: User;
  posts: any; // Create intrface !!!
  isActive: boolean = false;
  isShow: boolean = true;

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
    console.log("user.id", user);
  }

  data: User = {
    id: null,
    username: "",
    firstname: "",
    lastname: "",
    sex: "",
    age: null
  };

  getUsers(): void {
    this.api.getUsers().subscribe((user: User) => {
      this.users = user;
    });
    console.log(this.users);
  }

  deleteUsers = (id: number | string) => {
    this.api.deleteUser(id).subscribe(() => {
      this.getUsers();

      console.log(`deleted user id: ${id}`);
    });
    // console.log(`deleted user id: ${id}`);
    // console.log("TEST", id);
  };

  getPosts(id: number) {
    this.api.getUserPost(id).subscribe((posts: any) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  ngOnInit() {
    // this.api.getUsers();
  }
}
