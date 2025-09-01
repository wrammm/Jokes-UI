import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCarousel } from './joke-carousel';

describe('JokeCarousel', () => {
  let component: JokeCarousel;
  let fixture: ComponentFixture<JokeCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
