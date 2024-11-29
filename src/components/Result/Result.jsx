import React from 'react';
import './Result.css';
import arrow_left from "../../assests/ArrowLeft.png";
import indicator from "../../assests/1.svg";
import blur from "../../assests/blur.png";
import human from "../../assests/man-woman.svg";
import { Link } from 'react-router-dom';

const Result = ({percentage}) => {
    // const percentage = 80; // Progress percentage
    const radius = 120; // Radius for the larger circle
    const strokeWidth = 40; // Increased Stroke width for the progress bar
    const circumference = 2 * Math.PI * radius; // Circumference of the circle

    // Calculate stroke offset based on the percentage
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="result_container">
            <div className='res_link'>
                <p>Home</p>
                <p>/</p>
                <Link to="/">IVF Success Rate Calculator</Link>
                <p>/</p>
                <Link to="/result" className='link_text'>Result</Link>
            </div>

            <div className='responsive'>
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
                        style={{ transform: 'rotate(-90deg)' }} // Start progress from the top
                    >
                        {/* Background circle */}
                        <circle
                            cx="150"
                            cy="150"
                            r={radius}
                            fill="none"
                            stroke="rgba(91, 212, 137, 0.3)" // Light green background
                            strokeWidth={strokeWidth}
                        />
                        {/* Progress circle */}
                        <circle
                            cx="150"
                            cy="150"
                            r={radius}
                            fill="none"
                            stroke="rgba(91, 212, 137, 1)" // Dark green for progress
                            strokeWidth={strokeWidth}
                            strokeLinecap="round" // Rounded edges
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            style={{
                                transition: 'stroke-dashoffset 0.5s ease-in-out', // Smooth animation
                            }}
                        />
                        {/* Inner background circle */}
                        <circle
                            cx="150"
                            cy="150"
                            r={radius - strokeWidth / 2} // Adjust radius to touch the circumference
                            fill="#032706" // Dark green background for the inner circle
                        />
                        {/* Group for fixing text rotation */}
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
                </div>
            </div>
        </div>
    );
};

export default Result;
