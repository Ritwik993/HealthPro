import React, { useState } from 'react';
import './Calculator.css';
import arrow_left from  "../../assests/ArrowLeft.png"
import { Link } from 'react-router-dom';


const Calculator = ({setPercentage}) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [icsiValue, setIcsValue] = useState("");
    const [pgtValue, setPgtValue] = useState("");


    const [conditions, setConditions] = useState({
        PCOS: false,
        Endometriosis: false,
        LowOvarianReserve: false,
        MaleFactorInfertility: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setConditions({ ...conditions, [name]: checked });
    };


    const handleSlideChange = (e) => {
        setSliderValue(parseInt(e.target.value, 10));
    };

    const handleAgeChange = (e) => {
        setAgeRange(e.target.value);
    };

    const [ageRange, setAgeRange] = useState("");
    const [successRate, setSuccessRate] = useState(null);
    const calculateSuccessRate = () => {
        let rate = 50;
        // Age range impact
        switch (ageRange) {
            case "under30": rate += 20; break;
            case "30to34": rate += 15; break;
            case "35to37": rate += 10; break;
            case "38to40": rate -= 5; break;
            case "41to43": rate -= 15; break;
            case "above43": rate -= 25; break;
            default: break;
        }

        // Number of IVF cycles impact
        rate += sliderValue * 0.5;

        // Previous procedures impact
        if (icsiValue === "yes") rate += 5;
        if (pgtValue === "yes") rate += 10;

        // Medical conditions impact
        if (conditions.PCOS) rate -= 5;
        if (conditions.Endometriosis) rate -= 10;
        if (conditions.LowOvarianReserve) rate -= 15;
        if (conditions.MaleFactorInfertility) rate -= 10;

        // Clamp the rate between 0 and 100
        rate = Math.max(0, Math.min(100, rate));
        setSuccessRate(rate.toFixed(2)); 
        setPercentage(rate.toFixed(2));
    };  

    return (
        <div className='calculator_container'>
            <div className='calc_link'>
                <Link to='/'>Home</Link>
                <p>/</p>
                <Link to="/" className='link_text'>IVF Success Rate Calculator</Link>
            </div>

            <div className='responsive'>
                <img src={arrow_left} className='image_arrow'/>
                <Link to="/" className='responsive_link'> IVF Success Rate Calculator</Link>
            </div>

            <div className='calc'>
                <p className='calc_heading'>Which age range applies to you?</p>
                <div>
                    <div className="options_age">
                        <label className="radio-option">
                            <input type="radio" name="age" value="under30" className='input_option' onChange={handleAgeChange} />
                            <span className='span-text'>Under 30</span>
                        </label>
                        <label className='radio-option'>
                            <input type="radio" name="age" value="30to34"    onChange={handleAgeChange} />
                            <span className='span-text'>Between 30 - 34</span>
                        </label>
                        <label className="radio-option">
                            <input type="radio" name="age" value="35to37"    onChange={handleAgeChange}/>
                            <span className='span-text'>Between 35 - 37</span>
                        </label>
                    </div>
                    <div className="options_age">
                        <label className="radio-option">
                            <input type="radio" name="age" value="38to40"    onChange={handleAgeChange} />
                            <span className='span-text'>Between 38 - 40</span>
                        </label>
                        <label className="radio-option">
                            <input type="radio" name="age" value="41to43"    onChange={handleAgeChange}/>
                            <span className='span-text'>Between 41 - 43</span>
                        </label>
                        <label className="radio-option">
                            <input type="radio" name="age" value="above43"    onChange={handleAgeChange}/>
                            <span className='span-text'>Above 43</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='num'>
                <h1 className="num_heading">Number of IVF Cycles?</h1>
                <div className='range_container'>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={sliderValue}
                        onChange={handleSlideChange}
                        id="slider"
                    />
                    <div
                        id="selectValue"
                        style={{
                            left: `${sliderValue}%`, 
                        }}
                    >
                        {sliderValue}
                    </div>
                    <div
                        id="progressBar"
                        style={{
                            width: `${sliderValue}%`, 
                        }}
                    />
                </div>
            </div>

            <div className="sectionthree">
                <p className='heading3'>Have you undergone these procedures before?</p>
                <div className="option3">
                    <div className="radio-container">
                        <div className="radio-group">
                            <label className="radio-label">ICSI Procedure:</label>
                            <div className="radio-options">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="icsi"
                                        value="yes"
                                        checked={icsiValue === "yes"}
                                        onChange={(e) => setIcsValue(e.target.value)}
                                    />
                                    Yes
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="icsi"
                                        value="no"
                                        checked={icsiValue === "no"}
                                        onChange={(e) => setIcsValue(e.target.value)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="radio-group">
                            <label className="radio-label">PGT Testing:</label>
                            <div className="radio-options">
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="pgt"
                                        value="yes"
                                        checked={pgtValue === "yes"}
                                        onChange={(e) => setPgtValue(e.target.value)}
                                    />
                                    Yes
                                </label>
                                <label className="radio-option">
                                    <input
                                        type="radio"
                                        name="pgt"
                                        value="no"
                                        checked={pgtValue === "no"}
                                        onChange={(e) => setPgtValue(e.target.value)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='section4'>
                <p className='heading4'>Do you have any of these medical conditions?</p>
                <div className="checkbox_container">
                    <label className={`section4_label ${conditions.PCOS ? 'bold' : ''}`}>
                        <input
                            type="checkbox"
                            name="PCOS"
                            checked={conditions.PCOS}
                            onChange={handleCheckboxChange}
                        />
                        PCOS
                    </label>
                    <label className={`section4_label ${conditions.Endometriosis ? 'bold' : ''}`}>
                        <input
                            type="checkbox"
                            name="Endometriosis"
                            checked={conditions.Endometriosis}
                            onChange={handleCheckboxChange}
                        />
                        Endometriosis
                    </label>
                    <label className={`section4_label ${conditions.LowOvarianReserve ? 'bold' : ''}`}>
                        <input
                            type="checkbox"
                            name="LowOvarianReserve"
                            checked={conditions.LowOvarianReserve}
                            onChange={handleCheckboxChange}
                        />
                        Low Ovarian Reserve
                    </label>
                    <label className={`section4_label ${conditions.MaleFactorInfertility ? 'bold' : ''}`}>
                        <input
                            type="checkbox"
                            name="MaleFactorInfertility"
                            checked={conditions.MaleFactorInfertility}
                            onChange={handleCheckboxChange}
                        />
                        Male Factor Infertility
                    </label>
                </div>
            </div>
            <div className='flex_btn'>
            <Link to='/result'>  
            <button className='btn_calc' onClick={calculateSuccessRate}>Calculate</button>
            </Link>
            </div>
            {/* {successRate !== null && (
                <div className="success-rate">
                    <h2>Your IVF Success Rate is {successRate}%</h2>
                </div>
            )} */}
        </div>
    );
};

export default Calculator;
