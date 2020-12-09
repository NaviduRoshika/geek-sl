import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewComicComponent } from './add-new-comic.component';

describe('AddNewComicComponent', () => {
  let component: AddNewComicComponent;
  let fixture: ComponentFixture<AddNewComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
