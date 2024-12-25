import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Confirm = (props) => {
  const {
    onClick = () => { alert('clicked') },
    label,
    styles,
  } = props;


  return (
    <Box>
      <Button onClick={onClick}
        {...props}
        style={{ ...styles }}
      >
        {label}
      </Button>
    </Box>
  );
}


Confirm.defaultProps = {
  label: "Button",
  styles: {
    color: "#000",
    backgroundColor: "#ff7470",
    border: " 1px solid #e86b70",
    textTransform: 'none',
    width: 258,
    height: 46,
    borderRadius: 20
  },
};

export default Confirm;