import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsRowComponent } from './benefits-row.component';

describe('BenefitsRowComponent', () => {
  let component: BenefitsRowComponent;
  let fixture: ComponentFixture<BenefitsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
