import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWinPredictComponent } from './team-win-predict.component';

describe('TeamWinPredictComponent', () => {
  let component: TeamWinPredictComponent;
  let fixture: ComponentFixture<TeamWinPredictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamWinPredictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWinPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
