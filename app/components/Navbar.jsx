import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <Link href={'/'}>Dashbourd</Link>
      <Link href={'/tickets'}>Tickets</Link>
    </nav>
  );
}