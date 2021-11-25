import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TypingTestRouting } from './typing-test-routing.module';
import { TypingTest } from './typing-test.component';
import { RandomWordsComponent } from './random-words/random-words.component';

@NgModule({
  declarations: [
    TypingTest,
    RandomWordsComponent,
  ],
  imports: [
    BrowserModule,
    TypingTestRouting
  ],
  providers: [],
  bootstrap: [TypingTest]
})
export class TypingTestModule { }
