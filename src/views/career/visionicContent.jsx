import React from 'react';

function VisionicContent() {
  return (
    <div className=" p-6 w-full max-w-5xl flex flex-col md:flex-row text-black space-y-6">
      <div className="flex-shrink-0 mr-8 w-1/4">
        <div className="flex items-center justify-center bg-white w-full aspect-square rounded-full overflow-hidden border border-base-300">
          <img
            src={`${process.env.PUBLIC_URL}/img/visionic.png`}
            alt="프로필 사진"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-px bg-base-300 mx-4" />
      <div className="flex-grow w-3/4 space-y-5">
        <div className="pb-5">
          <h2 className="text-2xl font-semibold ">(주) 비젼아이씨</h2>
          <p className="text-gray-600">2023.10 ~ 2025.01</p>
          <p className="text-lg mb-6">
            IBM Maximo를 활용하여 고객사에 최적의
            <strong> 설비관리 솔루션</strong> 을 공급합니다.
          </p>
          <p className="text-lg">
            Spring, React를 활용한 Full Stack 포지션으로 신규 서비스 개발을
            담당하고 있습니다.
          </p>
        </div>
        <div className="h-px bg-base-300" />
        <div>
          <div className="flex space-x-2 text-lg items-center">
            <div className=" w-1.5 h-8 bg-black" />
            <p>대한송유관공사</p>
          </div>
          <p className="text-gray-500">2024.01 ~ 2024.12</p>
          <ul className="list-disc list-inside mt-5">
            <li>대한송유관공사의 설비관리 및 monitoring 위한 웹 포탈</li>
            <li>React 기반의 컴포넌트 아키텍쳐 설계 및 유지보수</li>
            <li>시스템 모듈화를 통해 64개의 Application 공통화 </li>
            <li>Chart.js를 통한 권한별 대시보드 및 보고서 APP 개발 </li>
            <li>다중 DB 환경에서 인터페이스 개발 및 연동</li>
            <li>Git과 GitLab으로 협업 및 코드리뷰 문화 도입 </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisionicContent;
