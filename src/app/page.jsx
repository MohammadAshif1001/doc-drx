import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import illusImg from '../../assets/vit2.jpg';

const Home = () => {
  return (
    <div className="main flex flex-col md:flex-row">
      <div className="illus px-4 md:px-10 w-full md:w-[50%]">
        <Image
          src={illusImg}
          className="pt-8 remove-background"
          alt="Illustration"
          width={700}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="Intro px-4 flex md:px-10 py-4 md:py-10 flex-col w-full md:w-[50%]">
        <div className="head1 text-4xl md:text-7xl font-medium">
          <h1>GET</h1>
        </div>
        <div className="head2 text-5xl md:text-8xl font-bold">
          <h2>WELL</h2>
        </div>
        <div className="head3 text-6xl md:text-9xl font-bold ">
          <h3>SOONER</h3>
        </div>
        <div className={`text-sm md:text-base py-5 w-full md:w-[400px]`}>
          {/* Reduced the width of this element */}
          <p className='font-medium'>
            Discover Precision Medicine Recommendations with Our Advanced Web
            App. Experience personalized medication guidance aligned with your
            unique health profile, providing effective solutions tailored just
            for you.
          </p>
        </div>
        <div className="link py-3">
          <Link href="/sign-up">
            <button className='bg-black text-white px-4 py-3 rounded-[10px] font-bold'>Get started now !! </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
