import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UsePageTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Blood Campus | ${title} `;
  }, [title, location]);
};

export default UsePageTitle;