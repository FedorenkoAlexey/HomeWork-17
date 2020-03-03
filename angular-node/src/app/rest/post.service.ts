import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post } from "./post/post.model";

@Injectable({
  providedIn: "root"
})
export class postService {
  private POST_URL = "/api/posts";

  posts: Post;
  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    console.log("run CreatePost", `${this.POST_URL}/add/${post.userId}`);
    return this.http.post(`${this.POST_URL}/add/${post.userId}`, post);
  }

  deletePost(id: string | number) {
    console.log("del-post");
    return this.http.delete(`${this.POST_URL}/del/${id}`);
  }
}
