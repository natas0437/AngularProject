import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPortofolioComponent } from './list-portofolio.component';

describe('ListPortofolioComponent', () => {
  let component: ListPortofolioComponent;
  let fixture: ComponentFixture<ListPortofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPortofolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
