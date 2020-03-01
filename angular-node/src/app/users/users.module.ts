import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ApiService } from "../rest/api.service";
// import { MatInputModule } from "@angular/material/input";
import { UsersComponent } from "./users.component";

import { HttpClientModule } from "@angular/common/http";
import { PostsModule } from "../posts/posts.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PostsModule
    // , MatInputModule
  ],
  exports: [UsersComponent],
  providers: [ApiService]
})
export class UsersModule {}
