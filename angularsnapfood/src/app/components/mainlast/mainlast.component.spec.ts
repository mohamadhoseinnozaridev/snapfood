/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainlastComponent } from './mainlast.component';

describe('MainlastComponent', () => {
  let component: MainlastComponent;
  let fixture: ComponentFixture<MainlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
