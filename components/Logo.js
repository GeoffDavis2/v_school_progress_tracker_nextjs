import Image from 'next/image';

export const Logo = () => {
  return (
    <>
      <a href="https://vschool.io/">
        {/* <Image
          src="/VS_Logo.png"
          alt="No Image"
          className="logo-img"
          layout="intrinsic"
          width="10rem"
          height="auto"
        /> */}
        <p className="logo-text">V School Progress Tracker</p>
      </a>
    </>
  );
};
