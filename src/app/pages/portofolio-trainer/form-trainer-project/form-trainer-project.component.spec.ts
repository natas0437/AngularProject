import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrainerProjectComponent } from './form-trainer-project.component';

describe('FormTrainerProjectComponent', () => {
  let component: FormTrainerProjectComponent;
  let fixture: ComponentFixture<FormTrainerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrainerProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTrainerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
