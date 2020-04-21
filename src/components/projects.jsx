import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div id="projects">
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/texpe.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/teoboufis/TEXPE-Website">TEXPE</a></h3>
											<span>Website</span>
											<br />
											<span>Tracking expenses website built with 3-tier MVC framework, SQL, JAVA, JSP. Major code components can be found <a href="https://github.com/teoboufis/TEXPE-Website">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/barbers.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.figma.com/file/aq79ibbivSNq7srxZfIKeNuz/barber-s?node-id=0%3A1">Barber's</a></h3>
											<span>Mobile App Design</span>
											<br />
											<span>Barbershop booking mobile app design with figma. A basic UI of the app can be found <a href="https://www.figma.com/file/aq79ibbivSNq7srxZfIKeNuz/barber-s?node-id=0%3A1">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/diabetisys.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Diabetisys</a></h3>
											<span>Mobile App Design</span>
											<br />
											<span>Mobile app design of Diabetisys. Calculation of insulin equivalents & rendering of restaurant catalogs. A basic UI of the app can be found <a href="https://www.figma.com/file/eqLt9GIf49bbWuG7DylCqxue/Diabetisys?node-id=0%3A1">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Spell Check App</a></h3>
											<span>Application-JAVA</span>
											<br />
											<span>Applications'code & components can be found <a href="https://github.com/teoboufis/SpellCheck">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Algorithms</a></h3>
											<span>Application - Python</span>
											<br />
											<span>Applications'code & components can be found <a href="https://github.com/teoboufis/SpellCheck">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Algorithms</a></h3>
											<span>Application-Python</span>
											<br />
											<span>Applications'code & components can be found <a href="https://github.com/teoboufis/SpellCheck">here</a>.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
