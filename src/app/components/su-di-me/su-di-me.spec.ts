import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuDiMe } from './su-di-me';

describe('SuDiMe', () => {
  let component: SuDiMe;
  let fixture: ComponentFixture<SuDiMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuDiMe],
    }).compileComponents();

    fixture = TestBed.createComponent(SuDiMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
