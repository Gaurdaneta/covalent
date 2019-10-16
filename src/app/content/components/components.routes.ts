import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'components' } },
      {
        path: 'breadcrumbs',
        loadChildren: () =>
          import('./component-demos/breadcrumbs/breadcrumbs.module').then((m) => m.BreadcrumbsDemoModule),
      },
      {
        path: 'markdown-parser',
        loadChildren: () => import('./component-demos/markdown/markdown.module').then((m) => m.MarkdownDemoModule),
      },
      {
        path: 'markdown-navigator',
        loadChildren: () =>
          import('./component-demos/markdown-navigator/markdown-navigator.module').then(
            (m) => m.MarkdownNavigatorDemoModule,
          ),
      },
      {
        path: 'message',
        loadChildren: () => import('./component-demos/message/message.module').then((m) => m.MessageDemoModule),
      },
    ],
  },
];

export const componentRoutes: any = RouterModule.forChild(routes);
