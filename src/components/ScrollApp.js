import React, {useEffect, useRef} from "react";
import '../StyleSheets/Scroll.css'

const scrollToRef = (ref) => window.scrollTo({left:0, top:ref.current.offsetTop + 140, behavior:'smooth'})
const useMountEffect = (fun) => useEffect(fun, [])

const ScrollDemo = () => {
    const myRef = useRef(null)
    useMountEffect(() => scrollToRef(myRef))
    return (
        <div className="Scroll">
            <div ref={myRef}>Scroll</div>
            <button onClick={() => scrollToRef(myRef)}>↓</button>
        </div>
    )
}

export default ScrollDemo;