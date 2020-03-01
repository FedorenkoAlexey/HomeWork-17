import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "./user/user.model";
import { Post } from "./post/post.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private USER_URL = "/api/users";

  data = {
    user: "Piter",
    age: 25
  };

  users: User;
  posts: Post;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_URL).subscribe((response: User) => {
      this.users = response;
    });
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.USER_URL}/${id}`);
  }

  postTestData() {
    return this.http.post("http://localhost:3000/postData", this.data);
  }
}
