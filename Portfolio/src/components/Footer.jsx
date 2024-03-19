import React from 'react';
import { SocialIcon } from 'react-social-icons'

export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="bg-primary text-center text-white">
            <div className="container px-6 pt-6 mx-auto">
                
                <SocialIcon style={{height: 30, width: 30, marginBottom:10,marginRight:10}}url='https://www.linkedin.com/in/sagnik-bhattacharjee?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
                <SocialIcon style={{height: 30, width: 30, marginBottom:10}}url='https://twitter.com/bhattsagnik'/>
                <div className=" border border-[#915EFF] text-[#915EFF] border-solid inline p-2 m-5 rounded-3xl hover:bg-[#915EFF] hover:text-white cursor-pointer" onClick={()=>{window.open("https://drive.google.com/file/d/1Q_VSkKK1i2szOlCyBXr_VSwkyvF73Hiz/view?usp=sharing")
            console.log('clicked')}}>Curriculum Vitae</div>
                <SocialIcon style={{height: 30, width: 30, marginBottom:10,marginRight:10}}url='https://www.instagram.com/_s.a.g.n.i.k_/'/>
                <SocialIcon style={{height: 30, width: 30, marginBottom:10,marginRight:10}}url='https://github.com/Nick4dawin'/>
                
            </div>
            <div
                className="p-4 text-center text-[12px] bg-black bg-opacity-20">
                {year} ©  | 
                <a className="text-white "
                > | Sagnik Bhattacharjee</a>
            </div>
        </footer>
    );
}