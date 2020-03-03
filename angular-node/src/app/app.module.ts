import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RootComponent } from "./root/root.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersModule } from "./users/users.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, RootComponent]
})
export class AppModule {}
