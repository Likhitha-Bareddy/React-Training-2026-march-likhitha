 'use client'
 import { ChangeEvent, useState, useRef, useEffect, useEffectEvent} from "react"

//<Counter count={5} />

type CounterProps = {
    count: number;
}



export default function Counter(props: CounterProps) {
    // let count = props.count;
    const [count, setCount] = useState(props.count);
    const inputRef = useRef<HTMLInputElement>(null);
    // let clickCount = 0
    const clickCount = useRef(0);

    useEffect(() => {
        console.log("count updated", count);
    }, [count]);

    const logHandler = useEffectEvent(() => {
        console.log("count", count);
    })

    useEffect(() => {
        const handler = setInterval(
            () => {
                // console.log("count is ", count);
                logHandler();
            }, 5000 )

          return () => {
            clearInterval(handler);
          }  
      
    }, []);

    // const increment = () => {
    // setCount(count + 1);
    // setCount(count => count + 1);
//   };

    function inc(){
    console.log("incrementing counter..")
    // setCount(count + 1);
    // console.log("count", count);
    // setCount(count + 1);
     setCount((prevCount) => prevCount + 1);
    //  setCount((prevCount) => prevCount + 1);
    clickCount.current ++;
    console.log("clickCount", clickCount);


   }
    
   function dec(){
    console.log("decrementing counter..")
    setCount(count - 1);
    console.log("count", count) 
   }

   function handleChange(evt: ChangeEvent<HTMLInputElement>){
    setCount(Number(evt.target.value))
   }

    return (
        <div>
            <h4>Count: {count}</h4>
            <div>
                <button onClick= {inc}>++</button> &nbsp;
                <button onClick={() => setCount(count -1)}>--</button>
            </div>
            <br/>
            <div>
                <input type="number" value = {count} onChange={handleChange}/>
            </div>

            &nbsp;
             
            <div>
                <input ref={inputRef} type="number" placeholder="Enter the new count"/>&nbsp;
                <button onClick={() => setCount(inputRef.current?.valueAsNumber || 0)}>Update Count</button> 
            </div>

        </div>
    )
}