import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKnowledgeComponent } from './form-knowledge.component';

describe('FormKnowledgeComponent', () => {
  let component: FormKnowledgeComponent;
  let fixture: ComponentFixture<FormKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
