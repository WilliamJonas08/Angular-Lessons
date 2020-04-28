import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[credit-card]'
  // Remarquer la syntaxe particulière du selector (cf insertion dans le html)
})
export class CreditCardDirective {

  // constructor(private element: ElementRef) {console.log(this.element)}

  @HostBinding('style.border')
  border: string

  //  The host is the element that we have bound the directive to
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // PROBLEME : onKeyDown ?
    const input = event.target as HTMLInputElement

    // On supprime tous les espaces (remplacés par string vide)
    let trimmed = input.value.replace(/\s/g, '')
    /**
      /.../  : slashes are the limits of the pattern
      \s : matches spaces characters
      g  : means the regex should match the string globally (sinon on ne match que avec le premier whitespace)
      \s+ : enable to match with each CONTINUOUS white space
          var str = '  A B  C   D EF ';
          console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
          console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
     */
    if (trimmed.length > 16) {
      // on filtre trimmed à 16 caractères
      trimmed = trimmed.substr(0, 16) //chn.substring(index_début, index_fin)     l'index de début est inclu contrairement à l'index de fin
    }

    let numbers = []
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substring(i, i + 4));
      // numbers = ['1234', '5678', ...]
    }
    // console.log(numbers)

    input.value = numbers.join(' ')
    // On regroupe les éléments de numbers en un seul élément en les séparant par un espace

    // Testing binding properties
    this.border = ''
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

}
