import React from 'react';

function soynetContent() {
  return (
    <div className=" p-6 w-full max-w-5xl flex flex-col md:flex-row text-black space-y-6">
      <div className="flex-shrink-0 mr-8 w-1/4">
        <div className="flex items-center justify-center bg-white w-full aspect-square rounded-full overflow-hidden border border-base-300">
          <img
            src={`${process.env.PUBLIC_URL}/img/soynet.svg`}
            alt="프로필 사진"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-px bg-base-300 mx-4" />
      <div className="flex-grow w-3/4 space-y-5">
        <div className="pb-5">
          <h2 className="text-2xl font-semibold ">(주) 소이넷</h2>
          <p className="text-gray-600">2022.09 ~ 2023.02 (6 개월)</p>
          <p className="text-lg mb-6">
            인공지능 실행 가속기 개발과 이를 기반한 AI 서비스 제공하는
            스타트업입니다.
          </p>
          <p className="text-lg">
            웹 개발 부서의 인턴으로 React, Express 기반의 Full Stack 포지션으로
            근무하였습니다.
          </p>
        </div>
        <div className="h-px bg-base-300" />
        <div>
          <div className="flex space-x-2 text-lg items-center">
            <div className=" w-1.5 h-8 bg-black" />
            <p>라이선스 시스템</p>
          </div>
          <p className="text-gray-500">2022.11 ~ 2023.02</p>
          <ul className="list-disc list-inside mt-5">
            <li>AI 모델 제품 판매를 위한 라이선스 발급 및 관리 시스템</li>
            <li>Context API 를 통한 로그인ㆍ로그아웃 구현</li>
            <li>온ㆍ오프라인 별 라이선스 발급 프로세스 설계 참여</li>
          </ul>
        </div>
        <div>
          <div className="flex space-x-2 text-lg items-center">
            <div className=" w-1.5 h-8 bg-black" />
            <p>MLOPS Mobile</p>
          </div>
          <p className="text-gray-500">2022.10 ~ 2023.11</p>
          <ul className="list-disc list-inside mt-5">
            <li>
              웹 기반의 MLOPS을 축소하여 React-Native를 활용하여 모바일로
              마이그레이션
            </li>
            <li>Chart.js를 활용하여 대시보드 및 CPU 성능 시각화</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default soynetContent;
