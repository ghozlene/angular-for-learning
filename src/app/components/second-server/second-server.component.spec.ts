import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondServerComponent } from './second-server.component';

describe('SecondServerComponent', () => {
  let component: SecondServerComponent;
  let fixture: ComponentFixture<SecondServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondServerComponent]
    });
    fixture = TestBed.createComponent(SecondServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
