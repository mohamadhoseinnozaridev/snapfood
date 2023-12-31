/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Introduction__cityComponent } from './Introduction__city.component';

describe('Introduction__cityComponent', () => {
  let component: Introduction__cityComponent;
  let fixture: ComponentFixture<Introduction__cityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Introduction__cityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Introduction__cityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
