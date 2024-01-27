import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAtomComponent } from './input-atom.component';

describe('InputAtomComponent', () => {
  let component: InputAtomComponent;
  let fixture: ComponentFixture<InputAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAtomComponent]
    });
    fixture = TestBed.createComponent(InputAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
