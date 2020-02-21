import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic/markdown-navigator-demo-basic.component';
import { MarkdownNavigatorDemoComponent } from './markdown-navigator-demo.component';
import { MarkdownNavigatorDemoRoutingModule } from './markdown-navigator-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [MarkdownNavigatorDemoComponent, MarkdownNavigatorDemoBasicComponent],
  imports: [
    DemoModule,
    MarkdownNavigatorDemoRoutingModule,
    /** Covalent Modules */
    CovalentMarkdownNavigatorModule,
    CovalentCodeEditorModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
  ],
})
export class MarkdownNavigatorDemoModule {}
