import React from 'react';
import { Navbar } from 'react-bootstrap';
export default function CustomizedNavbar() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand style={{ margin: '0 auto 0 auto' }}>
          Elçi Teknoloji İş Görüşmesi FeedBack Uygulaması
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
