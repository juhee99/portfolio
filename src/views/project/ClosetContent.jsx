import React from 'react';

function closetContent() {
  return (
    <article>
      <p className="card-title mb-5 text-black">
        내 손 안에 AI 옷장, The Closet
      </p>
      <p className="font-bold">
        The Closet 는 AI를 통해 자동으로 의료를 분류하여 카테고리별로 옷장을
        관리 할 수 있도록 돕는 웹서비스 입니다. 옷장의 옷을 한번에 파악하고 언제
        어디서든 옷장을 볼 수 있습니다.
      </p>
      <ul className="list-disc card-body">
        <li>DB 설계 및 백엔드 API 설계 담당</li>
        <li>Spring Security를 활용하여 로그인,로그아웃 담당</li>
        <li>최초의 웹 개발 경험 및 AI 연동</li>
        <li>최초의 Git 헙업 경험</li>
        <li>주제에 대한 아이디어를 높게 평가 받아 논문 게제</li>
      </ul>
    </article>
  );
}

export default closetContent;
