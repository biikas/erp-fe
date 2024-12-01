import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { marked } from 'marked'; // Make sure to install and import 'marked' library

@Component({
    selector: 'app-markdown-editor',
    templateUrl: './mark-down-editor.component.html',
    styleUrls: ['./mark-down-editor.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, NbLayoutModule, NbCardModule, NbInputModule]
})
export class MarkdownEditorComponent {
    markdownText!: string ;
    htmlPreview!: string ;

    constructor() { }

    convertMarkdownToHtml() {
        this.htmlPreview = marked.parse(this.markdownText) as string;
    }
    
}
