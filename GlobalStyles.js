import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const WebViewStyles = theme =>
  StyleSheet.create({ 'HTML View': { flex: 1 }, 'Web View': { flex: 1 } });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });
