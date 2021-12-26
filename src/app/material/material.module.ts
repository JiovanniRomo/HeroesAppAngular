import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [],
  exports: [
    // Todo lo que este siendo exportado en este modulo, sera parte del modulo que lo importe
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
