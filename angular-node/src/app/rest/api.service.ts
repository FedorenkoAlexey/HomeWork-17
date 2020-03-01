import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "./user/user.model";
import { Post } from "./post/post.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private USER_URL = "/api/users";
  private POST_URL = "/api/posts";

  data = {
    user: "Piter",
    age: 25
  };

  posts: Post;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_URL);
  }

  deleteUser(id: any) {
    // console.log("del: ", `${this.USER_URL}/${id}`);
    return this.http.delete(`${this.USER_URL}/${id}`);
  }

  getUserPost(id: number) {
    // console.log(`${this.USER_URL}/posts/${id}`);
    return this.http.get(`${this.POST_URL}/${id}`);
  }
}
