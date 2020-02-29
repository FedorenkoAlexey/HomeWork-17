import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RootComponent } from "./root/root.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, RootComponent]
})
export class AppModule {}
