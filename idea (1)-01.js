import * as React from 'react';
import Svg,{ SvgXml,SvgCss,
  Defs,
  LinearGradient,
  Stop,
  Path,
  Text,
  TSpan,
  G, } from 'react-native-svg';
 
const xml = `
<Svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50.455" height="50" viewBox="0 0 44.455 48">
    <Defs>
        <style>.a{fill:url(#a);}.b{fill:url(#b);}.c{fill:url(#d);}.d{fill:url(#e);}.e{fill:url(#g);}.f{fill:url(#h);}.g{fill:#fff;font-size:14px;font-weight:500;}</style>
        <LinearGradient id="a" y1="0.501" x2="1" y2="0.501" gradientUnits="objectBoundingBox">
            <Stop offset="0" stop-color="#006dc2" />
            <Stop offset="1" stop-color="#4c90c4" />
        </LinearGradient>
        <linearGradient id="b" x1="0" y1="0.5" x2="1" y2="0.5" xlink:href="#a" />
        <LinearGradient id="d" x1="-0.009" y1="0.494" x2="0.999" y2="0.494" xlink:href="#a" />
        <LinearGradient id="e" x1="-0.003" y1="0.5" x2="1.002" y2="0.5" xlink:href="#a" />
        <LinearGradient id="g" x1="0.001" y1="0.506" x2="0.989" y2="0.506" xlink:href="#a" />
        <LinearGradient id="h" x1="0.007" y1="0.5" x2="1.002" y2="0.5" xlink:href="#a" />
    </Defs>
    <G transform="translate(-4.5 -4.18)">
        <G transform="translate(14.988 14.806)">
            <Path class="a" d="M29.033,42.084H22.078a3.3,3.3,0,0,1-1.2-.239,3.2,3.2,0,0,1-.994-.682,2.861,2.861,0,0,1-.67-.994,2.993,2.993,0,0,1-.251-1.2V37.8a1.855,1.855,0,0,0,0-.263,1.784,1.784,0,0,0,0-.251v-.1a7.182,7.182,0,0,0-.311-.694c-.132-.275-.287-.539-.443-.8a6.509,6.509,0,0,0-.539-.742,6.667,6.667,0,0,0-.622-.682l-1.077-1.281a13.693,13.693,0,0,1-1.2-1.712,12.88,12.88,0,0,1-.826-1.855,14.04,14.04,0,0,1-.5-1.975,13.263,13.263,0,0,1-.168-2.059,12.341,12.341,0,0,1,.97-4.788A12.509,12.509,0,0,1,20.8,14.05a12.217,12.217,0,0,1,16.088,6.6,1.8,1.8,0,1,1-3.3,1.4,8.706,8.706,0,0,0-16.04,0,8.666,8.666,0,0,0-.694,3.388,8.451,8.451,0,0,0,.12,1.448,9.1,9.1,0,0,0,.359,1.389,8.6,8.6,0,0,0,.575,1.317,10.078,10.078,0,0,0,.8,1.2l.9,1.065a10.534,10.534,0,0,1,.778.862c.275.347.527.694.766,1.065a11.467,11.467,0,0,1,1.2,2.394l.084.3a1.009,1.009,0,0,0,.072.455c.072.156,0,.287,0,.431v1.173h5.985v-.407a2.622,2.622,0,0,1,0-.347v-.443a1.8,1.8,0,0,1,3.591.275,1.377,1.377,0,0,0,0,.227v1.1a3.052,3.052,0,0,1-.251,1.2,3.184,3.184,0,0,1-.67.982,2.921,2.921,0,0,1-.982.67,3.2,3.2,0,0,1-1.137.3Z" transform="translate(-13.28 -13.08)" />
        </G>
        <Path class="b" d="M28.537,41.391H20.446a1.8,1.8,0,0,1,0-3.591h8.092a1.8,1.8,0,0,1,0,3.591Z" transform="translate(2.765 6.575)" />
        <Path class="b" d="M11.323,24.474H5.7a1.2,1.2,0,0,1,0-2.394h5.626a1.2,1.2,0,0,1,0,2.394Z" transform="translate(0 3.504)" />
        <Path class="c" d="M14.931,15.646a1.2,1.2,0,0,1-.85-.347l-3.974-3.974A1.2,1.2,0,0,1,11.8,9.637L15.781,13.6a1.2,1.2,0,0,1-.85,2.047Z" transform="translate(1.048 1.018)" />
        <Path class="d" d="M33.014,15.808a1.2,1.2,0,0,1-.838-2.035L36.15,9.787a1.193,1.193,0,0,1,1.688,1.688l-3.974,3.986A1.2,1.2,0,0,1,33.014,15.808Z" transform="translate(5.34 1.036)" />
        <Path class="b" d="M23.757,12.2a1.2,1.2,0,0,1-1.2-1.2V5.377a1.2,1.2,0,1,1,2.394,0V11A1.2,1.2,0,0,1,23.757,12.2Z" transform="translate(3.535)" />
        <Path class="e" d="M10.978,37.92a1.2,1.2,0,0,1-.85-2.047L14.114,31.9A1.2,1.2,0,1,1,15.8,33.587l-3.974,3.986A1.2,1.2,0,0,1,10.978,37.92Z" transform="translate(1.039 5.341)" />
        <Path class="f" d="M25.887,44.911H22.3a1.8,1.8,0,0,1,0-3.591h3.591a1.8,1.8,0,0,1,0,3.591Z" transform="translate(3.129 7.269)" />
        <Text class="g" transform="translate(32.955 37.36)">
            <tTSpan x="0" y="0">30</tspan>
        </Text>
    </G>
</Svg>`
export default () => <SvgXml xml={xml} width="100%" height="100%" />;
