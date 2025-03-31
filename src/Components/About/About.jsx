
import React from 'react';
import MainImg from '../../assets/aboutusMainImg.svg';
import BackgroundImg from '../../assets/aboutusImg4.svg';

const AboutUsPage = () => {
    return (
        <div className="w-full relative bg-[#faf3ec] h-screen overflow-hidden text-left text-[20px] text-[#4b2c5e] font-georgia">
            <div className="relative top-[300px] -left-[23px] border-[5px] border-[#f3e2c8] box-border w-[101vw] h-[400px] overflow-hidden font-helvetica">
                <div className="absolute top-[40px] left-1/2 translate-x-[9px] inline-block w-[600px] left-[850px]">
                    <p className="m-0">
                        <span className="font-helvetica">{`Our aim is to provide `}</span>
                        <b>expert legal guidance, advocate for victims' rights,</b>
                        <span className="font-helvetica">{` and `}</span>
                        <b className="font-helvetica">raise awareness</b>
                        <span className="font-helvetica"> about the devastating impact of mesothelioma.</span>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                        <b className="font-helvetica">{`We believe that no one should face this battle alone. `}</b>
                        <span>{`Through dedicated legal support, we help victims pursue the compensation they deserve while working to hold negligent parties accountable. `}</span>
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                        <span>{`Beyond legal assistance, we strive to `}</span>
                        <b className="font-helvetica">educate the public</b>
                        <span className="font-helvetica">{`, `}</span>
                        <b className="font-helvetica">promote safety</b>
                        <span className="font-helvetica">{`, and `}</span>
                        <b className="font-helvetica">prevent future asbestos-related harm.</b>
                    </p>
                </div>
                <div className="absolute top-1/2 -translate-y-[130.5px] right-[723.5px] border-r-[5px] border-[#f3e2c8] box-border w-[5px] h-[260px]" />
            </div>
            
            <img 
                className="absolute h-auto w-[30.21%] top-[5vh] right-[45.42%] left-[24.37%] max-w-full overflow-hidden object-contain" 
                alt="" 
                src={BackgroundImg} 
            />
            
            <img 
                className="absolute top-[30px] left-[10vw] h-auto max-h-[95vh]" 
                alt="" 
                src={MainImg} 
            />
            
            <div className="absolute top-[10vh] left-[623px] rounded-[20px] w-[740px] h-[209px] overflow-hidden text-[80px]">
                <i className="absolute top-[24px] left-1/2 -translate-x-[288px] w-[543px] font-['Georgia'] italic">Who we are</i>
                <div className="absolute top-[139px] left-1/2 -translate-x-[288px] text-[20px] inline-block w-[543px] font-['Helvetica'] w-[625px]">
                    <span>{`At Fight for Mesothelioma, we are committed to standing with individuals and families affected by `}</span>
                    <b>asbestos exposure.</b>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;




