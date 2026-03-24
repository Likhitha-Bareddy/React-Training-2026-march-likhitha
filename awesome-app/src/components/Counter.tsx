 'use client'
 import { ChangeEvent, useState, useRef, useEffect} from "react"

//<Counter count={5} />

type CounterProps = {
    count: number;
}



export default function Counter(props: CounterProps) {
    // let count = props.count;
    const [count, setCount] = useState(props.count);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

    }, [count]);

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