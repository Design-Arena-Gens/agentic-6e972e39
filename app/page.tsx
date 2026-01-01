'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const thisWeekRef = useRef(null);
  const dunkPickRef = useRef(null);
  const accessoriesRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Hero animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power4.out',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.3,
      ease: 'power4.out',
    });

    // This Week's Wigs animations
    gsap.from('.week-title', {
      scrollTrigger: {
        trigger: '.week-title',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.5,
      rotation: -10,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    });

    gsap.from('.wig-card', {
      scrollTrigger: {
        trigger: '.wig-card',
        start: 'top 85%',
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Dunk's Pick animations
    gsap.from('.dunk-title', {
      scrollTrigger: {
        trigger: '.dunk-title',
        start: 'top 80%',
      },
      opacity: 0,
      x: -200,
      rotation: -20,
      duration: 1.5,
      ease: 'back.out(1.7)',
    });

    gsap.from('.dunk-card', {
      scrollTrigger: {
        trigger: '.dunk-card',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0,
      rotation: 360,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
    });

    // Accessories animations
    gsap.from('.accessories-title', {
      scrollTrigger: {
        trigger: '.accessories-title',
        start: 'top 80%',
      },
      opacity: 0,
      y: -100,
      duration: 1.2,
      ease: 'bounce.out',
    });

    gsap.from('.accessory-item', {
      scrollTrigger: {
        trigger: '.accessory-item',
        start: 'top 85%',
      },
      opacity: 0,
      scale: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const wigs = [
    {
      name: 'The Disco Diva',
      price: '$89.99',
      description: 'Long flowing locks with maximum volume',
      color: 'retro-orange',
    },
    {
      name: 'Afro Supreme',
      price: '$119.99',
      description: 'Classic 70s afro with attitude',
      color: 'retro-yellow',
    },
    {
      name: 'Shag Sensation',
      price: '$94.99',
      description: 'Feathered perfection for the disco floor',
      color: 'retro-purple',
    },
  ];

  const accessories = [
    { name: 'Wig Cap', price: '$5.99' },
    { name: 'Wig Spray', price: '$12.99' },
    { name: 'Styling Comb', price: '$8.99' },
    { name: 'Wig Stand', price: '$15.99' },
    { name: 'Adhesive Kit', price: '$9.99' },
    { name: 'Cleaning Solution', price: '$11.99' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://iili.io/fT6gj29.png"
            alt="Morries Wig Shop"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="hero-title retro-text text-7xl md:text-9xl text-white mb-6 wiggle">
            MORRIES
          </h1>
          <h2 className="hero-title retro-text text-6xl md:text-8xl text-retro-yellow mb-8">
            WIG SHOP
          </h2>
          <p className="hero-subtitle funky-text text-3xl md:text-5xl text-retro-cream">
            GROOVY WIGS SINCE THE 70s
          </p>
          <div className="hero-subtitle mt-12">
            <button className="disco-gradient text-white font-bold text-2xl px-12 py-6 rounded-full retro-border hover:scale-110 transition-transform duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-retro-cream text-4xl">↓</div>
        </div>
      </section>

      {/* This Week's Wigs */}
      <section ref={thisWeekRef} className="min-h-screen py-20 px-4 md:px-12">
        <h2 className="week-title retro-text text-6xl md:text-8xl text-center text-retro-cream mb-16">
          THIS WEEK&apos;S WIGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {wigs.map((wig, index) => (
            <div
              key={index}
              className="wig-card retro-card p-8 float-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="w-full h-64 bg-gradient-to-br from-retro-orange to-retro-purple rounded-lg mb-6 flex items-center justify-center">
                <div className="text-8xl">💇</div>
              </div>
              <h3 className="funky-text text-3xl text-retro-brown mb-3">
                {wig.name}
              </h3>
              <p className="text-xl text-gray-700 mb-4">{wig.description}</p>
              <p className="retro-text text-4xl text-retro-orange">{wig.price}</p>
              <button className="mt-6 w-full bg-retro-orange text-white font-bold text-xl py-4 rounded-lg hover:bg-retro-brown transition-colors duration-300">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Dunk's Pick of the Week */}
      <section ref={dunkPickRef} className="min-h-screen py-20 px-4 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="dunk-title retro-text text-6xl md:text-8xl text-center text-retro-yellow mb-16">
            DUNK&apos;S PICK OF THE WEEK
          </h2>

          <div className="dunk-card retro-card p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-96 bg-gradient-to-br from-retro-teal to-retro-purple rounded-lg flex items-center justify-center groovy-shadow">
                <div className="text-9xl">🎸</div>
              </div>

              <div>
                <div className="inline-block bg-retro-orange text-white px-6 py-3 rounded-full mb-6">
                  <span className="funky-text text-2xl">⭐ FEATURED ⭐</span>
                </div>
                <h3 className="funky-text text-5xl text-retro-brown mb-6">
                  The Rockstar Special
                </h3>
                <p className="text-2xl text-gray-700 mb-6">
                  Dunk&apos;s personal favorite! This wild and free-spirited wig captures the essence of 70s rock and roll. Perfect for concerts, parties, or just living your best groovy life.
                </p>
                <p className="retro-text text-5xl text-retro-orange mb-8">$149.99</p>
                <button className="w-full disco-gradient text-white font-bold text-2xl py-6 rounded-lg retro-border hover:scale-105 transition-transform duration-300">
                  GET DUNK&apos;S PICK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section ref={accessoriesRef} className="min-h-screen py-20 px-4 md:px-12">
        <h2 className="accessories-title retro-text text-6xl md:text-8xl text-center text-retro-cream mb-16">
          ACCESSORIES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="accessory-item retro-card p-6 text-center"
            >
              <div className="text-6xl mb-4">✨</div>
              <h3 className="funky-text text-xl text-retro-brown mb-2">
                {item.name}
              </h3>
              <p className="retro-text text-2xl text-retro-orange mb-4">
                {item.price}
              </p>
              <button className="w-full bg-retro-teal text-white font-bold py-3 rounded-lg hover:bg-retro-purple transition-colors duration-300">
                ADD
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="funky-text text-3xl text-retro-cream mb-8">
            STAY GROOVY, BABY! ✌️
          </p>
          <p className="text-xl text-retro-yellow">
            © 2026 Morries Wig Shop - All Rights Reserved
          </p>
        </div>
      </section>
    </main>
  );
}
