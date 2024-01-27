import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAtomComponent } from './text-atom.component';

describe('TextAtomComponent', () => {
  let component: TextAtomComponent;
  let fixture: ComponentFixture<TextAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAtomComponent]
    });
    fixture = TestBed.createComponent(TextAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
