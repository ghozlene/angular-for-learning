import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicePipeComponent } from './exercice-pipe.component';

describe('ExercicePipeComponent', () => {
  let component: ExercicePipeComponent;
  let fixture: ComponentFixture<ExercicePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicePipeComponent]
    });
    fixture = TestBed.createComponent(ExercicePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
