import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/user/history">History</Link>
      <Link href="/user/profile">Profile</Link>
      <Link href="/user/setting">Setting</Link>
    </div>
  );
};

export default Header;
