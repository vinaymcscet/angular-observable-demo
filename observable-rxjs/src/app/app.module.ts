import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CommonService } from './components/common.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: "", component: AComponent},
        { path: 'a', component: AComponent},
        { path: 'b', component: BComponent},
      ]
    )
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
