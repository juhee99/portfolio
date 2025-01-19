import React from 'react';

function RefreshContent() {
  return (
    <article>
      <p className="card-title mb-5">
        간편한 연차 신청 시스템
        <span className="text-blue-900">
          RE<span className="text-yellow-500">fresh</span>
        </span>
      </p>
      <p className="font-bold">
        Refresh는 연차 신청과 관리를 간소화하고 문서의 디지털화를 통해 팀원간의
        일정을 공유 할 수 있는 연차 관리 시스템입니다. KOSA에서 같은 주제로 다른
        기술로 마이그레이션 경험과 풀 스택 경험을 쌓은 팀 프로젝트 입니다.
      </p>
      <ul className="list-disc card-body">
        <li>(v.1) SSR 방식으로 MyBatis, thymeleaf를 사용</li>
        <li>(v.2) CSR 방식으로 JPA, Vue3를 사용 </li>
        <li>마이그레이션 과정을 통해 JPA, MyBatis의 장.단점을 체감</li>
        <li>회고를 통해 요구사항을 구체화하여 프로젝트의 완성도를 높힘</li>
        <li>Junit5를 활용하여 Service 테스트 코드 작성</li>
      </ul>
    </article>
  );
}

export default RefreshContent;
