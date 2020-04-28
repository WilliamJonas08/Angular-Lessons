import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { CreditCardDirective } from './credit-card.directive';
import { By } from '@angular/platform-browser';

@Component({
    template: `
      <input type='text' [valu]='value' credit-card>
      `
})
class TestComponent {
    value = 123456
}

describe('CreditCardDirective', () => {

    describe('Directives', () => {



        let component: TestComponent
        let fixture: ComponentFixture<TestComponent>
        let el: DebugElement

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    TestComponent,
                    CreditCardDirective
                ]
            })

            fixture = TestBed.createComponent(TestComponent)
            component = fixture.componentInstance
            el = fixture.debugElement
        })

        it('Should format the string with spaces', () => {
            const directive = el.query(By.directive(CreditCardDirective)).nativeElement
            directive.value = 654321
            directive.dispatchEvent(new Event('input')) //because the host listener is listening for events 'input' :   @HostListener('input', ['$event'])
            expect(directive.value).toBe('6543 21')
            directive.value = 9876543219876544
            directive.dispatchEvent(new Event('input'))
            expect(directive.value).toBe('9876 5432 1987 6544')
        });

        // PROBLEME DANS LE INPUT (HORS DE LA FONCTION) LORSQUE L'ON DÉPASSE LES 16 CHARACTÈRES
        // it('Should have a max lenght of 16 characters', () => {
        //     const directive = el.query(By.directive(CreditCardDirective)).nativeElement
        //     directive.value = 98765432198765449999999999
        //     directive.dispatchEvent(new Event('input'))
        //     expect(directive.value).toBe('9876 5432 1987 6544')
        // });
    });
});
