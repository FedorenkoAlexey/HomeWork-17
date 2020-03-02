import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ApiService } from "../rest/api.service";
import { MatInputModule } from "@angular/material/input";

import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from "./posts.component";

@NgModule({
  declarations: [PostsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, MatInputModule],
  exports: [PostsComponent],
  providers: [ApiService]
})
export class PostsModule {}
