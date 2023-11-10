import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, WebView, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const MapIOSScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <WebView
        cacheEnabled={true}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        source={{
          html: '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8"> \n<title>画像からの地番取得</title>\n<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>\n<script type="text/javascript" src="https://ajxapi.glbs.jp/bxmp/api/v2/js/loadapi.php?v=39&enc=utf8&cnt=1"></script>\n</head>\n<body>\n<div id="content">\n<div id="mapContainer"></div>\n<div>glbsMap</div>\n\n<img id="chibanImg" src="" style="display:none"/>\n</div>\n</body>\n<script type="text/javascript">\n$(document).ready(function(){\n    try{\nsetTimeout(function() {\ndispMap();\nalert(22)\n}, 2000);\n\n} catch(e) {\nalert(e.message);\n}\n\n});\n\n\n//地図の初期化・表示処理\nfunction dispMap() {\n    var opts = new GlbsMapOptions();\n    opts.initPos = new GlbsPoint(503095101,128359253);\n    opts.size = new GlbsSize(1200,700);\n    opts.subMap = true;\n    opts.subMapOpen = true;\n    var map = new GlbsMap();\n    map.initialize(document.getElementById("mapContainer"), opts);\n};\n\n</script>\n</html>',
        }}
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['HTML View'],
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(MapIOSScreen);
