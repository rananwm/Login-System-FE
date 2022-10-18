import { useNavigate } from 'react-router-dom';

export const Navigator = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();    
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};