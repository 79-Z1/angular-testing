import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'test', component: TestComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
