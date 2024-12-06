
import { toast } from 'react-toastify';
import './useToast.css'

const useToast = () => {
  const notify = (message, options = {}) => {
    const { type = 'success', position = 'top-center' } = options;

    // const toastOptions = {
    //   position,
    //   className: type === 'success' ? 'toast-success' : 'toast-warning',
    // };

    //toast(message, toastOptions);
    if (type ==='success'){
      toast.success(message);
    }
    else if (type==='warning'){
      toast.warning(message);
    }
    else if(type==='error'){
      toast.error(message);
    }
    else{
      toast(message);
    }
    
  };

  return { notify };
};

export default useToast;
