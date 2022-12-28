import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { courseService } from './Sevices/http.service';
import { CounterComponent } from './counter/counter.component';
import { CommonService } from './Sevices/common.service';
import { HighlightDirective } from './directives/highlight.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HighlightDirective,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [courseService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
