import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// ALREADY SET UP IN TEST.TS
// // Initializing testing env (for shallow testing)
// TestBed.initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// )

import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {

  describe('Shallow test', () => {

    // Creating fake virtual component (juste pour les tests)
    @Component({
      template: `
      Size: {{size | fileSize:suffix}}
      `
    })
    class TestComponent {
      suffix
      size = 123456789
    }

    let component: TestComponent
    let fixture: ComponentFixture<TestComponent>  // gives nice methods
    let el: HTMLElement

    beforeEach(() => {
      // Like ngModule but for testing purposes
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          FileSizePipe
        ]
      })

      fixture = TestBed.createComponent(TestComponent)
      component = fixture.componentInstance
      el = fixture.nativeElement
    })

    it('Should convert bytes to megabytes', () => {
      fixture.detectChanges()
      expect(el.textContent).toContain('Size: 117.74MB');
      component.size = 1029281
      fixture.detectChanges()
      expect(el.textContent).toContain('Size: 0.98MB');
    });

    it('Should use the default extension when not supplied', () => {
      fixture.detectChanges()
      expect(el.textContent).toContain('Size: 117.74MB');
    });

    it('Should override the extension when supplied', () => {
      component.suffix = 'myExt'
      fixture.detectChanges()
      expect(el.textContent).toContain('Size: 117.74myExt');
    });

  })

  describe('Isolated pipe test', () => {

    const pipe = new FileSizePipe();

    // it('create an instance', () => {
    //   const pipe = new FileSizePipe();
    //   expect(pipe).toBeTruthy();
    // });

    it('Should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('Should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('Should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });

  })



});
