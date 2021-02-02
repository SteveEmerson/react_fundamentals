import React, {useState, useEffect} from 'react';

 const Hooks = () => {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState({});

   const fetcher = () => {
    fetch(`https://swapi.dev/api/people/${query}`)
     .then(res => res.json())
     .then(json => {
       console.log(json);
       setResults(json);
     });
  }; 

   return(
     <div className="main">
       <div className="mainDiv">
         <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number"/>
         <button onClick={() => fetcher()}>Click for Character!</button>
         {results ? <h2>{results.name}</h2> : <div></div>}
       </div>
     </div>
   );
 };

 const Hooks2 = () => {
   const [results, queryNum, setQueryNum] = useNumHook('');
   const [titleNum, setTitleNum] = useTitleHook(0);

   return (
     <div className="main">
       <div className="mainDiv">
         <h3>Enter a number below to see a number fact.</h3>
         <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder='enter a number'/>
         {results ? <h2>{results}</h2> : <div></div>}

         <br/>

         <button onClick={() => setTitleNum(titleNum + 1)}>Click to Update Document Title</button>
       </div>
     </div>
   );
 };

 const useNumHook = (num) => {
   const [queryNum, setQueryNum] = useState(num);
   const [results, setResults] = useState('');

   useEffect( () => {
     if(queryNum !== ''){
       fetch(`http://numbersapi.com/${queryNum}`)
        .then(res => res.text())
        .then(json => {
          setResults(json);
          console.log(json)
        });
     }
   }, [queryNum]);

   return [results, queryNum, setQueryNum];
 }

 const useTitleHook = (num) => {
   const [titleNum, setTitleNum] = useState(num);

   useEffect( () => {
     if(titleNum !== 0){
       document.title = `You have clicked ${titleNum} times.`;
     }
   }, [titleNum]);

   return [titleNum, setTitleNum];
 }


 export default Hooks2;