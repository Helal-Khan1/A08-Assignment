
import NavBer from '../component/NavBer';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {


    return (
        <div className='     '>
            <NavBer></NavBer>
            <div className='flex-1 '>

                <Outlet  ></Outlet>

            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;