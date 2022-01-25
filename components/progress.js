import { useRef, useLayoutEffect } from "react";

export default function Progress() {
  const progressRef = useRef(null)

  useLayoutEffect(() => {
    if (!progressRef.current) {
      return;
    }

    function getscrollpercent() {
      return parseInt(((100 / (document.documentElement.scrollHeight - window.innerHeight)) * window.pageYOffset) * 10, 10);
    }

    function setProgressValue() {
      progressRef.current.value = getscrollpercent();
    }

    window.addEventListener('scroll', setProgressValue);

    return () => {
      window.removeEventListener('scroll', setProgressValue);
    }
	}, []);

  return (
    <progress ref={progressRef} className="progress" min="0" max="1000" aria-hidden="true"></progress>
  )
}