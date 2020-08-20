/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IConstatComponent } from './iConstat.component';

describe('IConstatComponent', () => {
  let component: IConstatComponent;
  let fixture: ComponentFixture<IConstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IConstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IConstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
