import React from 'react';
import { Row } from 'reactstrap';

const Footer = () => {

  let year = new Date().getFullYear();

  return(
    /* The contents must have one parent but it can be just a "dummy" element as a container*/

      <footer>
        <Row>
          <p>&copy; Eleven Fifty {year}</p>
        </Row>

      </footer>
  );
};

export default Footer;