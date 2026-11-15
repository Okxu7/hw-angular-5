import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBlock } from './card-block';

describe('CardBlock', () => {
  let component: CardBlock;
  let fixture: ComponentFixture<CardBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
