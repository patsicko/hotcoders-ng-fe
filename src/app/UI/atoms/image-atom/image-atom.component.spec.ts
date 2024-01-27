import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAtomComponent } from './image-atom.component';

describe('ImageAtomComponent', () => {
  let component: ImageAtomComponent;
  let fixture: ComponentFixture<ImageAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageAtomComponent]
    });
    fixture = TestBed.createComponent(ImageAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
