import React, { useEffect, useRef } from 'react';

export default function Advertising(props) {
  const { unit } = props;
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      // 광고 영역 초기화
      let ins = document.createElement('ins');
      ins.setAttribute('class', 'kakao_ad_area');
      ins.setAttribute('style', 'display:none;');
      ins.setAttribute('data-ad-unit', unit);
      ins.setAttribute('data-ad-width', '320');
      ins.setAttribute('data-ad-height', '100');

      // 광고 DOM 추가
      adRef.current.innerHTML = ''; // 중복 방지를 위해 기존 콘텐츠 제거
      adRef.current.appendChild(ins);

      // 스크립트 로드 또는 재초기화
      if (!window.KakaoAdFit) {
        let script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', '//t1.daumcdn.net/kas/static/ba.min.js');
        script.onload = () => {
          window.KakaoAdFit && window.KakaoAdFit.reload();
        };
        document.body.appendChild(script);
      } else {
        // 스크립트가 이미 로드된 경우 광고 재초기화
        window.KakaoAdFit.reload();
      }
    }
  }, [unit]);

  return <div className='mt-2 adfit' ref={adRef}></div>;
}
