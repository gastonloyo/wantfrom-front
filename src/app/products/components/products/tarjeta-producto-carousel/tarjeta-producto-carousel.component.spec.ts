import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoCarouselComponent } from './tarjeta-producto-carousel.component';

describe('TarjetaProductoCarouselComponent', () => {
  let component: TarjetaProductoCarouselComponent;
  let fixture: ComponentFixture<TarjetaProductoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProductoCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProductoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
