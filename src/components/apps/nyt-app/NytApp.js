import React, {useState, useEffect} from 'react';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'Pym18SuPKG9X0EyCTidwOJgP5Fl28q5B';

const NytApp = () => {

  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [results, setResults] = useState([]);

  return (
    <div className="main">
      <div className="mainDiv">

      </div>
    </div>
  );
};

export default NytApp;