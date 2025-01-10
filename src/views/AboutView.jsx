import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBolt } from '@fortawesome/free-solid-svg-icons';

function AboutView() {
  return (
    <Element
      name="aboutMe"
      className="max-h-screen flex items-center justify-center bg-black text-white"
    >
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl mb-16 text-left text-white font-bold underline underline-offset-8 decoration-yellow-300">
          ABOUT ME
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start">
              <h3 className="text-2xl font-semibold text-yellow-400 md:w-1/4 mb-4 md:mb-0">
                <FontAwesomeIcon icon={faBolt} className="mr-2" />
                Just Do It!
              </h3>
              <p className="text-lg text-left md:w-3/4">
                자신감을 가지고 앞으로 나아갑니다. 어려운 문제에 봉착했을
                &ldquo;할 수 있다.&ldquo; 라는 마인드셋으로 해결책을 찾으며
                보람을 느낍니다. 자신감과 끈기를 바탕으로 성장하는 개발자가
                되겠습니다.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start">
              <h3 className="text-2xl font-semibold text-yellow-400 md:w-1/4 mb-4 md:mb-0">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Cooperation
              </h3>
              <p className="text-lg leading-relaxed text-left md:w-3/4">
                개인성장보다 공동성장을 목표로 합니다. 코드리뷰와 데일리
                스크럼을 통해 멤버들과 소통하고 지식을 공유하며 효율적인 코드
                작성을 지향합니다. 또한, 모든 사람은 소중하고 존중 받아야
                합니다. 존중과 배려를 바탕으로 협업을 더 가치 있게 만들어
                갑니다. 협업의 가치를 실천하여 같이 일하고 싶은 동료가
                되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default AboutView;
