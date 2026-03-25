import { useEffect } from "react";

export function useTitle(title: string){

    useEffect(() =>{
        const orignalTitle = document.title;
        document.title += " " + title;
        return () => {
            document.title = orignalTitle;
        }
    }, [])

}