import { Routes } from '@angular/router';
import { LayoutComponent } from '../pages/layout/layout.component';
import { PasswordGeneratorComponent } from '../pages/password-generator/password-generator.component';
import { JsonFormatterComponent } from '../pages/jsonformatter/jsonformatter.component';
import { StopWatchComponent } from '../pages/stop-watch/stop-watch.component';
import { MarkdownEditorComponent } from '../pages/mark-down/mark-down-editor.component';
import { ColorPickerComponent } from '../pages/color-picker/color-picker.component';
import { FileDiffCheckerComponent } from '../pages/file-diff-checker/file-diff-checker.component';
import { SeatSelectorComponent } from '../pages/seat-selector/seat-selector.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: 'programmers-tools', component: ProgrammersToolsComponent },
      // { path: 'students-tools', component: StudentsToolsComponent },
      // { path: 'writers-tools', component: WritersToolsComponent },
      // { path: 'business-tools', component: BusinessToolsComponent },
      // { path: 'general-tools', component: GeneralToolsComponent },
    ],

  },
  {
    path: 'password-generator',
    component: PasswordGeneratorComponent
  },
  {
    path:'json-formatter',
    component:JsonFormatterComponent
  },
  {
    path:'stop-watch',
    component:StopWatchComponent
  },
  {
    path:'editor',
    component:MarkdownEditorComponent
  },
  {
    path:'color-picker',
    component:ColorPickerComponent
  },
  {
    path:'file-diff-checker',
    component:FileDiffCheckerComponent
  },
  {
    path:'movie',
    component:SeatSelectorComponent
  },
  { path: '**', redirectTo: '' },
];
