import {useEffect, useRef} from "react";

export const useObserver = (ref, cabLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()

        let cb = function (entries, observer) {
            if(entries[0].isIntersecting && cabLoad){
                callback()
            }
        }

        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}