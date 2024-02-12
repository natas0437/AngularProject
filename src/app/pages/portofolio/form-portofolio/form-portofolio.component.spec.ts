import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPortofolioComponent } from './form-portofolio.component';

describe('FormPortofolioComponent', () => {
  let component: FormPortofolioComponent;
  let fixture: ComponentFixture<FormPortofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPortofolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
