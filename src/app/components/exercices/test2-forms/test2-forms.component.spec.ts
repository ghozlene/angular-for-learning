import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2FormsComponent } from './test2-forms.component';

describe('Test2FormsComponent', () => {
  let component: Test2FormsComponent;
  let fixture: ComponentFixture<Test2FormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test2FormsComponent]
    });
    fixture = TestBed.createComponent(Test2FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
