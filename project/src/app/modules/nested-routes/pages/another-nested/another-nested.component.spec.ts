import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherNestedComponent } from './another-nested.component';

describe('AnotherNestedComponent', () => {
  let component: AnotherNestedComponent;
  let fixture: ComponentFixture<AnotherNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
