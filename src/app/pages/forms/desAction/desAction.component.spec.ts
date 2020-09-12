/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesActionComponent } from './desAction.component';

describe('DesActionComponent', () => {
  let component: DesActionComponent;
  let fixture: ComponentFixture<DesActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
