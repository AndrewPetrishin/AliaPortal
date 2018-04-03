/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Root} from 'native-base';
import {StackNavigator} from 'react-navigation';
// reference for Delivery
import Delivery from './Delivery/index';
import DeliveryWizard1 from './Delivery/inputData';
import DeliveryWizard2 from './Delivery/chooseItems';
import DeliveryWizard3 from './Delivery/result';

const AppNavigator = StackNavigator({
        Delivery : { screen : Delivery},
        DeliveryWizard1 : { screen : DeliveryWizard1},
        DeliveryWizard2 : { screen : DeliveryWizard2},
        DeliveryWizard3 : { screen : DeliveryWizard3}
    },
    {
        headerMode: 'none'
    }
);

export default () =>
<Root>
    <AppNavigator/>
</Root>
