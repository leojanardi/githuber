import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Welcome from '~/pages/Welcome';

const Routes = createAppContainer(createSwitchNavigator({ Welcome }));

export default Routes;
