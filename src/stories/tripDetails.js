import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';

import Trip from '../components/Trip';

import '../index.css';

storiesOf('Trip details', module)
    .addDecorator(checkA11y)
    .add('without any details', () => <Trip />);
