import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostCardComponent } from './components/post/post.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PostCardComponent],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
})
export class AppModule { }
