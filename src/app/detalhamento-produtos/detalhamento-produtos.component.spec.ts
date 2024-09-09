import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoProdutosComponent } from './detalhamento-produtos.component';

describe('DetalhamentoProdutosComponent', () => {
  let component: DetalhamentoProdutosComponent;
  let fixture: ComponentFixture<DetalhamentoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhamentoProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhamentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
