import React from 'react';
import Nav from 'react-bootstrap/Nav';

const DataNav = React.memo(({ navItems }) => {
  return (
    <>
      {navItems.map((item) => (
        <Nav.Item key={item.codigo}>
          <Nav.Link eventKey={item.codigo}>
            {item.titulo}
          </Nav.Link>
        </Nav.Item>
      ))}
    </>
  );
});

export default DataNav;