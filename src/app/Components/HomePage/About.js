"use client";

import Image from 'next/image';
import About1 from "@/../public/cta-bg.jpg";
import smile from "@/../public/smile.png";
import diary from "@/../public/diary.png";
import headset from "@/../public/headset.png";
import people from "@/../public/people.png";
import { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';

export default function About() {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <section id="stats" className=" section py-12">
      <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image src={About1} alt="Stats Image" className="img-fluid" width={500} height={500} />
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="stats-item flex items-center">
              <Image src={smile} alt="Stats Image" className="img-fluid pb-8" width={50} height={50} />
                <div className="ml-4">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                  <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                </div>
              </div>

              <div className="stats-item flex items-center">
              <Image src={diary} alt="Stats Image" className="img-fluid pb-8" width={50} height={50} />
                <div className="ml-4">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                  <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                </div>
              </div>

              <div className="stats-item flex items-center">
              <Image src={headset} alt="Stats Image" className="img-fluid pb-8" width={50} height={50} />
                <div className="ml-4">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                  <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                </div>
              </div>

              <div className="stats-item flex items-center">
              <Image src={people} alt="Stats Image" className="img-fluid pb-8" width={50} height={50} />
                <div className="ml-4">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter text-3xl font-bold"></span>
                  <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}