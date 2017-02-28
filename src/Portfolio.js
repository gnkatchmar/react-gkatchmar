import React from 'react';
import './Portfolio.css';
import ReactDOM from 'react-dom';

var img = '';
var cloudy = '';

var propsObj = {

	header:	'Gregory Katchmar',

	socialUrls: {

		github: 'https://github.com/gnkatchmar',
		linkedIn: 'https://www.linkedin.com/in/gregory-katchmar-3a48275a/'

	}

};

var Portfolio = React.createClass({

	getDefaultProps(){

		return propsObj;

	},

	render: function () {

		var {github,linkedIn} = this.props.socialUrls;

		var header = this.props.header;

return (
        <div className="Portfolio-Page">
					{/*<nav>
						<div className='fixed'>
						<strong className='brand'>Name</strong>
						<menu className='buttonGroup'>
							<button className='nav-button'>
								<a href='#home'>Home</a>
							</button>
							<button className='nav-button'>
								<a href='#about'>About</a>
							</button>
							<button className='nav-button'>
								<a href='#portfolio'>Portfolio</a>
							</button>
							<button className='nav-button'>
								<a href='#contact'>Contact</a>
							</button>
						</menu>
						</div>
					</nav>*/}
					<div id='home' className='vh sec1'>
						<div ref='fluid' className='fluid'>
							<header >
								<h1>{header}</h1>
							</header>
							<hr />
							<section className='center'>
								<a target='_blank' href={github} className='social-button'>
									Github
								</a>
								<a target='_blank' href={linkedIn} className='social-button'>
									LinkedIn
								</a>
							</section>
						</div>
					</div>{/*end sec1*/}

					<div id='portfolio' className='vh sec3'>
						<div className='fluid portfolio'>
							<h3 className='portfolioHead'>Portfolio</h3>
							<div className='images'>
								<div className='pf-img'>
								<img src={cloudy} alt='img' />
								<div className='center caption'>
									<br />
									<div className='projectsHead'>The BigToDo</div>
									<p>
										<strong>Code Fellows 401 final project using a full MEAN stack to create a streamlined, universal “to do” app (1/2017).</strong>
									</p>
								</div>
								</div>
								<div className='pf-img'>
								<img src={cloudy} alt='img' />
								<div className='center caption'>
									<br />
									<div className='projectsHead'>Spotify Fan Club</div>
									<p>
										<strong>Code Fellows 401 midterm project using a Node.js/Express/MongoDB backend and the Spotify API with OAuth to create a social app for Spotify users (11/2016).</strong>
									</p>
								</div>
								</div>
								<div className='pf-img'>
									<img src={cloudy} alt='img' />
									<div className='center caption'>
										<br />
										<div className='projectsHead'>Food Truck Finder</div>
										<p>
											<strong>Code Fellows 301 final project using Yelp API, geolocation, and Skeleton.css to create a mobile-first, responsive app that streamlines the food truck finding process (10/2016).</strong>
										</p>
									</div>
									</div>
								<div className='pf-img'>
									<img src={cloudy} alt='img' />
									<div className='center caption'>
										<br />
										<div className='projectsHead'>Portland Weekend Brunch Finder</div>
										<p>
											<strong>Code Fellows 201 final project using geolocation, Google Places and Maps APIs to create a brunch finding app (8/2016).</strong>
										</p>
									</div>
								</div>
								
							</div>
						</div>
						{/*<div id='contact' className='fluid contact-view'>
							<p>Contact me at gregkatchmar@gmail.com</p>
						</div>*/}
					</div>{/*end sec 3*/}
				</div>
			);
	}
});

ReactDOM.render(<Portfolio />, document.getElementById('root'));

export default Portfolio;