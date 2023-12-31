/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Footer__page_oneComponent } from './footer__page_one.component';

describe('Footer__page_oneComponent', () => {
  let component: Footer__page_oneComponent;
  let fixture: ComponentFixture<Footer__page_oneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer__page_oneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer__page_oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
