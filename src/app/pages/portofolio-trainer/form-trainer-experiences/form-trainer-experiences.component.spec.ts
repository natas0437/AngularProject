import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrainerExperiencesComponent } from './form-trainer-experiences.component';

describe('FormTrainerExperiencesComponent', () => {
  let component: FormTrainerExperiencesComponent;
  let fixture: ComponentFixture<FormTrainerExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrainerExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTrainerExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
