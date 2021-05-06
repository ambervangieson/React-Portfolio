import React from 'react';
import './PastworkStyles.css';
import AWTY from '../../images/awty.png'
import Code from '../../images/Code.PNG'
import TT from '../../images/treasure.jpg'
import RP from '../../images/Responsive.png'
import Header from '../../components/Header/header.js'
import Footer from '../../components/Footer/footer.js'


const Pastwork = () => {
    return (
        <div id = "past">
            <Header />
            <hr />
            <div className = "Pastwork">
            <div className = "main">
                <h1>Examples of my work:</h1>
                <h2>Are we there yet?</h2>
                <h2><a href= "https://github.com/ambervangieson/Are_We_There_Yet.git">Github Repo</a></h2>
                <h2><a href="https://arewethereyet.herokuapp.com">Deployed </a></h2>
                <img src = {AWTY} alt = ''/>
                <h3>Code Refactor</h3>
                <h3><a href= "https://github.com/ambervangieson/Code-Refactor.git">Github Repo</a></h3>
                <h3><a href= "https://ambervangieson.github.io/Code-Refactor/">Deployed </a></h3>
                <img src = {Code} alt = ''/>
                <h4>Treasure Trove</h4>
                <h4><a href="https://github.com/ambervangieson/Project_1_Treasure_Trove.git">Github Repo</a></h4>
                <h4><a href="https://ambervangieson.github.io/Project_1_Treasure_Trove/">Deployed</a></h4>
                <img src = {TT} alt = ''/>
                <h5>Responsive Portfolio</h5>
                <h5><a href="https://github.com/ambervangieson/Portfolio.git">Github Repo</a></h5>
                <h5><a href="https://ambervangieson.github.io/Portfolio/">Deployed</a></h5>
                <img src = {RP} alt = ''/>
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default Pastwork;
