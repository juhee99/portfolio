import React from 'react';

function InLabContent() {
  return (
    <article>
      <p className="card-title mb-5">
        면접관을 위한 기술 면접 플랫폼
        <span className="text-indigo-700">inlab</span>
      </p>
      <p className="font-bold">
        InLab은 기술 면접에 대한 템플릿과 질문을 생성하고, AI로 부터 평가를 보조
        받을 수 있는 기술 면접 토탈 서비스 입니다. 공정하고 형평성있는 면접을
        통해 기업에 특화된 인재를 착출할 수 있도록 돕기위한 서비스 입니다.
      </p>
      <ul className="list-disc card-body">
        <li>직무 관리, 면접 관리, 유형 관리 Rest API 설계</li>
        <li>JPA, QueryDSL를 활용하여 동적 쿼리 사용 및 권한 처리</li>
        <li>COUNT 쿼리에서 EXIST 쿼리로 변경하여 성능 개선</li>
        <li>MockMvC를 활용하여 TDD 방식으로 컨트롤러 테스트 수행</li>
        <li>Vue, Pinia를 활용하여 전역상태 관리</li>
      </ul>
    </article>
  );
}

export default InLabContent;
