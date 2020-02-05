import React, { FC } from 'react';
import Box, { BoxProps } from './Box';
import useTheme from '../useTheme';
import convert from '../utils/convert';

const ActiveBreakpoint: FC<BoxProps> = props => {
  const { breakpoints } = useTheme();
  const { toArray } = convert(breakpoints!);
  const style = toArray('none');

  return (
    <Box {...props}>
      <Box display={['block', ...style.slice(1, style.length - 1)]}>
      [0]: "_" (0 - {breakpoints![0]})
      </Box>
      {breakpoints!.aliases.map((a, i) => (
        <Box key={a} display={[...style.slice(0, i + 1 ), 'block', ...style.slice(i + 2)]}>
          [{i + 1}]: "{a}" ({breakpoints![i]} - {i === breakpoints!.length - 1 ? '∞' : breakpoints![i + 1]})
        </Box>
      ))}
    </Box>
  );
};

export default ActiveBreakpoint;