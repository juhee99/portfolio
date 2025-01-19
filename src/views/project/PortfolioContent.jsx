import React from 'react';

function PortfolioContent() {
  return (
    <article>
      <p className="card-title mb-5 text-black">
        저만의 개성을 표현한 PORTFOLIO
      </p>
      <p className="font-bold">
        현재 보고 계시는 포토폴리오 프로젝트 입니다. 웹 개발자로 저만의
        포트폴리오 사이트를 만들고 싶어서 제작하게 되었습니다. 별명이
        노란콩🐥이라 노란색으로 컨셉을 잡았고, 노란색이 잘보이도록 검은색과
        매치했습니다.
      </p>
      <ul className="list-disc card-body">
        <li>react-markdown 를 활용하여 markdown 적용</li>
        <li>브라우저 크기에 따른 반응형 디자인 적용</li>
        <li>무한 스크롤 형태의 웹사이트</li>
      </ul>
    </article>
  );
}

export default PortfolioContent;
