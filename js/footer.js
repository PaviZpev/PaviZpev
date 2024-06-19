class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/vendor.css">
	<link rel="stylesheet" href="css/main.css">

	<footer>
		<div class="footer-main">
			<div class="row">  
				<div class="col-three md-1-3 tab-full footer-info">			
					<h4>Dům v Libochovicích</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
					<ul class="footer-social-list">
						<li>
							<a class="card-a" href="#"><img style="height: 16px" src="images/airbnb-r.png"><img style="height: 16px; top: 3px" class="img-top-a" src="images/airbnb-w.png"></a>
						</li>
						<!--li>
							<a href="#"><i class="fa fa-youtube-play"></i></a>
						</li-->
						<li>
							<a href="#"><i class="fa fa-instagram"></i></a>
						</li>
					</ul>
				</div> 
				<div class="col-three md-1-3 tab-1-2 mob-full footer-contact">
					<h4>Contact</h4>
					<p>Kožešnická 328<br>Libochovice <br>411 17<br></p>
					<p>pavi.zpev@gmail.com<br>
					</p>
				</div>
				<div class="col-two md-1-3 tab-1-2 mob-full footer-site-links">
					<h4>Site Links</h4>
					<ul class="list-links">
						<li><a href="#">Hlavní stránka</a></li>
						<li><a href="#">O nas</a></li>
						<li><a href="#">Jak nás najdete</a></li>
						<li><a href="zabavy/index.html">Zábavy</a></li>
					</ul>
				</div>
				<div class="col-four md-1-2 tab-full footer-subscribe">
					<h4>Our Newsletter</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div class="subscribe-form">
						<form id="mc-form" class="group" novalidate="true">
							<input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required=""> 
							<input type="submit" name="subscribe" value="Send">
							<label for="mc-email" class="subscribe-message"></label>
						</form>
					</div>
				</div>
			</div> 
		</div> 

		<div class="footer-bottom">
			<div class="row">
				<div class="col-twelve">
					<div class="copyright">
						<span>© Pazi Zpev</span> 
					 </div>
					 <div id="go-top">
						<a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up"></i></a>
					 </div>
				</div>
			</div>
		</div>
	</footer>

    `;
  }
}

customElements.define('footer-component', Footer);