import * as React from 'react';
import { INavStyles, INav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav';
import {IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Opacity } from '@material-ui/icons';



export const navStyles: Partial<INavStyles> = {
    root: {
      width: '100%', 
    }, 
    link: {
      height: '50px', background: 'rgb(50, 5, 104)', color: 'white', paddingRight: '15px', opacity:1,
      
      selectors:{
        '.ms-Nav-compositeLink:hover &':{color:'#572594', background:'', fontWeight: 'bold'},
        '.ms-Button':{background:'none'},
      },
    },
    
  };
//const stackTokens: IStackTokens = {childrenGap: 40};
export const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
   
      {
        key: 'dashboard',
        name: '',
        icon: 'ViewDashboard',
        url: '#/dashboard'
      },
      {
        key: 'user',
        name: '',
        icon: 'UserFollowed',
        url: '#/info',
      },
      {
        key: 'performance',
        icon: 'DonutChart',
        name: '',
        url: '#/start',
      },
      {
        key: 'evaluation',
        icon: 'AccountActivity',
        name: '',
        url: '#/request',
      },
      
    ],
  },
];