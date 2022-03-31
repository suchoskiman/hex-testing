import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainSelectorButtonComponent } from './terrain-selector-button.component';

describe('TerrainSelectorButtonComponent', () => {
  let component: TerrainSelectorButtonComponent;
  let fixture: ComponentFixture<TerrainSelectorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainSelectorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainSelectorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
