import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMoleculeComponent } from './input-molecule.component';

describe('InputMoleculeComponent', () => {
  let component: InputMoleculeComponent;
  let fixture: ComponentFixture<InputMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputMoleculeComponent]
    });
    fixture = TestBed.createComponent(InputMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
