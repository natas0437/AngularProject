import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExperiencesComponent } from './form-experiences.component';

describe('FormExperiencesComponent', () => {
  let component: FormExperiencesComponent;
  let fixture: ComponentFixture<FormExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
