import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSelectorButtonComponent } from './tool-selector-button.component';

describe('ToolSelectorButtonComponent', () => {
  let component: ToolSelectorButtonComponent;
  let fixture: ComponentFixture<ToolSelectorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolSelectorButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolSelectorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
