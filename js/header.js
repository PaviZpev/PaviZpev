class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/vendor.css">
	<link rel="stylesheet" href="css/main.css">

	<header id="header" class="row">
		<div class="header-logo">
			<a href="index.html">Hlavní stránka</a>
		</div>

		<nav id="header-nav-wrap">
			<ul class="header-main-nav">
				<li class="current">
					<a class="smoothscroll"  href="#home" title="home">Home</a>
				</li>
				<li>
					<a class="smoothscroll"  href="#about" title="about">About</a>
				</li>
				<li>
					<a class="smoothscroll"  href="#activities" title="download">Aktivity</a>
				</li>
				<li>
					<a class="smoothscroll"  href="#testimonials" title="">Recenze</a>
				</li>
			</ul>
			<a href="#" title="Rezervace" class="button button-primary cta">Rezervace</a>
		</nav>
		<a class="header-menu-toggle" href="#"><span>Menu</span></a>
	</header>

    `;
  }
}

customElements.define('header-component', Header);