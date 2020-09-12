/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointAdiscuterComponent } from './pointAdiscuter.component';

describe('PointAdiscuterComponent', () => {
  let component: PointAdiscuterComponent;
  let fixture: ComponentFixture<PointAdiscuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointAdiscuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAdiscuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
