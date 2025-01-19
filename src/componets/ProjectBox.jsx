import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './Modal';

function CustomNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 right-1  z-10 btn btn-ghost btn-circle"
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-blue-700 text-xl"
      />
    </button>
  );
}
function CustomPrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 left-1 z-20 btn btn-ghost btn-circle"
      style={{ pointerEvents: 'auto' }}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="text-blue-700 text-xl" />
    </button>
  );
}
function ProjectBox({ content }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: false,
  };

  const handleOpenModal = modalName => {
    const modal = document.getElementById(modalName);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 relative">
      <h3 className="text-center text-2xl font-semibold text-gray-800 ">
        {content.title}
      </h3>
      <p className="text-center text-sm text-gray-500 mb-6">{content.period}</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
        <div className="w-full md:w-1/2 pb-6 relative">
          <Slider {...settings}>
            {content.imgList.map((item, index) => (
              <div key={item.key}>
                <img
                  alt={`projectImg${index}`}
                  src={`${process.env.PUBLIC_URL}${item.src}`}
                  className="items-center object-cover w-full h-full max-h-[400px]"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-gray-600 text-sm">{content.content}</div>
          {content.modalName && (
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() => handleOpenModal(content.modalName)}
                className="btn btn-outline btn-sm "
              >
                <FontAwesomeIcon
                  icon={faReadme}
                  className="h-4 animate-pulse"
                />
                MORE
              </button>
              <Modal
                modalName={content.modalName}
                markdown={content.markdown}
              />
            </div>
          )}
          <div className="divider" />
          <div className="flex w-full space-x-2">
            {content.skills.map(skill => (
              <div className="text-xs px-2 py-1 text-blue-600 border rounded-lg shadow">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
