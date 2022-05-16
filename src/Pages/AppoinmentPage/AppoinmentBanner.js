import banner from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import homeBg from '../../assets/images/bg.png';


const AppoinmentBanner = ({selected, setSelected}) => {
    return (
        <div style={{backgroundImage:`url(${homeBg})`,backgroundSize:"cover",backgroundPosition:"center"}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-32 p-5">
                <img src={banner} className="w-full md:max-w-lg rounded-lg shadow-2xl" alt='Appoinment img' />
                <div>
                    <DayPicker 
                        className='shadow-md p-5 rounded-xl'
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
)};

export default AppoinmentBanner;