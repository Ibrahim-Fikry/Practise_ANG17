import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDirectivesComponent } from './com-directives.component';

describe('ComDirectivesComponent', () => {
  let component: ComDirectivesComponent;
  let fixture: ComponentFixture<ComDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
