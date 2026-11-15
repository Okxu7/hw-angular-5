import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnorderedList } from './unordered-list';

describe('UnorderedList', () => {
  let component: UnorderedList;
  let fixture: ComponentFixture<UnorderedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnorderedList],
    }).compileComponents();

    fixture = TestBed.createComponent(UnorderedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
