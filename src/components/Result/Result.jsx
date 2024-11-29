import React from 'react';
import './Result.css';
import arrow_left from "../../assests/ArrowLeft.png";
import indicator from "../../assests/1.svg";
import blur from "../../assests/Ellipse 626.svg";
import human from "../../assests/man-woman.svg";
import { Link } from 'react-router-dom';
import bottom from "../../assests/bottom.svg"

const Result = ({percentage}) => {
    
    const radius = 120; 
    const strokeWidth = 40; 
    const circumference = 2 * Math.PI * radius; 

    
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="result_container">
            <div className='res_link'>
                <Link to='/'>Home</Link>
                <p>/</p>
                <Link to="/" className="link_sub">IVF Success Rate Calculator</Link>
                <p>/</p>
                <Link to="/result" className='link_text'>Result</Link>
            </div>

            <div className='responsive1'>
                <Link to='/' className='responsive_link1'> {`← `} IVF Success Rate Calculator</Link>
            </div>

            <div className='section2_res'>
                <img src={indicator} className='img_res' />
                <p className='heading_res'>Your estimated IVF Success Rate is</p>
            </div>

            <div className="bottom_section">
                <div className="flex_res_item1">
                    <svg
                        width="300"
                        height="300"
                        viewBox="0 0 300 300"
                        style={{ transform: 'rotate(-90deg)' }} 
                    >
                       
                        <circle
                            cx="150"
                            cy="150"
                            r={radius}
                            fill="none"
                            stroke="rgba(91, 212, 137, 0.3)" 
                            strokeWidth={strokeWidth}
                        />
                     
                        <circle
                            cx="150"
                            cy="150"
                            r={radius}
                            fill="none"
                            stroke="rgba(91, 212, 137, 1)"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round" 
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            style={{
                                transition: 'stroke-dashoffset 0.5s ease-in-out',
                            }}
                        />
                       
                        <circle
                            cx="150"
                            cy="150"
                            r={radius - strokeWidth / 2} 
                            fill="#032706" 
                        />
                        
                        <g style={{ transform: 'rotate(90deg)', transformOrigin: '150px 150px' }}>
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                    fill: 'white',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`${percentage}%`}
                            </text>
                        </g>
                    </svg>
                    <p className='subheading_res'>With 1 IVF Cycle</p>
                </div>
                <div className='flex_res_item2'>
                    <img src={blur} className='image_blur' />
                    <img src={human} className='image_right' />
                    <div className='bottom_container'>
            <img src={bottom} className='bottom_blur' />
            <button className='bottom_btn'>Start private consultation {' →'}</button>
            </div>
                </div>
              
                
            </div>

            
         
        </div>
    );
};

export default Result;
