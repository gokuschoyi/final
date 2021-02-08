import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentGameComponent } from './opponent-game.component';

describe('OpponentGameComponent', () => {
  let component: OpponentGameComponent;
  let fixture: ComponentFixture<OpponentGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
