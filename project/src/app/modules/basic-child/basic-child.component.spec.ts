import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChildComponent } from './basic-child.component';

describe('BasicChildComponent', () => {
  let component: BasicChildComponent;
  let fixture: ComponentFixture<BasicChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
