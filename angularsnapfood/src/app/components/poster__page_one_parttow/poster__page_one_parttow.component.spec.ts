/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Poster__page_one_parttowComponent } from './poster__page_one_parttow.component';

describe('Poster__page_one_parttowComponent', () => {
  let component: Poster__page_one_parttowComponent;
  let fixture: ComponentFixture<Poster__page_one_parttowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poster__page_one_parttowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poster__page_one_parttowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
