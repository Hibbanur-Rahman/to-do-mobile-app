declare module 'react-native-svg-circular-progress' {
    import { Component } from 'react';
    import { SvgProps } from 'react-native-svg';
  
    export interface CircularProgressProps extends SvgProps {
      size: number;
      width: number;
      fill: number;
      tintColor: string;
      backgroundColor: string;
      children?: (fill: number) => React.ReactNode;
    }
  
    export default class CircularProgress extends Component<CircularProgressProps> {}
  }
  