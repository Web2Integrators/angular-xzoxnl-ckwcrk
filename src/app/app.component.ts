import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  visible = false
  fields: FormlyFieldConfig[] = [

    {
      hideExpression: () => !this.visible,
      fieldGroup: [
        {
          key: 'Autocomplete',
          type: 'test',
          templateOptions: {
            required: true,
            label: 'Test',
          },
        },
      ],
    }
  ];
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */