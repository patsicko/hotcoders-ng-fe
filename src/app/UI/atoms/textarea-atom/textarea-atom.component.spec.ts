import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAtomComponent } from './textarea-atom.component';

describe('TextareaAtomComponent', () => {
  let component: TextareaAtomComponent;
  let fixture: ComponentFixture<TextareaAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaAtomComponent]
    });
    fixture = TestBed.createComponent(TextareaAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
