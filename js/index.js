// CONSTS
const sections = document.querySelectorAll("main > section")
const header = document.querySelector(".wrapper .header")
const footer = document.querySelector(".wrapper .footer")

// FUNCTIONS
function loadSectionsContent() {
	sections.forEach((sectionElm) => {
		let sectionType = sectionElm.classList.value
		console.log(sectionType)
		if (sectionType == "hero") {
			let replacedHeadline = hero.headline.replace("save your time", "<span>save your time</span>")
			sectionElm.insertAdjacentHTML("beforeend", `<figure><img src="${hero.image}" alt="A image of someone."><figcaption><h1>${replacedHeadline}</h1><p>${hero.copy}</p><button><img src="${hero.icon}" alt="globe"> Explore</button></figcaption></figure>`)
		} else if (sectionType == "services") {
			sectionElm.insertAdjacentHTML("beforeend", `<ol id="service-list"></ol>`)
			let listHolder = sectionElm.querySelector("ol")
			services.forEach((cValue) => {
				listHolder.insertAdjacentHTML("beforeend", `<li><img src="${cValue.illustration}" alt="illustration"><h3>${cValue.headline}</h3><p>${cValue.text}</p><a href="#">${cValue.linktext}</a></li>`)
			})
		} else if (sectionType == "facilities") {
			sectionElm.insertAdjacentHTML("beforeend", `<h2>${facilities.headline}</h2>`)
			sectionElm.insertAdjacentHTML("beforeend", `<ol id="facilities-list"></ol>`)
			let listHolder = sectionElm.querySelector("ol")
			facilities.options.forEach((cValue) => {
				listHolder.insertAdjacentHTML("beforeend", `<li><img src="${cValue.icon}" alt="icon"><h3>${cValue.headline}</h3><p>${cValue.text}</p><a href="#">Show me more</a></li>`)
			})
		} else if (sectionType == "sites") {
			sectionElm.insertAdjacentHTML("beforeend", `<article><h2>${sites.headline}</h2><p>${sites.text}</p><button><img src="${sites.btnicon}" alt="icon"> Start</button></article>`)
			sectionElm.insertAdjacentHTML("beforeend", `<ul id="sites-list"></ul>`)
			let listHolder = sectionElm.querySelector("ul")
			sites.places.forEach((cValue) => {
				listHolder.insertAdjacentHTML("beforeend", `<li><figure><img src="${cValue.img}" alt="nice image"><h3>${cValue.name}</h3><figcaption>${cValue.city}</figcaption></figure><a href="#">View the Site</a></li>`)
			})
		} else if (sectionType == "advantages") {
			sectionElm.insertAdjacentHTML("beforeend", `<h2>Our Advantages</h2>`)
			sectionElm.insertAdjacentHTML("beforeend", `<ol id="advantages-list"></ol>`)
			let listHolder = sectionElm.querySelector("ol")
			advantages.forEach((cValue) => {
				listHolder.insertAdjacentHTML("beforeend", `<li><img src="${cValue.icon}" alt="icon"><h3>${cValue.headline}</h3><p>${cValue.text}</p></li>`)
			})
		}
	})
}

function loadHeaderContent() {
	headeres.forEach((cValue, idx) => {
		if (idx == 0) {
			header.insertAdjacentHTML("beforeend", `<figure id="website-icon"><img src="${cValue.icon}" alt="website icon"></figure>`)
		} else {
			header.insertAdjacentHTML("beforeend", `<div id="menu"><figure><img id="menu-status" src="${cValue.icon}" alt="icon"><img src="${cValue.profile}" alt="profile icon"></figure><ol id="menu-items"></ol></div>`)
			let menuItems = header.querySelector("header > div > ol")
			cValue.options.forEach((value) => {
				menuItems.insertAdjacentHTML("beforeend", `<li><a href="#">${value}</li>`)
			})
		}
	})
}

function loadFooterContent() {
	footer.insertAdjacentHTML("beforeend", `<div id="social-links"><div class="endIntro"><h3>${footerens.smalltext}</h3><h2>${footerens.headline}</h2></div></div>`)
	let divHolder = footer.querySelector("footer > div")
	footerens.options.forEach((cValue) => {
		let endOutput = `<div class="infoBox"><h3>${cValue.headline}</h3>`
		cValue.links.forEach((value) => {
			endOutput = `${endOutput}<a href="#">${value}</a>`
		})
		divHolder.insertAdjacentHTML("beforeend", `${endOutput}</div>`)
	})

	footer.insertAdjacentHTML("beforeend", `<nav class="navigation"><p>${footerens.bottom.headline}</p><ol class="links"></ol></nav>`)
	let navListHolder = footer.querySelector("nav > ol")
	footerens.bottom.options.forEach((cValue) => {
		navListHolder.insertAdjacentHTML("beforeend", `<li><a href="#">${cValue}</a></li>`)
	})

	const profile = document.querySelector(".wrapper #menu")
	console.log(profile);

	profile.addEventListener("click", () => { profile.classList.toggle("open") })
}

// RUNS
loadHeaderContent()
loadSectionsContent()
loadFooterContent()