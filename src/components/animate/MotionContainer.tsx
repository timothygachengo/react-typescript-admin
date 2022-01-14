import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// material
import { Box } from '@mui/material';
//
import { varWrapEnter } from './variants';

// ----------------------------------------------------------------------

MotionContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default function MotionContainer ({ open, children, ...other }: { open : any, children : any, [x:string] : any}) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
