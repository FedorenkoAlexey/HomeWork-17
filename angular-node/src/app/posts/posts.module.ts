import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { userService } from "../rest/user.service";
// import { MatInputModule } from "@angular/material/input";

import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from "./posts.component";
import { postService } from "../rest/post.service";

@NgModule({
  declarations: [PostsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    // , MatInputModule
  ],
  exports: [PostsComponent],
  providers: [userService, postService]
})
export class PostsModule {}
