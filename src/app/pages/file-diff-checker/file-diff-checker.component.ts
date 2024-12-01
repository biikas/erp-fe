import { CommonModule } from "@angular/common";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule } from "@nebular/theme";

@Component({
    selector: 'app-file-diff-checker',
    templateUrl: './file-diff-checker.component.html',
    styleUrls: ['./file-diff-checker.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule]
})
export class FileDiffCheckerComponent {
    originalText: string = '';
    modifiedText: string = '';
    diffResults: Array<{ original: string, modified: string, changed: boolean }> = [];

    @ViewChild('outputSection') outputSection!: ElementRef;

    checkDifferences() {
        const originalLines = this.originalText.split('\n');
        const modifiedLines = this.modifiedText.split('\n');
        const maxLength = Math.max(originalLines.length, modifiedLines.length);
        this.diffResults = [];

        for (let i = 0; i < maxLength; i++) {
            const original = originalLines[i] || '';
            const modified = modifiedLines[i] || '';
            if (original !== modified) {
                this.diffResults.push({
                    original: this.highlightChanges(original, modified),
                    modified: this.highlightChanges(modified, original),
                    changed: true
                });
            } else {
                this.diffResults.push({ original, modified, changed: false });
            }
        }

        // Scroll to the results section after comparison
        setTimeout(() => {
            this.outputSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Adding a small delay to ensure DOM update is complete
    }

    private highlightChanges(text1: string, text2: string): string {
        const words1 = text1.split(' ');
        const words2 = text2.split(' ');
        const maxLength = Math.max(words1.length, words2.length);
        let highlightedText = '';

        for (let i = 0; i < maxLength; i++) {
            if (words1[i] !== words2[i]) {
                highlightedText += `<span class="highlight">${words1[i] || ''}</span> `;
            } else {
                highlightedText += `${words1[i]} `;
            }
        }
        return highlightedText.trim();
    }
}
