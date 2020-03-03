import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { userService } from "../rest/user.service";
// import { MatInputModule } from "@angular/material/input";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { PostsModule } from "../posts/posts.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PostsModule,
    // MatInputModule,
    CommonModule
  ],
  exports: [UsersComponent],
  providers: [userService]
})
export class UsersModule {}
