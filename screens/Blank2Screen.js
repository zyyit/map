import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const Blank2Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return <ScreenContainer hasSafeArea={false} scrollable={false} />;
};

export default withTheme(Blank2Screen);
