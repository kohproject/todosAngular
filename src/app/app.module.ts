import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BtnComponent } from './components/btn/btn.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskBlocksComponent } from './components/task-blocks/task-blocks.component';
import { TaskblockComponent } from './components/taskblock/taskblock.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HeaderComponent,
    FooterComponent,
    TaskBlocksComponent,
    TaskblockComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
