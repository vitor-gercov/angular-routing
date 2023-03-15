import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNestedComponent } from './one-nested.component';

describe('OneNestedComponent', () => {
  let component: OneNestedComponent;
  let fixture: ComponentFixture<OneNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
