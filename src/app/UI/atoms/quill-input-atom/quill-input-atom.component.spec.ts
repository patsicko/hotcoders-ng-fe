import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillInputAtomComponent } from './quill-input-atom.component';

describe('QuillInputAtomComponent', () => {
  let component: QuillInputAtomComponent;
  let fixture: ComponentFixture<QuillInputAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuillInputAtomComponent]
    });
    fixture = TestBed.createComponent(QuillInputAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
