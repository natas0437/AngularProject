import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrainerKnowledgeComponent } from './form-trainer-knowledge.component';

describe('FormTrainerKnowledgeComponent', () => {
  let component: FormTrainerKnowledgeComponent;
  let fixture: ComponentFixture<FormTrainerKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrainerKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTrainerKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
