import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardSmallComponent } from './produto-card-small.component';

describe('ProdutoCardSmallComponent', () => {
  let component: ProdutoCardSmallComponent;
  let fixture: ComponentFixture<ProdutoCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoCardSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
