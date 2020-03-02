import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user/user.model";
import { Post } from "./post/post.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private USER_URL = "/api/users";
  private POST_URL = "/api/posts";

  posts: Post;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_URL);
  }

  deleteUser(id: string | number) {
    return this.http.delete(`${this.USER_URL}/${id}`);
  }

  editUserName(user: User) {
    console.log("PUT:", `${this.USER_URL}/edit/${user.id}`);
    return this.http.put(`${this.USER_URL}/edit/${user.id}`, user, httpOptions);
  }

  getUserPost(id: number) {
    return this.http.get(`${this.POST_URL}/${id}`);
  }
}
