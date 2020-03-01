import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RootComponent } from "./root/root.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersModule } from "./users/users.module";
// import { PostsModule } from "./posts/posts.module";

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [BrowserModule, HttpClientModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent, RootComponent]
})
export class AppModule {}
