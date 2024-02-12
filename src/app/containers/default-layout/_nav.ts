import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Example',
    url: '/example',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Portofolio Learner',
    url: '/portofolio',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Portofolio Trainer',
    url: '/portofolio-trainer',
    iconComponent: { name: 'cil-speedometer' },
  },

];
