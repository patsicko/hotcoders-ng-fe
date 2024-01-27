import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMoleculeComponent } from './text-molecule.component';

describe('TextMoleculeComponent', () => {
  let component: TextMoleculeComponent;
  let fixture: ComponentFixture<TextMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMoleculeComponent]
    });
    fixture = TestBed.createComponent(TextMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
