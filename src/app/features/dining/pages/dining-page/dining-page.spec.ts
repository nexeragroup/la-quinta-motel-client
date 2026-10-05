import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiningPage } from './dining-page';

describe('DiningPage', () => {
  let component: DiningPage;
  let fixture: ComponentFixture<DiningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiningPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DiningPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
