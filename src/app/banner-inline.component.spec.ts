import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    // `TestBed` creates an Angular testing module — an @NgModule class
    // `configureTestingModule` produces the module environment for the class you want to test
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ], // declare the test component
      // You also can use imports, providers and etc.
    });

    // `createComponent` creates an instance of the component and returns a ComponentFixture
    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // The fixture provides access to the component instance itself and to the DebugElement,
    // which is a handle on the component's DOM element.
    de = fixture.debugElement.query(By.css('h1')); // query for the title <h1> by CSS element selector
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    // detectChanges - Angular change detection
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});