import React, {useEffect, useRef} from "react";
import '../StyleSheets/Scroll.css'

function ScrollApp(props) {
    const scrollToRef = (ref) => window.scrollTo({left: 0, top: ref.current.offsetTop + 140, behavior: 'smooth'})
    const useMountEffect = (fun) => useEffect(fun, [])
    const myRef = useRef(null)
    useMountEffect(() => scrollToRef(myRef))
    return (
        <div className="Scroll" id={props.id} onClick={() => scrollToRef(myRef)}>
            <div ref={myRef}>Scroll<p>↓</p></div>

        </div>
    );
}

export default ScrollApp;