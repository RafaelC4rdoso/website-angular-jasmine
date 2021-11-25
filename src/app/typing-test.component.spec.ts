import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TypingTest } from './typing-test.component';

declare var $: any;

describe('TypingTest', () => {

  let component: TypingTest;
  let fixture: ComponentFixture<TypingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TypingTest
      ],
    });

    fixture = TestBed.createComponent(TypingTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start the timer', () => {
    expect(component.startTimer()).toBeTruthy();
  });

  it('should generate another word', () => {
    expect(component.changeWord()).toBeTruthy();
  });

  it('should verify the typed word', () => {
    expect(component.verifyTypedWord()).toBeFalse();
  });

  it('should return a number', () => {
    expect(component.analyzeResults()).toBeInstanceOf(Number);
  });
});
