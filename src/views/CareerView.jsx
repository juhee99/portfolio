import React from 'react';
import { Element } from 'react-scroll';
import VisionicContent from './career/visionicContent';
import SoynetContent from './career/soynetContent';

function CareerView() {
  return (
    <Element
      name="career"
      className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-gray-100 text-gray-50 border-t border-base-300"
    >
      <section className="container max-w-6xl mx-auto p-6 space-y-12">
        <h2 className="max-w-7xl text-4xl mb-14 text-left font-bold underline underline-offset-8 text-blue-800">
          CAREER
        </h2>
        <div className="gap-5">
          <VisionicContent />
          <SoynetContent />
        </div>
      </section>
    </Element>
  );
}

export default CareerView;
