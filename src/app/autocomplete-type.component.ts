import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'formly-autocomplete-type',
  template: `
    <input matInput
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      (keyup)="handleKeyup()"
     >
  `,
})
export class TestTypeComponent extends FieldType {
  randomKey = Math.random()
    .toString(36)
    .substring(2, 5);

  cardType;
  onPopulate(field) {
    console.log('onPopulate', this.randomKey);
    field.validators = {
      card: {
        expression: () => {
          console.log('validator', this.randomKey, this.cardType);
          return this.cardType === 'whatever';
        },
        message: 'You must enter a valid card number',
      },
    };
  }

  constructor() {
    super();
    console.log('constructor called', this.randomKey);
  }

  handleKeyup() {
    this.cardType = "whatever"
    console.log('keyup', this.randomKey, this.cardType);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */